import { mainHeader } from './src/components/Main-Header/main-header.js';
import { sectionAbout } from './src/components/AboutMe/aboutme.js';
import { sectionSkills, filterSkillListeners, easterEgg } from './src/components/Skills/skills.js';
import { sectionEducation } from './src/components/Education/education.js';
import { sectionExperience } from './src/components/Experience/experience.js';
import { sectionProjects } from './src/components/Projects/projects.js';
import { sectionContact } from './src/components/Contact/contact.js';

const app = document.querySelector('#app');

app.innerHTML = `
   ${mainHeader()}
   <main class="cv">
      ${sectionAbout()}
      ${sectionSkills()}
      ${sectionEducation()}
      ${sectionExperience()}
      ${sectionProjects()}
      ${sectionContact()}
   </main>
`;

//funcion de filtro en las "skills"
filterSkillListeners();
easterEgg();
