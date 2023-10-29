import React, { useState } from 'react';
import LoginForm from '../Components/Login.jsx'
import RegistrationForm from '../Components/Register.jsx'


const AuthScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    const validationErrors = validateRegistrationForm();
    if (Object.keys(validationErrors).length === 0) {
      // Registration logic (e.g., sending data to the server)
      console.log('Registration Data:', { name, username, email, accountNumber, password });
      clearFields();
      setIsRegistered(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleLogin = () => {
    const validationErrors = validateLoginForm();
    if (Object.keys(validationErrors).length === 0) {
      // Login logic (e.g., checking credentials against a database)
      console.log('Login Data:', { username, password });
      clearFields();
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

    if (!username.trim()) {
      errors.username = 'Username is required';
    } else {
      // Clear the error when the user starts typing
      delete errors.username;
    }

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
        {isLoginForm && !isRegistered ? (
          <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            errors={errors}
          />
        ) : !isRegistered ? (
          <RegistrationForm
            name={name}
            username={username}
            email={email}
            accountNumber={accountNumber}
            password={password}
            setName={setName}
            setUsername={setUsername}
            setEmail={setEmail}
            setAccountNumber={setAccountNumber}
            setPassword={setPassword}
            handleRegister={handleRegister}
            errors={errors}
          />
        ) : (
          <div>
            <h2 className="text-center text-2xl font-bold mb-4">Registration Successful</h2>
            <button onClick={handleSwitchForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-4 w-full focus:outline-none focus:shadow-outline">Login</button>
          </div>
        )}
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
    </div>
  );
};



export default AuthScreen;
