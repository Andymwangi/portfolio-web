import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_e96tvol',
      'template_n416oew',
      formData,
      'FsdfXqyWTwi5In5UP'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
    }, (error) => {
      console.error('FAILED...', error);
      setStatusMessage('Failed to send the message. Please try again.');
      setIsSubmitted(true);
    });
  };

  return (
    <div id="contact" className="contact-section">
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href={`tel:${CONTACT.phoneNo.replace(/ /g, '')}`} className="hover:underline">
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <motion.a 
        whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`} className="hover:underline">
          {CONTACT.email}
        </motion.a>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-lg bg-gray-800 p-8 rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-2 mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-2 mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-2 mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Send Message
        </button>
        {isSubmitted && (
          <p className="mt-4 text-center text-white">{statusMessage}</p>
        )}
      </form>
    </div>
    </div>
  );
};

export default Contact;
