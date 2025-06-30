import React, { useEffect, useState } from 'react';
import { KeyIcon, EyeIcon, EyeOffIcon, ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function AdminLogin() {
  const [animateIn, setAnimateIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  useEffect(() => {
    // Trigger entrance animation after component mounts
    setAnimateIn(true);
  }, []);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear error when user starts typing again
    if (loginError) setLoginError('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    // This is a mock authentication - in a real application, you would validate against a server
    if (formData.username === 'admin' && formData.password === 'password123') {
      setLoginSuccess(true);
    } else {
      setLoginError('Invalid username or password');
      // Shake effect for error
      const form = document.getElementById('login-form');
      form.classList.add('animate-shake');
      setTimeout(() => {
        form.classList.remove('animate-shake');
      }, 500);
    }
  };
  if (loginSuccess) {
    return <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg p-8 text-center border-2 border-green-300 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full shadow-md border-2 border-green-300 animate-bounce-in">
              <KeyIcon className="h-16 w-16 text-green-600 animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-green-900 mb-3 animate-slide-in-right">
            Login Successful!
          </h2>
          <p className="text-green-800 mb-6 text-lg animate-fade-in">
            Welcome to the Evangelism Records Administration Panel
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/admin/dashboard" className="bg-gradient-to-r from-green-800 to-green-600 text-white px-6 py-3 rounded-md hover:from-green-700 hover:to-green-500 transition-all duration-300 shadow-md font-semibold animate-pulse-subtle hover:scale-105">
              Go to Dashboard
            </Link>
            <Link to="/" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md font-semibold animate-pulse-subtle hover:scale-105">
              Back to Form
            </Link>
          </div>
        </div>
      </div>;
  }
  return <div className={`w-full bg-gradient-to-b from-blue-50 to-slate-100 min-h-screen py-8 transition-opacity duration-700 ease-in-out ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-md mx-auto px-4">
        {/* Header with colorful background */}
        <div className="text-center mb-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-6 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out animate-slide-in-down">
          <div className="bg-white rounded-full w-28 h-28 mx-auto mb-4 p-2 shadow-md animate-float">
            <img src="/download_%281%29.jpg" alt="Deeper Life Bible Church Logo" className="h-full w-full object-contain rounded-full animate-spin-slow" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1 animate-fade-in">
            Admin Login
          </h1>
          <p className="text-blue-100 mt-2 animate-fade-in-delayed">
            Access evangelism records
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-t-4 border-blue-600 animate-slide-in-up">
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="mb-8 animate-slide-in-right">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md animate-pulse-subtle">
                  <KeyIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-blue-800">
                  Administrator Authentication
                </h2>
              </div>
              {loginError && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded animate-fade-in">
                  <p>{loginError}</p>
                </div>}
              <div className="space-y-6">
                <div className="animate-fade-in-up" style={{
                animationDelay: '0.1s'
              }}>
                  <label htmlFor="username" className="block text-sm font-medium text-blue-800 mb-1">
                    Username*
                  </label>
                  <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required className="w-full px-3 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner" placeholder="Enter your username" />
                </div>
                <div className="animate-fade-in-up" style={{
                animationDelay: '0.2s'
              }}>
                  <label htmlFor="password" className="block text-sm font-medium text-blue-800 mb-1">
                    Password*
                  </label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-3 py-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner" placeholder="Enter your password" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                      {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 animate-bounce-in" style={{
              animationDelay: '0.3s'
            }}>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white px-6 py-3 rounded-md hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 transition-all duration-500 shadow-lg text-lg font-bold transform hover:scale-105 hover:shadow-xl animate-pulse-glow">
                  Login
                </button>
              </div>
              <div className="mt-6 text-center animate-fade-in-delayed">
                <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Back to Evangelism Form
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="text-center mt-6 py-3 bg-blue-800 text-white rounded-lg shadow-md animate-slide-in-up-delayed">
          <p>
            © {new Date().getFullYear()} Deeper Life Bible Church - Admin
            Portal
          </p>
        </div>
      </div>
    </div>;
}