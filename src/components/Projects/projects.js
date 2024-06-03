import './projects.css';
import data from '@/data';

export function sectionProjects() {
   const projects = data.projects;

   let projectElements = '';

   for (const project of projects) {
      projectElements += projectItem(project);
   }

   return `
      <section class="projects spacing" id="proyectos">
         <h1>Proyectos</h1>
         ${projectElements}
      </section>
   `;
}

function projectItem(project) {
   return `
      <article class="project">
         <img class="project-img"src="${project.preview}"/>
         <div class="project-data">
            <div class="project-info">
               <span class="project-title"> ${project.title} </span>
               <span class="project-desc">${project.description} </span>
            </div>
            <div class="project-links">
               <div class="project-link">
                  <img class="icon" src="./web.png"/>
                  <a href="${project.link}" target="_blank">Página web</a>
               </div>
               <div class="project-link">
                  <img class="icon" src="./github.png"/>
                  <a href="${project.repo}" target="_blank">Repositorio GitHub</a>
               </div>
            </div>
         </div>
      </article>
   `;
}
