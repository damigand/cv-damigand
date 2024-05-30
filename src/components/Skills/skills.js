import './skills.css';
import data from '@/data';

export function sectionSkills() {
   let skillElements = '';
   for (const skill of data.skills) {
      skillElements += itemSkill(skill);
   }

   return `
      <section class="skills" id="skills">
         <article class="skills-data">
            ${skillElements}
         </article>
         <article class="skills-info">
            <div class="level-1">
               Principiante
            </div>
            <div class="level-2">
               Intermedio
            </div>
            <div class="level-3">
               Avanzado
            </div>
         </article>
      </section>
   `;
}

function itemSkill(skill) {
   return `
      <article class="skill level-${skill.level}">
         ${skill.name}
      </article>
   `;
}
