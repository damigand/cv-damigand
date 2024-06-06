import './contact.css';
import data from '@/data';

//Sección del "contact"
export function sectionContact() {
   return `
      <section class="contact spacing" id="contacto">
         <h1> Contacto </h1>
         <article class="contact-data">
            <div class="contact-item">
               <img class="icon-big" src="./email.png" />
               <span>${data.email} </span>
            </div>
            <div class="contact-item">
               <img class="icon-big" src="./phone.png"/>
               <span>+34</span> ${data.phone}
            </div>
            <div class="contact-item">
               <img class="icon-big" src="./github.png"/>
               <a href="${data.github}" target="_blank">${data.github} </a>
            </div>
         </article>
      </section>
   `;
}
