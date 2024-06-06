import { mainHeader } from './src/components/Main-Header/main-header.js';
import { mobileMenu, openMenu } from './src/components/Mobile-Menu/mobile-menu.js';
import { sectionAbout } from './src/components/AboutMe/aboutme.js';
import { sectionSkills, filterSkillListeners, easterEgg } from './src/components/Skills/skills.js';
import { sectionEducation } from './src/components/Education/education.js';
import { sectionExperience } from './src/components/Experience/experience.js';
import { sectionProjects } from './src/components/Projects/projects.js';
import { sectionContact } from './src/components/Contact/contact.js';

const app = document.querySelector('#app');

//Async ya que el "mainHeader" tiene que cargar antes que el "mobileMenu"
//para enlazar bien el evento del botón para abrir el menú desde el móvil
async function startApp() {
   app.innerHTML = `
   ${await mainHeader()}
   ${mobileMenu()}
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

   //funcion para abrir el menú al estar en móvil
   openMenu();
}

startApp();
