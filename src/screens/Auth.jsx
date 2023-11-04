import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/Login.jsx'
import { useUser } from '../Context/userContext.jsx';
import RegistrationForm from '../Components/Register.jsx'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
     

const AuthScreen = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const BASE_URL = 'https://bankcraft.onrender.com/api/v1'

  const handleRegister = async() => {
    const validationErrors = validateRegistrationForm();
    if (Object.keys(validationErrors).length === 0) {
    
    // Registration logic (e.g., sending data to the server)
      console.log('Registration Data:', { name, username, email, accountNumber, password });
    
    // Show a loading toast
    const loadingToast = toast.loading('Registering...');

    axios
      .post(`${BASE_URL}/users`, { first_name: name, last_name: '...', email, password })
      .then((response) => {
        // Hide the loading toast when the request is completed
        toast.dismiss(loadingToast);

        if (response.data.success) {
          setIsRegistered(true);
          toast.success('Registration successful');
        } else {
          throw new Error(response.response.data.message);
        }
      })
      .catch((error) => {
        // Hide the loading toast in case of an error
        toast.dismiss(loadingToast);
        console.error(error.response.data.message);
        toast.error('An error occurred during registration: ' + error.message);
      });

    } else {
      setErrors(validationErrors);
    }
  };

  
  const handleLogin = async() => {
    const validationErrors = validateLoginForm();
    if (Object.keys(validationErrors).length === 0) {
      // Login logic (e.g., checking credentials against a database)
      console.log('Login Data:', { username, password });
      
      var loadingToast = toast.loading('Authenticating...');
      
      axios.post(`${BASE_URL}/users/login`, { email: username, password })
      .then((response) => {
        toast.dismiss(loadingToast); 

        if (response.data.success){
          console.log(response);
          setUser({name:username})
          navigate('/')

        }else {
          throw new Error(response.response.data.message);
        }

      })

      .catch((error) => {
        toast.dismiss(loadingToast);
        const err_msg = error.response ? error.response.data.message : 'An error occurred';
        toast.error(err_msg)
        console.log(err_msg);
        // setIsRegistered(true)

        // toast.error(err_msg, {
        //   // icon: '❌',
        //   style: { padding: '15px', fontSize: '1.2rem' },
        // });
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const clearFields = () => {
    setName('');
    setUsername('');
    setEmail('');
    setAccountNumber('');
    setPassword('');
    setErrors({});
  };

  const handleSwitchForm = () => {
    clearFields();
    setErrors({});
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };

  const validateLoginForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    } else {
      // Clear the error when the user starts typing
      delete errors.username;
    }

    if (!password) {
      errors.password = 'Password is required';
    } else {
      // Clear the error when the user starts typing
      delete errors.password;
    }

    return errors;
  };

  const validateRegistrationForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    } else {
      // Clear the error when the user starts typing
      delete errors.name;
    }

    // if (!username.trim()) {
    //   errors.username = 'Username is required';
    // } else {
    //   // Clear the error when the user starts typing
    //   delete errors.username;
    // }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    } else {
      // Clear the error when the user starts typing
      delete errors.email;
    }

    if (!accountNumber.trim()) {
      errors.accountNumber = 'Account Number is required';
    } else {
      // Clear the error when the user starts typing
      delete errors.accountNumber;
    }

    if (!password) {
      errors.password = 'Password is required';
    } else {
      // Clear the error when the user starts typing
      delete errors.password;
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex flex-col items-center mb-3 justify-center min-h-screen w-screen overflow-y-auto">
      <div className="w-full max-w-md rounded-md p-8 mb-4 transform transition-transform duration-300 ease-in-out">
        {isLoginForm ? (
          <h2 className="text-center text-2xl font-bold text-black mb-4">Login</h2>
        ) : (
          <h2 className="text-center text-2xl font-bold text-black mb-4">Register</h2>
        )}
        {isLoginForm ? (
          <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            errors={errors}
          />
        ) : (
          <RegistrationForm
            name={name}
            // username={username}
            email={email}
            accountNumber={accountNumber}
            password={password}
            setName={setName}
            // setUsername={setUsername}
            setEmail={setEmail}
            setAccountNumber={setAccountNumber}
            setPassword={setPassword}
            handleRegister={handleRegister}
            errors={errors}
          />
        ) }

      </div>
      <div className="text-center text-blue-600">
        {isLoginForm ? (
          <p>
            Don't have an account?{' '}
            <button onClick={handleSwitchForm} className="text-gray-700 bg-transparent p-1 hover:text-gray-800">Register</button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button onClick={handleSwitchForm} className="text-gray-700 bg-transparent p-1 hover:text-gray-800">Login</button>
          </p>
        )}
      </div>
      <Toaster />
    </div>
  );
};



export default AuthScreen;
