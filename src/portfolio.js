
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jrbolima.github.io/resume',
  title: 'JR',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gerardo Jr Bolima',
  role: 'Software Developer',
  description:
    'Enthusiastic programmer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Motivated to learn, groc and excel in IT Industry.',
  resume: '', 
  social: {
    facebook: 'https://facebook.com/bolima22',
    instagram: 'https://instagram.com/jrbo5',
    linkedin: 'https://linkedin.com/jrbolima',
    github: 'https://github.com/jrbolima',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Project 1',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C#',
  'MSSQL',
  'Oracle',
  'PHP',
  'HTML',
  'CSS',
  'Material UI',
  'Git',
  'Angular',
  'React'
]

const works = [
  // skills can be added or removed
  // if there are no works experience, Works section won't show up
  {
    position: 'Junior Programmer',
    company: 'Covent Garden, Inc.',
    yearsOfService: 'August 2019 - March 2022',
    tasks: [
      'Design, build and configure desktop application to meet business process and application requirements.',
      'Assist in defining requirements and designing applications to meet business process and application requirements as Jr. Programmer.',
    ],
  },
  {
    position: 'Software Developer',
    company: 'H2 Software Consulting Services, Inc.',
    yearsOfService: 'March 2022 - Present',
    tasks: [
      'Design, modify and configure existing desktop application to meet business process and application requirements.',
      'Assist and monitor Bancnet ATM transactions AS ATM Support.'
    ],
  },

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jrcastil.bolima@mail.com',
}

export { header, about, projects, skills, works, contact }
