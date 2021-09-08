// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Bill",
  middleName: "",
  lastName: "Li",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/bmltera",
    },
    // {
    //   image: "fa-facebook",
    //   url: "",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/bmltera/",
    },
  //  {
  //    image: "fa-twitter",
  //    url: "",
  //  },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/bmltera.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/bill.jpg"),
  imageSize: 350,
  message:
    "My name is Bill Li. I’m a third year student at San Jose State University studying Computer Science. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
  resume: "https://docs.google.com/document/d/1WiKfXKb-G7sFeysDDcqWNxT1lmSOsaETLTIN-6j9c5o/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bmltera", 
  reposLength: 0,
  specificRepos: ["MancalaGame", "DownloaderApp", "MyCalendar", "AirlineReservationSystem"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/bill.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/bill.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "SQL", value: 40 },
    { name: "Python", value: 45 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 55 },
    { name: "Data Structures", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "billmli88@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Co-op',
      companylogo: require('../assets/img/ibm.png'),
      date: 'January 2021 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
