"use client";

import React, { useState } from "react";

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Register: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
    receivePromotion: true,
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div
      className="opacity-overlay"
      id="soap-popupbox"
      style={{ display: "block" }}
    >
      <div className="container">
        <div className="popup-wrapper">
          <div className="col-xs-12 col-sm-9 popup-content">
            <div id="ti-signup" className="ti-signup-box ti-box" style={{ display: "block" }}>
              <div className="text-center">
                <h3 className="border-bottom-light padding-bottom-10">
                  Register
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <button
                  type="button"
                  className="custom-close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="form-group">
                  <input
                    type="text"
                    className="input-text full-width"
                    placeholder="Email Id"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="isd-mobile-input-section form-group">
                  <span className="country-code-highlighter">
                    <span>&nbsp;</span>
                    <input
                      type="text"
                      id="mobileISDCode"
                      value="+40"
                      readOnly
                    />
                  </span>
                  <select
                    className="form-control country-code-select"
                    id="ddlmobileISDCode"
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  >
                    <option value="">DaillingCode</option>
                    {/* Add options here */}
                  </select>
                  <input
                    type="text"
                    id="txtmobile"
                    className="mobile-field-input"
                    placeholder="Mobile Number"
                    maxLength={17}
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="input-text full-width"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <div>
                    <input
                      type="checkbox"
                      checked={formData.receivePromotion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          receivePromotion: e.target.checked,
                        })
                      }
                    />
                    <p className="description">
                      &nbsp;I am interested to receive Promotions and Special
                      Offers from S.C Z TOUR SRL.
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <p className="description">
                    By signing up, you agree to the{" "}
                    <a href="/Home/TermAndConditions" target="_blank">
                      terms and conditions
                    </a>
                  </p>
                </div>
                <button
                  id="btnregister"
                  type="submit"
                  className="exlore_now btn-default text-uppercase font-12"
                >
                  Register
                </button>
                <hr/>
              </form>
              <p>
                Already a S.C Z TOUR SRL member?{" "}
                <a href="#" onClick={onClose}>
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
