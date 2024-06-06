import './mobile-menu.css';

import { headerData } from '../Main-Header/main-header';

//Seccion del menú del móvil
export function mobileMenu() {
   var menuElements = '';
   for (const data of headerData) {
      menuElements += mobileMenuItem(data[0], data[1]);
   }
   return `
      <div class="mobile-menu hidden mobile-menu-close">
         <ul class="mobile-menu-content">
            ${menuElements}
         </ul>
      </div>
   `;
}

//Función para el eventListener del botón que abre el menú
export function openMenu() {
   const menuButton = document.querySelector('.item-menu');
   menuButton.addEventListener('click', (event) => {
      const mobileMenu = document.querySelector('.mobile-menu');

      //Ajustar bien las animaciones de css cuando se abre y se cierra, así como su visibilidad
      mobileMenu.classList.toggle('mobile-menu-show');
      mobileMenu.classList.toggle('mobile-menu-close');

      if (mobileMenu.classList.contains('mobile-menu-close')) {
         setTimeout(function () {
            mobileMenu.classList.toggle('hidden');
         }, 500);
      } else {
         mobileMenu.classList.toggle('hidden');
      }
   });
}

//Cada item del menú del móvil
function mobileMenuItem(text, id) {
   return `
      <li class="mobile-menu-item">
         <a href="#${id}">${text}</a>
      </li>
   `;
}
