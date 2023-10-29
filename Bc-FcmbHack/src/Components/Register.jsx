const RegistrationForm = ({
  name,
  username,
  email,
  accountNumber,
  password,
  setName,
  setUsername,
  setEmail,
  setAccountNumber,
  setPassword,
  handleRegister,
  errors,
}) => {
  return (
    <div className="w-full space-y-4">

      <div className='space-y-1'>
        <label className="block text-black text-sm font-bold" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) {
              // Clear the error when the user starts typing
              delete errors.name;
            }
          }}
          className={`appearance-none border rounded-md w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
            errors.name ? 'border-red-500' : ''
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className='space-y-1'>
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

      <div className='space-y-1'>
        <label className="block text-black text-sm font-bold" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              // Clear the error when the user starts typing
              delete errors.email;
            }
          }}
          className={`appearance-none border rounded-md w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className='space-y-1'>
        <label className="block text-black text-sm font-bold" htmlFor="accountNumber">Account Number</label>
        <input
          type="text"
          id="accountNumber"
          placeholder="Enter your account number"
          value={accountNumber}
          onChange={(e) => {
            setAccountNumber(e.target.value);
            if (errors.accountNumber) {
              // Clear the error when the user starts typing
              delete errors.accountNumber;
            }
          }}
          className={`appearance-none border rounded-md w-full py-4 px-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
            errors.accountNumber ? 'border-red-500' : ''
          }`}
        />
        {errors.accountNumber && <p className="text-red-500 text-xs mt-1">{errors.accountNumber}</p>}
      </div>

      <div className='space-y-1'>
        <label className="block text-black text-sm font-bold" htmlFor="password">Password</label>
        <input
          type="password"
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
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      <button onClick={handleRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-md mb-4 w-full focus:outline-none focus:shadow-outline">Register</button>
    </div>
  );
};

export default RegistrationForm
