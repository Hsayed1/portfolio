import { useState } from 'react';
import { FaCode, FaChartLine, FaLaptopCode, FaTools, FaCaretDown, FaDatabase } from 'react-icons/fa';

const SkillsMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-green-500 text-lg mr-2" />,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'HTML', 'CSS'],
    },
    {
      title: 'Web Development',
      icon: <FaLaptopCode className="text-green-500 text-lg mr-2" />,
      skills: [
        'Node.js', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Flask', 'REST API', 'Chart.js'
      ],
    },
    {
      title: 'Data Analysis & Machine Learning',
      icon: <FaChartLine className="text-green-500 text-lg mr-2" />,
      skills: ['TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'Seaborn', 'Numpy'],
    },
    {
      title: 'Development Tools & Environments',
      icon: <FaTools className="text-green-500 text-lg mr-2" />,
      skills: [
        'Microsoft Azure', 'Postman', 'Jenkins', 'Git', 'JUnit', 'Jest', 'Android Studio', 
        'Visual Studio Code', 'Terminal', 'Linux'
      ],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-green-500 text-lg mr-2" />,
      skills: ['SQL (MySQL, PostgreSQL, SQLite)', 'NoSQL (Cosmos DB, MongoDB)'],
    },
  ];

  return (
    <div className="flex flex-col items-center" style={{ marginTop: '2rem' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Skills</h2>
      {categories.map((category, index) => (
        <div key={index} className="skills__container w-full max-w-lg p-4">
          <div
            className="skills__header flex items-center mb-6 cursor-pointer"
            onClick={() => toggleMenu(index)}
          >
            {category.icon}
            <h2 className="skills__title text-white text-xl font-semibold">
              {category.title}
            </h2>
            <FaCaretDown
              className={`skills__arrow text-green-500 ml-2 transition-transform duration-400 ${activeIndex === index ? 'transform rotate-180' : ''
                }`}
            />
          </div>
          <div
            className={`skills__list ${activeIndex === index ? 'block' : 'hidden'
              }`}
          >
            <ul className="flex flex-col pl-8 space-y-4 text-white">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsMenu;
