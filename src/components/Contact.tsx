import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Alert from './Alert'; // Adjust the path according to your project structure

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    user_name:"Hello world"
  });

  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({
    message: '',
    type: 'success',
    visible: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlert({
        message: 'Please fill out all fields.',
        type: 'error',
        visible: true,
      });
      return;
    }

    // Use EmailJS to send the form data via email
    emailjs
      .sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, e.target as HTMLFormElement, import.meta.env.VITE_APP_USER_ID)
      .then(
        () => {
          setAlert({
            message: 'Your message has been sent successfully!',
            type: 'success',
            visible: true,
          });
        },
        (error) => {
          setAlert({
            message: `Error sending message: ${error.text}`,
            type: 'error',
            visible: true,
          });
        }
      );

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      user_name:""
    });
  };

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-gray-800 rounded-lg"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>

        {alert.visible && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={handleCloseAlert}
          />
        )}
      </div>
    </section>
  );
};

export default Contact;
