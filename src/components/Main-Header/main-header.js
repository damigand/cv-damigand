import './main-header.css';

export function mainHeader() {
   return `
      <header>
         <ul class="main-header">
            ${itemHeader('Sobre mí', 'sobremi')}
            ${itemHeader('Skills', 'skills')}
            ${itemHeader('Estudios', 'estudios')}
            ${itemHeader('Experiencia', 'exp')}
            ${itemHeader('Proyectos', 'proyectos')}
            ${itemHeader('Contacto', 'contacto')}
            ${itemHeader('Redes Sociales', 'redes')}
         </ul>
      </header>
   `;
}

function itemHeader(text, id) {
   return `
      <li class="item-header">
         <a href="#${id}">${text}</a>
      </li>
      
   `;
}
