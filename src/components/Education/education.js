import './education.css';
import data from '@/data';

//Sección de estudios
export function sectionEducation() {
   //Obtengo los estudios de "data" y los recorro con un "for" para pintarlos
   const educations = data.education;
   let educationElements = '';
   for (const education of educations) {
      educationElements += educationItem(education);
   }

   return `
      <section class="education spacing" id="estudios">
         <h1>Estudios</h1>
            <div class="studies">
            ${educationElements}
            </div>
      </section>
   `;
}

//Cada item de estudios
function educationItem(education) {
   return `
      <article class="study">
         <div class="study-title">
            <h2>${education.title}</h2>
         </div>
         <div class="study-data">
            <div class="study-grade">
               ${education.grade ? `Grado` : `Curso`}
               ${education.grade ? education.grade : education.type}
            </div>
            <div class="study-source">
            ${education.grade ? 'Formación Profesional' : education.source} 
            </div>
            <div class="study-period">
               ${education.yearStart} - ${education.yearEnd}
               <span class="${education.finished ? 'study-finished' : 'study-ongoing'}">
               <br>
                  (${education.finished ? 'Terminado' : 'En proceso'})
               </span>
            </div>
         </div>
      </article>
      
   `;
}
