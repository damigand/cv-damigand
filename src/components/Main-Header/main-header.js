import './main-header.css';

//Items que se pintan en el header
export const headerData = [
   ['Sobre mí', 'sobremi'],
   ['Skills', 'skills'],
   ['Estudios', 'estudios'],
   ['Experiencia', 'exp'],
   ['Proyectos', 'proyectos'],
   ['Contacto', 'contacto'],
];

//Sección del header
export async function mainHeader() {
   var headerElements = '';
   for (const data of headerData) {
      headerElements += itemHeader(data[0], data[1]);
   }
   return `
      <header>
         <ul class="main-header">
            ${headerElements}
            ${menuItem('./menu.png')}
         </ul>
      </header>
   `;
}

//Cada item del header
function itemHeader(text, id) {
   return `
      <li class="item-header">
         <a href="#${id}">${text}</a>
      </li>
      
   `;
}

//El botón para abrír un menú cuando el ancho del header no es suficiente para todos los items
function menuItem(src) {
   return `
      <li class="item-menu hidden">
         <img class="icon-big" src="${src}">
      </li>
      
   `;
}
