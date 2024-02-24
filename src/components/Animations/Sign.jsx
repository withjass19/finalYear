import { useState } from 'react';

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    otp: '',
    otpSent: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSendOTP = () => {
    // Simulate sending OTP
    setTimeout(() => {
      const generatedOTP = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit OTP
      setFormData(prevState => ({
        ...prevState,
        otp: generatedOTP.toString(),
        otpSent: true
      }));
    }, 1000); // Simulate delay for OTP generation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send form data to the server
    console.log(formData);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input className='border-[2px] border-black' type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input className='border-[2px] border-black' type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input className='border-[2px] border-black' type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          {formData.phoneNumber && !formData.otpSent && (
            <button type="button" onClick={handleSendOTP}>Send OTP</button>
          )}
        </div>
        {formData.otpSent && (
          <div>
            <label>OTP:</label>
            <input className='border-[2px] border-black' type="text" name="otp" value={formData.otp} onChange={handleChange} required />
          </div>
        )}
        <div>
          <label>Password:</label>
          <input className='border-[2px] border-black' type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
