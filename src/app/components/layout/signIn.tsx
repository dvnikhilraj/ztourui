"use client";

import React, { useState } from 'react';

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'login' | 'forgot'>('login');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your login logic here
    setLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your forgot password logic here
    setLoading(false);
  };

  return (
    <div className="opacity-overlay" id="soap-popupbox" style={{ display: 'block' }}>
      <div className="container">
        <div className="popup-wrapper">
          {loading && (
            <i className="fa fa-spinner fa-spin spinner" />
          )}
          <div className="col-xs-12 col-sm-9 popup-content">
            {view === 'login' ? (
              <div className="ti-login-box ti-box" style={{ display: 'block' }}>
                <div className="text-center">
                  <h3 className="border-bottom-light padding-bottom-10">Sign In</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <button 
                      type="button" 
                      className="custom-close" 
                      onClick={onClose}
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <input
                      type="email"
                      className="input-text full-width logintextbox"
                      placeholder="Email Id"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="input-text full-width logintextbox form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group" style={{ textAlign: 'center' }}>
                    <a 
                      href="#" 
                      className="forgot-password pull-right"
                      onClick={(e) => {
                        e.preventDefault();
                        setView('forgot');
                      }}
                    >
                      Forgot password?
                    </a>
                    <button id="btnlogin"  type="submit" className="exlore_now btn-default text-uppercase font-12">
                      Sign In
                    </button>
                  </div>
                </form>
                <p>
                  Don't have an account? <a href="/register">Register</a>
                </p>
              </div>
            ) : (
              <div className="ti-login-box ti-box" style={{ display: 'block' }}>
                <button 
                  type="button" 
                  className="custom-close" 
                  onClick={() => {
                    setView('login');
                    onClose();
                  }}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="seperator">
                  <label>Forgot password?</label>
                </div>
                <div className="simple-signup">
                  <p className="description">
                    Please enter your registered email address. You will receive email to reset your password.
                  </p>
                </div>
                <hr />
                <form onSubmit={handleForgotPassword}>
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
                    <button id="btnforgot" type="submit" className="exlore_now btn-default text-uppercase font-12">
                      Submit
                    </button>
                  </div>
                </form>
                <div className="seperator"></div>
                <p>
                  Back to <a href="#" onClick={() => setView('login')}>Sign In</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};