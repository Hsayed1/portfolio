import React, { useState } from 'react';
import { FaBriefcase, FaSchool, FaCaretDown } from 'react-icons/fa';

const TimeLine = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetail = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const events = [
    {
      title: 'San Jose State University',
      subtitle: 'B.S. in Computer Science',
      date: 'August 2020 - May 2024',
      icon: <FaSchool style={{ color: '#32a852', fontSize: '1.5rem', marginRight: '0.5rem' }} />,
      details: (
        <ul style={{ color: 'white', marginLeft: '2rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '0.5rem' }}>GPA: 3.76/4</li>
          <li style={{ marginBottom: '0.5rem' }}>Graduated Magna Cum Laude</li>
          <li style={{ marginBottom: '0.5rem' }}>Named President Scholar and Dean’s Scholar multiple times</li>
          <li>Relevant Coursework: Data Structures and Algorithms, Object-Oriented Design, Mobile Device Development, Database Management Systems, Software Engineering, Operating Systems, Computer Architecture, Computer Networks, Machine Learning, Cyber Security, Data Visualization, Applied Probability and Statistics</li>
        </ul>
      ),
    },
    {
      title: 'Medline Industries, LP',
      subtitle: 'Software Engineering Intern',
      date: 'June 2024 – August 2024',
      icon: <FaBriefcase style={{ color: '#32a852', fontSize: '1.5rem', marginRight: '0.5rem' }} />,
      details: (
        <ul style={{ color: 'white', marginLeft: '2rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '0.5rem' }}>Engineered robust deployment tracker application using Next.js, Cosmos DB, Azure Functions, Chart.js, and other Azure resources, enabling the Ecommerce team to efficiently manage deployment histories across development, test, and production environments.</li>
          <li style={{ marginBottom: '0.5rem' }}>Scaled the application to an enterprise-level solution, empowering all technology teams at Medline to streamline deployment management.</li>
          <li>Accomplishments: Developed a tool that enhanced collaboration among over 100 developers, optimizing cross-functional operations between Ops, QA, and Development teams. Attained 96% code coverage and passed 100% of Jest unit tests.</li>
        </ul>
      ),
    },
    {
      title: 'Self-employed',
      subtitle: 'Computer Science Tutor',
      date: 'September 2021 – June 2022',
      icon: <FaBriefcase style={{ color: '#32a852', fontSize: '1.5rem', marginRight: '0.5rem' }} />,
      details: (
        <ul style={{ color: 'white', marginLeft: '2rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '0.5rem' }}>Provided one-on-one and group tutoring sessions to high school computer science students.</li>
          <li>Accomplishments: Helped several students achieve an average 5.7% increase in their grades and fostered a deeper understanding of computer science principles.</li>
        </ul>
      ),
    },
    {
      title: 'Spark my Sport (Skillteck Inc)',
      subtitle: 'Product Management Intern',
      date: 'April 2021 – June 2021',
      icon: <FaBriefcase style={{ color: '#32a852', fontSize: '1.5rem', marginRight: '0.5rem' }} />,
      details: (
        <ul style={{ color: 'white', marginLeft: '2rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '0.5rem' }}>Collaborated with consumers and development teams to define product requirements and specifications.</li>
          <li style={{ marginBottom: '0.5rem' }}>Managed end-to-end development sprints using Agile for SparkMySport app.</li>
          <li style={{ marginBottom: '0.5rem' }}>Monitored key performance indicators to guide app development.</li>
          <li>Accomplishments: Launched SparkMySport on iOS, achieved a 4.5-star rating, expanded user base by 400%, and enhanced functionality through user feedback.</li>
        </ul>
      ),
    },
  ];

  return (
    <div style={{ color: 'white', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Experience</h2>
      {events.map((event, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <div
            onClick={() => toggleDetail(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginBottom: '0.5rem',
              position: 'relative',
              paddingLeft: '2rem',
            }}
          >
            <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}>
              {event.icon}
            </span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', margin: '0', color: 'white' }}>{event.title}</h3>
              <span style={{ fontSize: '1rem', color: 'gray' }}>{event.subtitle}</span>
              <div style={{ fontSize: '0.875rem', color: 'lightgray' }}>{event.date}</div>
            </div>
            <FaCaretDown
              style={{
                color: '#32a852',
                fontSize: '1.25rem',
                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
          </div>
          {activeIndex === index && (
            <div style={{ paddingLeft: '2.5rem' }}>
              {event.details}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
