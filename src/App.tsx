import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { EvangelismForm } from './components/EvangelismForm';
import { AdminLogin } from './components/AdminLogin';
export function App() {
  return <BrowserRouter>
      <div className="bg-slate-50 min-h-screen w-full">
        <Routes>
          <Route path="/" element={<EvangelismForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-800 mb-6">
                  Admin Dashboard
                </h1>
                <p className="text-lg mb-6">
                  This is a placeholder for the admin dashboard where evangelism
                  records would be displayed.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h2 className="text-xl font-semibold text-blue-700 mb-4">
                    Example Record
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-medium">John Doe</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Conversion Date</p>
                      <p className="font-medium">2023-08-15</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">+1234567890</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Follow-up</p>
                      <p className="font-medium">Phone Call</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                    Back to Form
                  </Link>
                </div>
              </div>} />
        </Routes>
      </div>
    </BrowserRouter>;
}