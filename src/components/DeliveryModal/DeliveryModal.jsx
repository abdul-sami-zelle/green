"use client";
import React from "react";
import "./DeliveryModal.css";
import { IoClose } from "react-icons/io5";

export default function DeliveryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="delivery-modal-overlay" onClick={onClose}>
      <div className="delivery-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="delivery-modal-header">
          <h2>Set Your Location</h2>
          <button className="close-btn" onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <div className="delivery-search">
          <input type="text" placeholder="Search location" />
        </div>
        <div className="delivery-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31946806.573039252!2d-123.72803089327026!3d37.16031619061713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e89c0c1f%3A0xcee23a57acb0a!2sUnited%20States!5e0!3m2!1sen!2s!4v1707892289371!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="delivery-modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-continue">Continue</button>
        </div>
      </div>
    </div>
  );
}
