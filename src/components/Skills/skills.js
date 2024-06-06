import './skills.css';
import data from '@/data';

var previousNumber;
var currentNumber = Math.floor(Math.random() * 100);
var rightGuess = 0;
var wrongGuess = 0;
var streak = 0;

export function sectionSkills(clear = false) {
   let skillElements = '';
   for (const skill of data.skills) {
      skillElements += itemSkill(skill);
   }

   return `
      ${clear ? '' : `<section class="skills spacing" id="skills">`}
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
         ${easterEggSection()}
         ${clear ? '' : `</section>`}
   `;
}

function itemSkill(skill) {
   return `
      <article class="skill ${skill.name} level-${skill.level}">
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
      document.querySelector('section.skills').innerHTML = sectionSkills(true);
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

function easterEggSection() {
   return `
   <div class="easter-egg">
      <div class="content">
         <span class="close">&times;</span>
         <h1>¡Juguemos a un juego!</h1>
         <h4>Tendrás que adivinar si el siguiente numero en pantalla es mayor o menor al que hay ahora (del 1 al 100), ¡buena suerte!
         </h4>
         <div class="random-number"> 
            <span class="prev-number">
               ${previousNumber ? previousNumber : ''}
            </span>
            ${currentNumber}  
            <span class="next-number"> ? </span>
         </div>
         <div class="guess-buttons">
            <span class="higher">¡Mayor!</span>
            <span class="lower">¡Menor!</span>
         </div>
         <div class="stats">
            <span class="right-guess">${rightGuess} aciertos</span>
            <span class="wrong-guess">${wrongGuess} fallos</span>
            <span class="guess-streak">${streak} aciertos seguidos</span>
         </div>
      </div>
   </div>
   `;
}

export function easterEgg() {
   var element = document.querySelector('.Videojuegos');
   element.addEventListener('click', (event) => {
      //Muestra el modal
      document.querySelector('.easter-egg').style.display = 'block';
      preventScroll();
   });

   //Cierra el modal al dar a la "x"
   const closeButton = document.querySelector('.easter-egg .content .close');
   closeButton.addEventListener('click', (event) => {
      document.querySelector('.easter-egg').style.display = 'none';
      allowScroll();
   });

   //Añade el evento de "mayor"
   const higherButton = document.querySelector('.easter-egg .higher');
   higherButton.addEventListener('click', (event) => higher());

   //Añade el evento de "lower"
   const lowerButton = document.querySelector('.easter-egg .lower');
   lowerButton.addEventListener('click', (event) => lower());
}

function higher() {
   var nextNumber = Math.floor(Math.random() * 100);

   //Bucle para prevenir repetidos
   while (nextNumber == currentNumber) {
      nextNumber = Math.floor(Math.random() * 100);
   }

   //Si acierta, true, si no, false
   if (nextNumber > currentNumber) {
      updateNumber(true, nextNumber);
      animateContent(true);
   } else {
      updateNumber(false, nextNumber);
      animateContent(false);
   }
}

function lower() {
   var nextNumber = Math.floor(Math.random() * 100);

   //Bucle para prevenir repetidos
   while (nextNumber == currentNumber) {
      nextNumber = Math.floor(Math.random() * 100);
   }

   //Si acierta, true, si no, false
   if (nextNumber < currentNumber) {
      updateNumber(true, nextNumber);
      animateContent(true);
   } else {
      updateNumber(false, nextNumber);
      animateContent(false);
   }
}

function updateNumber(resultado, number) {
   previousNumber = currentNumber;
   currentNumber = number;

   document.querySelector('.random-number').innerHTML = `
      <div class="random-number"> 
         <span class="prev-number">
            ${previousNumber ? previousNumber : ''}
         </span>
         ${currentNumber}  
         <span class="next-number"> ? </span>
      </div>
   `;

   if (resultado) {
      streak += 1;
      rightGuess += 1;

      document.querySelector('.right-guess').innerHTML = rightGuess + ' aciertos';
   } else {
      streak = 0;
      wrongGuess += 1;

      document.querySelector('.wrong-guess').innerHTML = wrongGuess + ' fallos';
   }
   document.querySelector('.guess-streak').innerHTML = streak + ' aciertos seguidos';
}

function animateContent(resultado) {
   const content = document.querySelector('.easter-egg .content');

   if (resultado) {
      content.animate([{ border: '2px solid green' }, { border: '2px solid white' }], { duration: 1000 });
   } else {
      content.animate([{ border: '2px solid red' }, { border: '2px solid white' }], { duration: 1000 });
   }
}

function preventScroll() {
   document.querySelector('body').classList.add('no-scroll');
}

function allowScroll() {
   document.querySelector('body').classList.remove('no-scroll');
}
