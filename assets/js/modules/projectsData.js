const projects = [
  {
    id: 1,
    images: {
      image: { path: '../assets/img/book.png', alt: 'Medical Illustration sets' },
      btnClose: { path: '../assets/img/btnmedicalClose.svg', alt: 'close icon', id: 'modalClose' },
    },
    title: 'BookStore App',

    techLanguage: ['React.js', 'Github', 'Redux', 'Css'],

    content: `**Bookstore** is a web application designed for manage and Store your books collection! Feel free to use this App 😊🤩😉 
    `,

    button: {
      label: ['See live', 'See source'],
      link: ['https://live.com', 'https://source.com'],
      iconsPath: ['../assets/img/seeLive.svg', '../assets/img/seeGit.svg'],
    },
  },
  {
    id: 2,
    images: {
      image: { path: '../assets/img/math.png', alt: 'Math Magicians' },
      btnClose: { path: '../assets/img/btnmedicalClose.svg', alt: 'close icon', id: 'modalClose' },
    },
    title: 'Math Magicians Full webSite',

    techLanguage: ['React.js', 'Github', 'Css'],

    content: `**math_magicians** is a web application designed for mathematics enthusiasts 😍🤩. It is a Single Page App (SPA) that provides users with the ability 
    to perform simple calculations.
    With a sleek design and friendly UI.Offering a very simple and powerfull calculator Enjoy thought-provoking quotes for that extra motivation. Embrace your inner math magician today – let's make math fun!`,

    button: {
      label: ['See live', 'See source'],
      link: ['https://math-magicians-wh32.onrender.com/', 'https://github.com/Graciano1997/math_magicians'],
      iconsPath: ['../assets/img/seeLive.svg', '../assets/img/seeGit.svg'],
    },
  },
  {
    id: 3,
    images: {
      image: { path: '../assets/img/gomovie.png', alt: 'go movie' },
      btnClose: { path: '../assets/img/btnmedicalClose.svg', alt: 'close icon', id: 'modalClose' },
    },
    title: 'Microverse JS Capstone-Go!Moovies',

    techLanguage: ['Js', 'Github', 'Css', 'Html', 'Webpack'],

    content: 'js_moduleII_capstone-Go!Moovies is a repository.The goal is to Create, interactive list funcionality, and we use JEST to test. This JavaScript capstone project is about building a web application based on an external API. And We select https://www.tvmaze.com/api to provides data about a moovies and series. This webapp have 2 interfaces (the homepage and the commenter popup windows).',

    button: {
      label: ['See live', 'See source'],
      link: ['https://graciano1997.github.io/js_moduleII_capstone/dist/', 'https://github.com/Graciano1997/js_moduleII_capstone'],
      iconsPath: ['../assets/img/seeLive.svg', '../assets/img/seeGit.svg'],
    },
  },
  {
    id: 4,
    images: {
      image: { path: '../assets/img/summit.png', alt: 'creative Summit' },
      btnClose: { path: '../assets/img/btnmedicalClose.svg', alt: 'close icon', id: 'modalClose' },
    },
    title: 'Capstone: Creative Angola Summit 2015',

    techLanguage: ['JavaScript', 'Github', 'sass', 'Html'],

    content: 'Capstone-summit is a project that demonstrates that I did undersand the last four week main topics, hard skill (html,css and JavaScript ) and Soft skills (video apresentation of the software) and so much. This project consists of a website with two main pages: the home page and the about page.',

    button: {
      label: ['See live', 'See source'],
      link: ['https://graciano1997.github.io/global-summit/', 'https://github.com/Graciano1997/global-summit'],
      iconsPath: ['../assets/img/seeLive.svg', '../assets/img/seeGit.svg'],
    },
  },
];

export default projects;
