"use client";

import React, { useState } from 'react';

interface ForgotPasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your forgot password logic here
  };

  return (
    <div className="opacity-overlay" id="soap-popupbox" style={{ display: 'block' }}>
      <div className="container">
        <div className="popup-wrapper">
          <div className="col-xs-12 col-sm-9 popup-content">
            <div className="ti-login-box ti-box" style={{ display: 'block' }}>
              <button 
                type="button" 
                className="custom-close" 
                onClick={onClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="seperator">
                <label>Forgot password?</label>
              </div>
              <div className="simple-signup">
                <p className="description">
                  Please enter your registered email address. You will receive an email to reset your password.
                </p>
              </div>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="input-text full-width"
                    placeholder="Email Id"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="exlore_now btn-default text-uppercase font-12">Submit</button>
                </div>
              </form>
              <div className="seperator"></div>
              <p>
                Back to <a href="#" onClick={onClose}>Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
