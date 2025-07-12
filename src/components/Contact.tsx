import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formsubmit.co/ajax/vinaykarella12104@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 4000); // hide popup after 4 seconds
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start fade-in ${inView ? 'appear' : ''}`}
        >
          {/* Contact Info */}
          <div>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              I'm currently looking for internship opportunities and collaborations on projects.
              Feel free to reach out if you have any questions or just want to connect!
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-1">Email</h3>
                  <a
                    href="mailto:vinaykarella12104@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    vinaykarella12104@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-1">Phone</h3>
                  <a
                    href="tel:+916304397055"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    +91 63043 97055
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-1">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Tadepalligudem, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Send me a message</h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                  ></textarea>
                </div>

                {/* Button */}
                <button type="submit" className="w-full btn-primary mt-2 flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </button>

                {/* ✅ Success Message */}
                {submitted && (
                  <div className="mt-4 flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Message sent successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
