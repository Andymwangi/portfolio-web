import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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
          className="my-4 flex justify-center items-center"
        >
          <FaPhoneAlt className="mr-2" />{' '}
          <a href={`tel:${CONTACT.phoneNo.replace(/ /g, '')}`} className="hover:underline">
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center"
        >
          <FaEnvelope className="mr-2" />{' '}
          <a href={`mailto:${CONTACT.email}`} className="hover:underline">
            {CONTACT.email}
          </a>
        </motion.p>
        <div className="my-8 flex justify-center space-x-4">
          <motion.a
            href="https://github.com/Andymwangi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-2xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/anderson-mwangi/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-2xl"
          >
            <FaLinkedin />
          </motion.a>
        </div>
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
            className="w-full mt-2 p-2 rounded-md"
            style={{ backgroundColor: '#4B5563', color: '#FFF' }}
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
            className="w-full mt-2 p-2 rounded-md"
            style={{ backgroundColor: '#4B5563', color: '#FFF' }}
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
            className="w-full mt-2 p-2 rounded-md"
            style={{ backgroundColor: '#4B5563', color: '#FFF' }}
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
  );
};

export default Contact;
