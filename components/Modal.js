"use client";
import React, { useEffect } from 'react';

const Modal = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000); // Close the modal after 3 seconds (adjust as needed)
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Payment Successful!</p>
      </div>
    </div>
  );
};

export default Modal;