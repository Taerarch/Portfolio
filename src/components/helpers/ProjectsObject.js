import Project4 from '../images/Project3.png'
import Project3 from '../images/Project2.png'
import Project2 from '../images/Project1.png'
import Project1 from '../images/Project0.png'

export const ProjectsObject = [
  {
    name: 'Tic Tac Toe',
    value: '1',
    description: "Basic Tic Tac Toe program, had a lengthy attempt at a computer opponent through simple case statements.",
    image: Project1,
    details: [
      "One of the first projects I did as part of my course it has taught me a lot about what not to do. The couple of hundred lines of code working on the 'ai' opponent contained a lot of repetition and I would prefer not to brute force my way through the problem again. Setting up an object with the basic structure of the moves before mapping out the possibilities might save a lot of space and time. The other possibility would be to use the Minimax algorithm and have the computer figure out the moves.",
      "Otherwise I was quite happy as it was an early project I got a lot of features implemented in the week assigned including changing characters, a score system, local storage to save games on refresh and a small animation and sound effect."
    ],
    deploy: "https://taerarch.github.io/project0/index.html",
    github: "https://github.com/Taerarch/project0",
    technologies: ["Javascript", "JQuery", "Github Pages", "Local Storage"]
  },

  {
    name: 'Reading List',
    value: '2',
    description: "A website that lets you search for books and to create personal lists, built with Ruby on Rails.",
    image: Project2,
    details: [
      "With this project I implemented an api along with a comprehensive CRUD system built with Ruby on Rails along with a varied relational model. Notably having users connected with their own personalized lists with exclusive abilities to remove and edit their own creations. I used google books webscraping to provide the search function however if I were to recreate this project I would find an alternative as it's search results were inconsistent."
    ],
    deploy: "",
    github: "https://github.com/Taerarch/project1",
    technologies: ["Ruby", "Rails", "Heroku", "Google Books API"]
  },

  {
    name: 'GA World Tour',
    value: '3',
    description: "Implementation of the BandsinTown API to provide data of upcoming tours from bands displaying them on an interactive map.",
    image: Project3,
    details: [
      "A collaborative project with two members of my class Cesar and Behdad. Behdad focused primarily on the backend implementing Firebase while Cesar and I were working with React on the Front. We used the BandsInTown api to get information on upcoming tour dates which we then translated onto the world map. We also introduced a userbase system to allow users to like and save various events."
    ],
    deploy: "https://ga-world-tour-b8252.web.app/",
    github: "https://github.com/Taerarch/ga-world-tour",
    technologies: ["React", "React Classes", "Bootstrap", "FireBase", "BandsInTown API"]
  },

  {
    name: 'Warhammer40k Battleground',
    value: '4',
    description: "A React based community center and toolbase to connect the Warhammer40k community and share ideas.",
    image: Project4,
    details: [
      "The final project I completed with GA the core idea was to be able to import a Warhammer40k army list in HTML format from Battlescribe and then display that data in a readable fashion. I acheived this by parsing with the Cheerio API which is a more streamlined method of searching through websites through a subset of core jQuery.",
      "The next step would be introducing user interface and interaction as well as implementing a search function. The eventual goal with this project would be to have a complete community website allowing people to easily share their ideas and armies lists with each other. I've seen similar platforms for other games but not for Warhammer40k"
    ],
    deploy: "https://army-lists-40k.web.app/",
    github: "https://github.com/Taerarch/wh40k-armies",
    technologies: ["React", "React Hooks", "FireBase", "Algolia"]
  },
];
