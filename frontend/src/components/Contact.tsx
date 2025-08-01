import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Clock,
  Globe
} from 'lucide-react';
import Swal from 'sweetalert2';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'antojoseph2026@gmail.com',
      action: 'mailto:antojoseph2026@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+916282289862',
      action: 'tel:+916282289862'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Idukki, Kerala',
      action: 'https://maps.app.goo.gl/g29dcF8m1bPerbcB8'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.antojoseph.website',
      action: 'https://www.antojoseph.website'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/antojoseph2806',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/antomaruthaniyil',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/anto_maruthaniyil',
      color: 'hover:text-blue-400'
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    Swal.fire({
      title: 'Sending...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const res = await fetch('https://antojoseph.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      Swal.close();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out.',
          timer: 3000,
          showConfirmButton: false
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Failed to send your message. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Server Error!',
        text: 'Something went wrong while sending your message.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together to bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <a
                          key={index}
                          href={info.action}
                          className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 w-full break-words"
                        >
                          <div className="min-w-[48px] h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="text-white" size={24} />
                          </div>
                          <div className="overflow-hidden">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-gray-600 text-sm break-words">{info.content}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
                  <div className="flex justify-center flex-wrap gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 ${social.color} hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                        >
                          <Icon size={24} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Availability</h3>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 text-green-800 mb-2">
                        <Clock size={24} />
                        <span className="text-lg font-semibold">Available for new projects</span>
                      </div>
                      <p className="text-green-700">
                        Currently accepting new freelance and full-time opportunities
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                    <form
                      className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
