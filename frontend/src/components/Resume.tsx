import React, { useState, useEffect } from 'react';
import { Download, MapPin, Phone, Mail, Globe, Calendar, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Anto-Joseph-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: 'Backend Intern',
      company: 'Leopard Tech Labs',
      location: 'STARTUP VALLEY - AJCE TBI',
      duration: '2025 April 1 - 2025 April 30',
      responsibilities: [
        'Independently developed a microproject during the internship, showcasing initiative and end-to-end project execution',
        'Gained hands-on experience with Node.js for backend development',
        'Explored API testing and documentation using Postman',
        'Worked with Firebase for backend services such as authentication and real-time database',
        'Enhanced understanding of full-stack web development through practical application'
      ]
    },
    {
      title: 'Full stack Intern',
      company: 'LCC computer education',
      location: 'Marine drive, Kochi',
      duration: '2023 Nov - 2024 Jan',
      responsibilities: [
        'Independently developed a full-stack web project using Python and Django',
        'Applied machine learning concepts to implement intelligent features in the project',
        'Gained hands-on experience with backend development, ORM, and REST APIs in Django',
        'Explored data handling, model training, and integration of ML models into web applications',
        'Strengthened problem-solving and debugging skills through self-directed learning and implementation'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      school: 'Amal Jyothi College of Engineering (Autonomous)',
      duration: '2024 - 2026',
      gpa: '8/10'
    },
    {
      degree: 'Bachelor of Computer Applications',
      school: 'MES College Nedumkandam',
      duration: '2021 - 2024',
      gpa: '6/10'
    }
  ];

  const skills = {
    'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Python', 'Express.js', 'PHP', 'REST APIs'],
    'Database': ['SQLite', 'MongoDB', 'MySQL', 'Bigtable'],
    'Tools': ['Git', 'Vercel', 'AWS', 'Jenkins', 'Postman', 'Render']
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-8 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold mb-2">Anto Joseph</h1>
                <p className="text-xl text-blue-100 mb-4">MCA Student</p>

                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Maruthaniyil, Prakash P.O</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>+91 6282289862</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>antomaruthaniyil@yahoo.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe size={16} />
                    <span>www.antojoseph.website</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I am a dedicated and enthusiastic MCA student with a completed Bachelor's degree in Computer Applications (BCA).
                With a strong foundation in programming and software development, I have developed a keen interest in web development
                and continue to enhance my skills in modern web technologies.
                I am actively seeking new opportunities to apply my knowledge, contribute to innovative projects, and grow as a professional in the tech industry.
                My goal is to work in a dynamic environment where I can leverage my academic background
                and passion for technology to build impactful digital solutions.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-700 flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.school}</p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Award size={14} />
                          <span>{edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                Technical Skills
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
