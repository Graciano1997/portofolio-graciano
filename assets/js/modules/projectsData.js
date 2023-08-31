const projects = [
  {
  images: {
    image: { path: '../assets/img/iot.svg', alt: 'iot' },
    btnClose: { path: '../assets/img/iotclose.svg', alt: 'close icon', id: 'projectClose' }
  },
  title: 'Keeping track of hundreds of components',
  techLanguage: ['Ruby on Rails', 'Css', 'JavaScript'],
  content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it 1960s.`,
  button: {
    label: ['See live', 'See source'],
    iconsPath: ['../assets/img/seeLive.svg', '../assets/img/seeGit.svg'],
  },
},
{

  images: {
    image: { path: '../assets/img/medicalIlustrate.svg', alt: 'Medical Illustration sets' },
    btnClose: { path: '../assets/img/btnmedicalClose.svg', alt: 'close icon', id: 'modalClose' },
  },
  title: 'Keeping track of hundreds of components',

  techLanguage: ['Codekit', 'Github', 'JavaScript', 'Bootstrap'],

  content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s with the 
        releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  button: {
    label: ['See live', 'See source'],
    iconsPath: ['../assets/img/seeLive.svg', '../assets/img/seeGit.svg'],
  },
}
];

export default projects;
