import ResumeEdit from './components/Editor/ResumeEdit'
import PreviewScreen from './components/PDF/ResumeTemplate'
import React from 'react'

export const BuilderContext = React.createContext({})

function App() {
  const [force, setForce] = React.useState(0)

  const [infoState, setInfoState] = React.useState({
    components: [
      {
        type: 'Profile',
        name: 'Ravi Kumar',
        profession: 'Senior Developer',
        profileImageURL: 'https://i.imgur.com/f6L6Y57.png',
        display: true,
        about:
          'Experienced software developer with a strong background in full-stack development. Proficient in modern web technologies and passionate about building scalable and efficient applications.',
      },

      {
        header: 'Education',
        type: 'Education',
        display: true,
        items: [
          {
            degree: 'Computer Science - IIT Delhi',
            date: 'Sep 2010 - Jun 2014',
          },
        ],
      },
      {
        header: 'Key Skills',
        type: 'KeySkills',
        display: true,
        text: '• Proficient in JavaScript, Python, and Java.\n• Experienced with React, Node.js, and Django.\n• Strong understanding of SQL and NoSQL databases.\n• Expertise in cloud services like AWS and Azure.\n• Excellent problem-solving and debugging skills.',
      },
      {
        header: 'Employment History',
        type: 'Employment',
        display: true,
        items: [
          {
            position: 'Senior Software Engineer - Tech Solutions Inc.',
            date: 'Jan 2018 - Present',
            description:
              'Tech Solutions Inc. is a leading provider of innovative software solutions. As a Senior Software Engineer, I lead a team of developers in designing and implementing cutting-edge applications.',
            responsibilities:
              '• Leading the development of web applications using React and Node.js.\n• Mentoring junior developers and conducting code reviews.\n• Collaborating with cross-functional teams to define project requirements.\n• Ensuring the scalability and performance of applications.',
          },
          {
            position: 'Software Developer - Web Innovations',
            date: 'Jul 2014 - Dec 2017',
            description:
              'Web Innovations is a startup focused on creating web-based solutions for various industries. As a Software Developer, I contributed to the development of several key projects.',
            responsibilities:
              '• Developed and maintained web applications using Django and React.\n• Implemented RESTful APIs and integrated third-party services.\n• Participated in agile development processes and sprint planning.\n• Wrote unit and integration tests to ensure code quality.',
          },
        ],
      },
      {
        header: 'Projects',
        type: 'Projects',
        display: true,
        items: [
          {
            name: 'E-commerce Platform',
            description:
              '• Developed a scalable e-commerce platform using React and Node.js.\n• Implemented features such as user authentication, product management, and payment processing.\n• Deployed the application on AWS and ensured high availability.',
          },
        ],
      },

      {
        header: 'Skills',
        type: 'Skills',
        display: false,
        items: [
          {
            text: 'JavaScript',
            level: '90%',
          },
        ],
      },
      {
        header: 'Certifications',
        type: 'Certifications',
        display: true,
        items: [
          {
            name: 'Certified Kubernetes Administrator (CKA)',
            date: 'Mar 2021',
          },
          {
            name: 'AWS Certified Solutions Architect',
            date: 'Jul 2020',
          },
        ],
      },
      {
        header: 'Socials',
        type: 'Socials',
        items: [
          {
            type: 'Devto',
            enabled: true,
            url: '',
            viewBox: '0 0 448 512',
            path: 'M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z',
          },
          {
            type: 'LinkedIn',
            enabled: true,
            url: 'https://linkedin.com/in/ravi-kumar',
            viewBox: '0 0 448 512',
            path: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
          },
          {
            type: 'Github',
            enabled: true,
            url: 'https://github.com/ravi-kumar',
            viewBox: '0 0 496 512',
            path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
          },
        ],
      },
      {
        header: 'Contact',
        type: 'Contact',
        display: true,
        items: [
          {
            text: '+91 9876543210',
          },
          {
            text: 'ravi.kumar@example.com',
          },
          {
            text: 'www.ravikumar.dev',
          },
        ],
      },
    ],
  })
  const getComponentData = (type) => {
    const data = infoState.components.filter((item) => item.type === type)
    return data ? data[0] : []
  }
  const getSocials = () => {
    const socials = infoState.components.filter(
      (item) => item.type === 'Socials'
    )
    return socials ? socials[0] : []
  }
  const updateInfo = (item) => {
    const targetIndex = infoState.components.findIndex(
      (elem) => elem.type === item.type
    )
    infoState.components.splice(targetIndex, 1, item)
    setForce(force + 1)
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
      }}
    >
      <BuilderContext.Provider
        value={{
          getSocials,
          updateInfo,
          getComponentData,
        }}
      >
        <ResumeEdit />
        <PreviewScreen />
      </BuilderContext.Provider>
    </div>
  )
}

export default App
