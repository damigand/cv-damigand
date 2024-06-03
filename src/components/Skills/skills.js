import './skills.css';
import data from '@/data';

export function sectionSkills() {
   let skillElements = '';
   for (const skill of data.skills) {
      skillElements += itemSkill(skill);
   }

   return `
      <section class="skills" id="skills">
         <div class="skills-data">
            ${skillElements}
         </div>
         <div class="skills-info">
            <div class="level-1 skill-filter" id="level-1">
               Principiante
            </div>
            <div class="level-2 skill-filter" id="level-2">
               Intermedio
            </div>
            <div class="level-3 skill-filter" id="level-3">
               Avanzado
            </div>
            <div class="level-x skill-filter" id="level-x">
               x
            </div>
         </div>
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

export function filterSkillListeners() {
   const skillFilters = document.querySelectorAll('.skill-filter');

   skillFilters.forEach((filter) => {
      filter.addEventListener('click', (event) => {
         const button = event.target;
         const level = button.id;

         switch (level) {
            case 'level-1':
               filteredSkills(1, false);
               break;
            case 'level-2':
               filteredSkills(2, false);
               break;
            case 'level-3':
               filteredSkills(3, false);
               break;
            case 'level-x':
               filteredSkills(0, true);
         }
      });
   });
}

function filteredSkills(level, clear = false) {
   if (clear) {
      document.querySelector('section.skills').innerHTML = sectionSkills();
      filterSkillListeners();
      return;
   }
   const div = document.querySelector('div.skills-data');
   const skills = data.skills.filter((skill) => skill.level == level);
   var elements = '';
   for (const skill of skills) {
      elements += itemSkill(skill);
   }

   div.innerHTML = elements;
}
