import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      const response = await emailjs.sendForm(
        'service_m9zndf3', 
        'template_9zib3ye', 
        formRef.current, 
        { publicKey: 'iLwQuqZrCWJFll3iR' } // Replace with your actual public key
      );

      if (response.status === 200) {
        setStatus('Message sent successfully! ✅');
        setTimeout(() => {
          setStatus(null);
        }, 1000);
        setFormData({ name: '', email: '', message: '' }); // Clear form
        formRef.current.reset(); 
      } else {
        setStatus('Failed to send message. ❌');
        setTimeout(() => {
          setStatus(null);
        }, 1000);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('An error occurred. Please try again.');
      setTimeout(() => {
        setStatus(null);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <form ref={formRef} className="inputs" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className='button1'>Send Message</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
