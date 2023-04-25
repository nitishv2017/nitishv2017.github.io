/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nitish Vaishnav",
  title: "Hi all, I am Nitish Vaishnav",
  subTitle: emoji(
    "SDE Intern at BlogVault | Technical Content Writer at Scaler Interviewbit | Full Stack Android Developer | Competitive Programmer | B.tech Computer Science"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/nitishv2017",
  linkedin: "https://www.linkedin.com/in/nitishvaishnav/",
  gmail: "nitishvaishnav2017@gmail.com",
  facebook: "https://www.facebook.com/nitish.vaishnav.37",
  instagram: "https://www.instagram.com/nitish_v11/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop robust and feature-rich Android applications with code that adheres to best practices and standards."
    ),
    emoji("⚡ Optimize the code for smooth performance without creating dependencies."),
    emoji("⚡ Automated testing through Selenium and rspec"),
    emoji(
      "⚡ Integration of third party services such as Firebase."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5",
      color: "#D84924",
      img: false
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt",
      color: "#0066B6"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab",
      img: true,
      href: require("./assets/images/cpp.png")
    },
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-brands fa-java",
      color: "red"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fab",
      color: "red",
      img: true,
      href: require("./assets/images/database.png")
    },
    {
      skillName: "Ruby",
      fontAwesomeClassname: "fab",
      color: "red",
      img: true,
      href: require("./assets/images/ruby.png")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      color: "#EAD41C"
    },
    {
      skillName: "Android Development",
      fontAwesomeClassname: "fab fa-brands fa-android",
      color: "green"
    },
    {
      skillName: "Ruby on Rails",
      fontAwesomeClassname: "fab fa-node",
      img: true,
      href: require("./assets/images/rails.png")
    },
    {
      skillName: "Firebase Database",
      fontAwesomeClassname: "fas fa-fire",
      img: true,
      href: require("./assets/images/firebase.png")
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas",
      img: true,
      href: require("./assets/images/selenium.png")
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fas",
      img: true,
      href: require("./assets/images/linux.png")
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fas",
      img: true,
      href: require("./assets/images/github.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The LNM institute of Information Technology, Jaipur",
      logo: require("./assets/images/lnmiit.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2019 - May 2023",
      desc: "Coursework in Specialization:",
      descBullets: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering",
        "Computer Architecture",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "BlogVault",
      companylogo: require("./assets/images/blogvault.png"),
      date: "June 2018 – Present",
      desc: "Wordpress Security and Backup solution, Bangalore",
      descBullets: [
        "Created a cutting-edge testing framework that transformed the company's approach to software testing.",
        "By integrating Selenium with RSpec and Capybara DSL, I was able to reduce manual testing efforts to zero and achieve unparalleled levels of efficiency and accuracy."
      ]
    },
    {
      role: "Technical Content Writer",
      company: "Scaler Academy",
      companylogo: require("./assets/images/scaler.jpg"),
      date: "Sep 2021 – Present",
      desc: "Informative Technical Articles",
      descBullets: [
        "DSA",
        "C++",
        "Java",
        "Ruby on Rails",
        "Android Development",
        "Operating Systems",
        "Database Management Systems",
      ]
    },
    {
      role: "Freelancer(Android)",
      company: "Gargi Animal Care",
      companylogo: require("./assets/images/gargi.png"),
      date: "Jan 2022 – April 2022",
      desc: "Wild-life and Animal Management Firm",
      descBullets: [
        "Developed an android application for Gargi Animal Care, Jaipur which automated 100% of company’s offline workflow.",
        "Collaborated with my teammate using version control systems such as Git to organize modifications and assign tasks."
      ]
    },
    {
      role: "Technical Content Writer Intern",
      company: "Geeks For Geeks",
      companylogo: require("./assets/images/geeks.png"),
      date: "May 2021 – Nov 2021",
      desc: "Competitive Programming Articles",
      descBullets: [
        "Written and published articles related to Data Structures and Algorithms."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "AT DIFFERENT STAGES, I BUILT SOME COOL STUFF ON THE GO",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "TestGuru",
      projectDesc: "Researched and implemented automated testing Framework eliminating manual testing processes within the company.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://blogvault.net"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cf_all.gif"),
      projectName: "CodeForces All in one",
      projectDesc: "A powerful tool that offers in-depth analysis of your Codeforces profile, tracks your friends' activities, and schedules reminders for upcoming contests.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/nitishv2017/Codeforces-All-in-one"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/gargi_intro.gif"),
      projectName: "Gargi Animal Care Help",
      projectDesc: "Complaint Addressal Portal for the users to register complaints regarding animal care and control services like monkey catching, honey comb removal, animal feeding, wildlife control.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/nitishv2017/Gargi-Animal-Care"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Kickstart 2021",
      subtitle:
        "#834 rank in Google Kickstart Round E 2021",
      image: require("./assets/images/kickstart.png"),
      imageAlt: "Google Kickstart",
      footerLink: [
        {
          name: "Checkout",
          url: "https://drive.google.com/file/d/1BftEFawMbNhurWhC24IjIvj6kivnKqGe/view?usp=sharing"
        }
      ]
    },
    {
      title: "Codeforces",
      subtitle:
        "#745 rank in Codeforces Round 709 (Div. 2, based on Technocup 2021 Final Round)",
      image: require("./assets/images/codeforces.png"),
      imageAlt: "Codeforces",
      footerLink: [
        {
          name: "Checkout",
          url: "https://drive.google.com/file/d/1TylFoRy4Ko4g3U6NPnTOt61yZVuZDjkx/view?usp=sharing"
        }
      ]
    },
    {
      title: "AccioWars",
      subtitle: "Global rank of #19 out of 11k+ participants",
      image: require("./assets/images/acciowar.jpg"),
      imageAlt: "Acciowars",
      footerLink: [
        {
          name: "Checkout",
          url: "https://www.linkedin.com/posts/nitishvaishnav_acciowars-coding-dsa-activity-6957671941566550017-w8FV"
        }
      ]
    },
    {
      title: "CodeChef",
      subtitle: "#117 in December Cook-Off 2020 Division 2",
      image: require("./assets/images/Codechef.jpg"),
      imageAlt: "Codechef",
      footerLink: [
        {
          name: "Checkout",
          url: "https://www.codechef.com/rankings/COOK125B?itemsPerPage=100&order=asc&page=1&search=nitish999&sortBy=rank"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Blogs 📚💻",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.geeksforgeeks.org/minimum-number-of-bins-required-to-place-n-items-using-best-fit-algorithm/",
      title: "Best Fit algorithm",
      description:
        "An application of Best fit algorithm (Greedy Approach)"
    },
    {
      url: "https://www.scaler.com/topics/quick-sort-in-cpp/",
      title: "Sorting made easy",
      description:
        "A beginner guide to divide and conquer technique."
    },
    {
      url: "https://www.scaler.com/topics/cpp/concurrent-programming/",
      title: "Concurrent Programming and Low-Level Programming",
      description:
        "Get started with Concurrent Programming and Low-Level Programming"
    },
    {
      url: "https://www.scaler.com/topics/data-structures/mos-algorithm/",
      title: "MO’s Algorithm - Square Root Decomposition",
      description:
        "Sqaure root decomposition algorithm to answer a range based query problem efficiently in O(sqrt(N)) time."
    },
    {
      url: "https://www.scaler.com/topics/components of dbms/",
      title: "Components of DBMS",
      description:
        "Get started with Data and its Management system."
    },
    {
      url: "https://www.scaler.com/topics/data-structures-in-java",
      title: "Data Structures in JAVA",
      description:
        "Playing with data structures in JAVA"
    },
    {
      url: "https://www.scaler.com/topics/process-control-block-in-os/",
      title: "Process Control Block in OS",
      description:
        "Do you know how an Operating System stores process or tasks running?"
    },
    {
      url: "https://www.scaler.com/topics/shortest-path-in-directed-acyclic-graph",
      title: "Shortest Path Planning",
      description:
        "Learn about Shortest Path in Directed Acyclic Graph."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an idea or just want to know about my workout routine? My Inbox is open for all.",
  number: "+91-7790892316",
  email_address: "nitishvaishnav2017@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
