import { useState } from 'react'
import { PiEyeLight as Eye, PiEyeSlashLight as EyeClosed } from 'react-icons/pi'


const LoginForm = ({ username, password, setUsername, setPassword, handleLogin, errors }) => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div className="w-full space-y-4">

      <div className="space-y-1">
        <label className="block text-black text-sm font-bold" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (errors.username) {
              // Clear the error when the user starts typing
              delete errors.username;
            }
          }}
          className={`appearance-none border rounded-md w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
            errors.username ? 'border-red-500' : ''
          }`}
        />
        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
      </div>



      <div className="space-y-1">
        <label className="block text-black text-sm font-bold" htmlFor="password">Password</label>
        <div className="flex items-center">

          <input
            type={isVisible ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                // Clear the error when the user starts typing
                delete errors.password;
              }
            }}
            className={`appearance-none border rounded-md w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
           <button onClick={toggleVisibility} className="ml-2 rounded-sm py-2 px-2 font-bold h-full bg-white">
            {isVisible ? <EyeClosed size={25}/> : <Eye size={25}/>}
          </button>

        </div>

        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-md mb-4 w-full focus:outline-none focus:shadow-outline">Login</button>
      
    </div>
  );
};

export default LoginForm