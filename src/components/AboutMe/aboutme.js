import './aboutme.css';
import data from '../../../data';

export function sectionAbout() {
   return `
      <section class="aboutme padding" id="sobremi">
         <article class="aboutme-avatar">
            <img src="avatar.png" />
         </article>
         <article class="aboutme-data">
            <div class="name">
               ${data.name} <span>${data.surname}</span>
            </div>
            <div class="description">
               ${data.description}
            </div>
         </article>
      </section>
   `;
}
