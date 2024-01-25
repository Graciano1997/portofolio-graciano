import book from '../img/projects/book.png';
import motoFront from '../img/projects/motoBooking.png';
import naruto from '../img/projects/naruto.png';
import restApp from '../img/projects/resting.png';
import summitApp from '../img/projects/summit.png';
import spaceApp from '../img/projects/space.png';
import movieApp from '../img/projects/gomovie.png';
import mathApp from '../img/projects/math_magician.png';
import budgetApp from '../img/projects/transation.png';
import covidApp from '../img/projects/covid.png';
import apiApp from '../img/projects/api.png';

const projects = [
  {
    id: 1,
    image: motoFront,
    title: 'Motorcycle Booking Front',
    techLanguage: ['React.js', 'Redux', 'Rest API'],
    content: `This app provides an elegant and intuitive user interface and experience for booking your favorite Vespa. Users can login, browse a list of motorcycles, view detailed information about specific motorcycles, reserve a motorecycle, add and delete new motorcycles (ADM only). The application is fully responsive and offer a seamless experience on both desktop and mobile devices.
     The front-end communicates with the back-end API to ensure a cohesive and efficient user experience.`,
    link: ['https://motobookingapp.onrender.com', 'https://github.com/Graciano1997/motorcycle_booking_front_end.git'],
  },
  {
    id: 2,
    image: apiApp,
    title: 'Motorcycle Booking Back',
    techLanguage: [' RoR', 'Rspec', 'PL/pgSQL'],
    content: `Motorcycle Booking Back-end This repository contains the Rails back-end API for the "Motorcycle Booking" project. The API serves as the foundation for user authentication, motorcycle management, reservation handling, and related functionalities. It utilizes PostgreSQL as the database and is designed to be a robust and secure backend system. The API exposes endpoints for user login, motorcycle listing, motorcycle details, reservation creation, and user reservation listing. Additionally, it implements
     features such as marking a motorcycle as removed and comprehensive documentation for seamless integration with the front-end.`,
    link: ['https://motorcyclebooking.onrender.com/api-docs', 'https://github.com/Graciano1997/motorcycle_booking_back_end.git'],
  },
  {
    id: 3,
    image: budgetApp,
    title: 'Budget App',
    techLanguage: [' RoR', 'Rspec', 'PL/pgSQL'],
    content: `Budget app is a web application that allows users to keep track of their financial expenses. In each category, users can add purchases. 
    On the category page, users can view the total amount of purchase items..`,
    link: ['https://budget-ps5p.onrender.com', 'https://github.com/Graciano1997/budget_app.git'],
  },
  /* {
     id: 4,
     image: 'assets/img/covid.png',
     title: 'Recipe App',
     techLanguage: [' RoR', 'Rspec', 'PL/pgSQL'],
     content: `This is a React Web App that reports the 24H coronavirus new cases,
     recovered and active cases by each Country in All over the world!
     **Everything in Real time, Fetching the data from a provided API**.`,
     link: ['https://todays-pandemic-status-app.onrender.com/', 'https://github.com/Graciano1997/pandemic_react_capstone.git'],
   }, */
  {
    id: 4,
    image: covidApp,
    title: 'Pandemic Situation',
    techLanguage: ['React.js', 'JEST', 'Redux'],
    content: `This is a React Web App that reports the 24H coronavirus new cases, recovered and active cases by each Country in All over the world!
    **Everything in Real time, Fetching the data from a provided API**.`,
    link: ['https://todays-pandemic-status-app.onrender.com/', 'https://github.com/Graciano1997/pandemic_react_capstone.git'],
  },
  {
    id: 5,
    image: restApp,
    title: 'Resting Countries',
    techLanguage: ['React.js', 'Redux'],
    content: 'This is a React Web App that shows the fundamental indispensable information of each country of the worlds including its borders.',
    link: ['https://rest-countries-api-with-color-theme-switcher-master-ten-topaz.vercel.app/', 'https://github.com/Graciano1997/rest-countries-api-with-color-theme-switcher-master.git'],
  },
  {
    id: 6,
    image: spaceApp,
    title: 'Space Travelers Hub',
    techLanguage: ['React.js', 'Redux', 'JEST'],
    content: 'This is a React Web App that displays some real rockets and available Missions from a fetched API and you are free to reserve....🚀🚀',
    link: ['https://space-travelers-hub-sepia.vercel.app/', 'https://github.com/Graciano1997/space_travelers_hub.git'],
  },
  {
    id: 7,
    image: book,
    title: 'BookStore App',
    techLanguage: ['React.js', 'JEST', 'Redux'],
    content: '**Bookstore** is a web application designed for manage and Store your books collection! Feel free to use this App 😊🤩😉',
    link: ['https://book-store-hn32.vercel.app', 'https://github.com/Graciano1997/book_store.git'],
  },
  {
    id: 8,
    image: mathApp,
    title: 'Math Magicians',
    techLanguage: ['React.js', 'JEST'],
    content: `**math_magicians** is a web application designed for mathematics enthusiasts 😍🤩. It is a Single Page App (SPA) that provides users with the ability 
    to perform simple calculations.
    With a sleek design and friendly UI.Offering a very simple and powerfull calculator Enjoy thought-provoking quotes for that extra motivation. Embrace your inner math magician today – let's make math fun!`,
    link: ['https://math-magicians-wh32.onrender.com/', 'https://github.com/Graciano1997/math_magicians'],
  },
  {
    id: 9,
    image: movieApp,
    title: 'JS Capstone-Go!Moovies',
    techLanguage: ['JS', 'JEST', 'HTML', 'Webpack'],
    content: `This Web App has an interactive
     list funcionality, here you welcome to write your comments and see your favorite films informations and so much more 😍🤩...`,
    link: ['https://graciano1997.github.io/js_moduleII_capstone/dist/', 'https://github.com/Graciano1997/js_moduleII_capstone'],
  },
  {
    id: 10,
    image: naruto,
    title: 'Naruto LeadBoard',
    techLanguage: ['CSS', 'HTML', 'Webpack'],
    content: 'This App offer to you  an elegant and simple user interface and experience, here you can see the Naruto fighters most recent Leadborad, feel free to add your best fight score 😍🤩',
    link: ['https://graciano1997.github.io/leaderboard/dist/', 'https://github.com/Graciano1997/leaderboard.git'],
  },
  {
    id: 11,
    image: summitApp,
    title: 'Creative Summit 2015',
    techLanguage: ['JS', 'sass', 'HTML'],
    content: 'This is a web page for the Creative Summit 2015, here your can find indispensable information about the Summit program.',
    link: ['https://graciano1997.github.io/global-summit/', 'https://github.com/Graciano1997/global-summit'],
  },
];

export default projects;
