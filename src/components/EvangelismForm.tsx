import React, { useEffect, useState, createElement } from 'react';
import { CheckIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function EvangelismForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [animateIn, setAnimateIn] = useState(false);
  useEffect(() => {
    // Trigger entrance animation after component mounts
    setAnimateIn(true);
  }, []);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    phone: '',
    email: '',
    address: '',
    conversionDate: '',
    conversionLocation: '',
    evangelistName: '',
    previousReligion: '',
    prayerRequest: '',
    followUpPreference: 'phone',
    bibleStudyInterest: false,
    baptismInterest: false
  });
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log(formData);
    setFormSubmitted(true);
  };
  const handleSectionClick = sectionNumber => {
    setActiveSection(sectionNumber);
  };
  if (formSubmitted) {
    return <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 text-center border-2 border-blue-300 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full shadow-md border-2 border-green-300 animate-bounce-in">
              <CheckIcon className="h-16 w-16 text-green-600 animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-3 animate-slide-in-right">
            Information Submitted Successfully!
          </h2>
          <p className="text-blue-800 mb-6 text-lg animate-fade-in">
            Thank you for recording this new convert. The follow-up team will be
            notified.
          </p>
          <button onClick={() => setFormSubmitted(false)} className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-8 py-3 rounded-md hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md font-semibold animate-pulse-subtle hover:scale-105">
            Submit Another
          </button>
        </div>
      </div>;
  }
  return <div className={`w-full bg-gradient-to-b from-blue-50 to-slate-100 min-h-screen py-8 transition-opacity duration-700 ease-in-out ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with colorful background */}
        <div className="text-center mb-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-6 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out animate-slide-in-down">
          <div className="bg-white rounded-full w-28 h-28 mx-auto mb-4 p-2 shadow-md animate-float">
            <img src="/download_%281%29.jpg" alt="Deeper Life Bible Church Logo" className="h-full w-full object-contain rounded-full animate-spin-slow" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1 animate-fade-in">
            Evangelism Record Form
          </h1>
          <p className="text-blue-100 mt-2 animate-fade-in-delayed">
            Please fill in the details of the new convert
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-t-4 border-blue-600 animate-slide-in-up">
          <form onSubmit={handleSubmit}>
            <div className={`mb-8 transition-all duration-500 ease-in-out ${activeSection === 1 ? 'opacity-100 scale-100' : 'opacity-80 scale-98'}`} onClick={() => handleSectionClick(1)}>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-white text-xl font-bold animate-pulse-subtle">
                    1
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-blue-800 transition-colors duration-300 hover:text-blue-600">
                  Personal Information
                </h2>
              </div>
              <div className="pl-4 border-l-4 border-blue-200 animate-slide-in-right">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.1s'
                }}>
                    <label htmlFor="firstName" className="block text-sm font-medium text-blue-800 mb-1">
                      First Name*
                    </label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner" />
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.2s'
                }}>
                    <label htmlFor="lastName" className="block text-sm font-medium text-blue-800 mb-1">
                      Last Name*
                    </label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner" />
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.3s'
                }}>
                    <label htmlFor="gender" className="block text-sm font-medium text-blue-800 mb-1">
                      Gender*
                    </label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.4s'
                }}>
                    <label htmlFor="age" className="block text-sm font-medium text-blue-800 mb-1">
                      Age Group*
                    </label>
                    <select id="age" name="age" value={formData.age} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner">
                      <option value="">Select Age Group</option>
                      <option value="under18">Under 18</option>
                      <option value="18-24">18-24</option>
                      <option value="25-34">25-34</option>
                      <option value="35-44">35-44</option>
                      <option value="45-54">45-54</option>
                      <option value="55+">55+</option>
                    </select>
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.5s'
                }}>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-800 mb-1">
                      Phone Number*
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner" />
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.6s'
                }}>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner" />
                  </div>
                  <div className="md:col-span-2 animate-fade-in-up" style={{
                  animationDelay: '0.7s'
                }}>
                    <label htmlFor="address" className="block text-sm font-medium text-blue-800 mb-1">
                      Residential Address*
                    </label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 transition-all duration-300 ease-in-out hover:bg-blue-100 focus:shadow-inner" rows={2}></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className={`mb-8 transition-all duration-500 ease-in-out ${activeSection === 2 ? 'opacity-100 scale-100' : 'opacity-80 scale-98'}`} onClick={() => handleSectionClick(2)}>
              <div className="flex items-center mb-4">
                <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-white text-xl font-bold animate-pulse-subtle">
                    2
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-red-700 transition-colors duration-300 hover:text-red-500">
                  Conversion Details
                </h2>
              </div>
              <div className="pl-4 border-l-4 border-red-200 animate-slide-in-right">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.1s'
                }}>
                    <label htmlFor="conversionDate" className="block text-sm font-medium text-red-700 mb-1">
                      Date of Conversion*
                    </label>
                    <input type="date" id="conversionDate" name="conversionDate" value={formData.conversionDate} onChange={handleChange} required className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 transition-all duration-300 ease-in-out hover:bg-red-100 focus:shadow-inner" />
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.2s'
                }}>
                    <label htmlFor="conversionLocation" className="block text-sm font-medium text-red-700 mb-1">
                      Location of Conversion*
                    </label>
                    <input type="text" id="conversionLocation" name="conversionLocation" value={formData.conversionLocation} onChange={handleChange} placeholder="e.g., Church service, crusade, home visit" required className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 transition-all duration-300 ease-in-out hover:bg-red-100 focus:shadow-inner" />
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.3s'
                }}>
                    <label htmlFor="evangelistName" className="block text-sm font-medium text-red-700 mb-1">
                      Evangelist/Minister's Name*
                    </label>
                    <input type="text" id="evangelistName" name="evangelistName" value={formData.evangelistName} onChange={handleChange} required className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 transition-all duration-300 ease-in-out hover:bg-red-100 focus:shadow-inner" />
                  </div>
                  <div className="animate-fade-in-up" style={{
                  animationDelay: '0.4s'
                }}>
                    <label htmlFor="previousReligion" className="block text-sm font-medium text-red-700 mb-1">
                      Previous Religion/Denomination
                    </label>
                    <input type="text" id="previousReligion" name="previousReligion" value={formData.previousReligion} onChange={handleChange} className="w-full px-3 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 transition-all duration-300 ease-in-out hover:bg-red-100 focus:shadow-inner" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`mb-8 transition-all duration-500 ease-in-out ${activeSection === 3 ? 'opacity-100 scale-100' : 'opacity-80 scale-98'}`} onClick={() => handleSectionClick(3)}>
              <div className="flex items-center mb-4">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <span className="text-white text-xl font-bold animate-pulse-subtle">
                    3
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-green-700 transition-colors duration-300 hover:text-green-500">
                  Follow-up Information
                </h2>
              </div>
              <div className="pl-4 border-l-4 border-green-200 animate-slide-in-right">
                <div className="mb-4 animate-fade-in-up" style={{
                animationDelay: '0.1s'
              }}>
                  <label htmlFor="prayerRequest" className="block text-sm font-medium text-green-700 mb-1">
                    Prayer Request
                  </label>
                  <textarea id="prayerRequest" name="prayerRequest" value={formData.prayerRequest} onChange={handleChange} className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 transition-all duration-300 ease-in-out hover:bg-green-100 focus:shadow-inner" rows={3}></textarea>
                </div>
                <div className="mb-4 animate-fade-in-up" style={{
                animationDelay: '0.2s'
              }}>
                  <p className="block text-sm font-medium text-green-700 mb-2">
                    Preferred Follow-up Method*
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200 hover:bg-green-100 transition-all duration-300 cursor-pointer hover:shadow-md transform hover:scale-105">
                      <input type="radio" name="followUpPreference" value="phone" checked={formData.followUpPreference === 'phone'} onChange={handleChange} className="h-4 w-4 text-green-600" />
                      <span className="ml-2 text-sm text-green-800">
                        Phone Call
                      </span>
                    </label>
                    <label className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200 hover:bg-green-100 transition-all duration-300 cursor-pointer hover:shadow-md transform hover:scale-105">
                      <input type="radio" name="followUpPreference" value="visit" checked={formData.followUpPreference === 'visit'} onChange={handleChange} className="h-4 w-4 text-green-600" />
                      <span className="ml-2 text-sm text-green-800">
                        Home Visit
                      </span>
                    </label>
                    <label className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200 hover:bg-green-100 transition-all duration-300 cursor-pointer hover:shadow-md transform hover:scale-105">
                      <input type="radio" name="followUpPreference" value="sms" checked={formData.followUpPreference === 'sms'} onChange={handleChange} className="h-4 w-4 text-green-600" />
                      <span className="ml-2 text-sm text-green-800">SMS</span>
                    </label>
                    <label className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200 hover:bg-green-100 transition-all duration-300 cursor-pointer hover:shadow-md transform hover:scale-105">
                      <input type="radio" name="followUpPreference" value="email" checked={formData.followUpPreference === 'email'} onChange={handleChange} className="h-4 w-4 text-green-600" />
                      <span className="ml-2 text-sm text-green-800">Email</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-3 animate-fade-in-up" style={{
                animationDelay: '0.3s'
              }}>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="bibleStudyInterest" name="bibleStudyInterest" type="checkbox" checked={formData.bibleStudyInterest} onChange={handleChange} className="h-5 w-5 text-green-600 rounded border-green-300 transition-all duration-300 hover:shadow-md" />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="bibleStudyInterest" className="text-sm text-green-800">
                        Interested in Bible Study
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="baptismInterest" name="baptismInterest" type="checkbox" checked={formData.baptismInterest} onChange={handleChange} className="h-5 w-5 text-green-600 rounded border-green-300 transition-all duration-300 hover:shadow-md" />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="baptismInterest" className="text-sm text-green-800">
                        Interested in Water Baptism
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 animate-bounce-in" style={{
            animationDelay: '0.5s'
          }}>
              <button type="submit" className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white px-10 py-4 rounded-md hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 transition-all duration-500 shadow-lg text-lg font-bold transform hover:scale-105 hover:shadow-xl animate-pulse-glow">
                Submit Form
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-6 py-3 bg-blue-800 text-white rounded-lg shadow-md animate-slide-in-up-delayed">
          <p>
            © {new Date().getFullYear()} Deeper Life Bible Church - Evangelism
            Department
          </p>
          <div className="mt-2">
            <Link to="/admin" className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-300">
              <UserIcon className="h-4 w-4 mr-1" />
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>;
}
// Add custom animation classes
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideInDown {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideInUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideInRight {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes pulseSubtle {
    0% { opacity: 1; }
    50% { opacity: 0.8; }
    100% { opacity: 1; }
  }
  @keyframes pulseGlow {
    0% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.8); }
    100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  .animate-fade-in {
    animation: fadeIn 0.8s ease-in-out forwards;
  }
  .animate-fade-in-delayed {
    animation: fadeIn 1.5s ease-in-out 0.5s forwards;
    opacity: 0;
  }
  .animate-fade-in-up {
    animation: slideInUp 0.8s ease-out forwards;
  }
  .animate-slide-in-down {
    animation: slideInDown 1s ease-out forwards;
  }
  .animate-slide-in-up {
    animation: slideInUp 0.8s ease-out forwards;
  }
  .animate-slide-in-up-delayed {
    animation: slideInUp 0.8s ease-out 0.8s forwards;
    opacity: 0;
  }
  .animate-slide-in-right {
    animation: slideInRight 0.6s ease-out forwards;
  }
  .animate-bounce-in {
    animation: bounceIn 1s ease-out forwards;
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-pulse-subtle {
    animation: pulseSubtle 2s infinite;
  }
  .animate-pulse-glow {
    animation: pulseGlow 2s infinite;
  }
  .animate-spin-slow {
    animation: spinSlow 15s linear infinite;
  }
  .animate-shake {
    animation: shake 0.5s ease-in-out;
  }
  .scale-98 {
    transform: scale(0.98);
  }
`;
document.head.appendChild(style);