import './experience.css';
import data from '@/data';

export function sectionExperience() {
   const experience = data.workExp;
   let expElements = '';
   for (const exp of experience) {
      expElements += expItem(exp);
   }
   return `
      <section class="experience spacing" id="exp">
         <h1>Experiencia</h1>
         ${expElements}
      </section>
   `;
}

function expItem(exp) {
   return `
      <article class="exp-item">
         <div class="exp-info">
            <h2>${exp.position}</h2>
            <div class="exp-description">
               ${exp.description}
            </div>
         </div>
         <div class="exp-data">
            <div class="exp-company">
               <a href="${exp.companyLink}" class="exp-company" target="_blank" rel="noreferrer">${exp.company}</a> 
            </div>
            <div class="exp-period">
               ${exp.startDate} - ${exp.endDate} 
               <span>
               (${exp.monthDuration} meses)
               </span>
            </div>
         </div>
      </article>
   `;
}
