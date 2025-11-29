import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
    // 1. Get your unique Formspree endpoint URL and place it here
    const formspreeEndpoint = "https://formspree.io/f/YOUR_UNIQUE_ID_HERE"; 

    return (
        <section id="contact" className="contact-section">
            <div className="contact-grid">
                
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>
                        Fill out the form below, and your message will be sent directly to my inbox.
                    </p>
                    {/* Other contact details remain here */}
                    <p className="contact-detail">
                        <strong>Email:</strong> <a href="mailto:thiyagarajahpriyangani@gmail.com">thiyagarajahpriyangani@gmail.com</a>
                    </p>
                    <p className="contact-detail">
                        <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/priyangani-thiyagarajah-b8731738b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/priyangani-thiyagarajah</a>
                    </p>
                </div>

                {/* 2. Simple HTML form pointing to the endpoint */}
                <form 
                    className="contact-form" 
                    method="POST" 
                    action={formspreeEndpoint} // <-- THIS is the key change
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        {/* The 'name' attribute is critical for these services! */}
                        <input type="text" id="name" name="name" required /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required></textarea>
                    </div>
                    {/* Formspree will handle the default browser submission */}
                    <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;