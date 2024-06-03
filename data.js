const data = {
   name: 'David',
   surname: 'Miguel Andrés',
   email: 'damigand700@gmail.com',
   phone: 654856683,
   github: 'https://github.com/damigand',
   picture: './avatar.png',
   description:
      'Aspirante a programador fullstack y apasionado por los videojuegos. Soy una persona organizada y me esfuerzo por dar lo mejor de mi tanto dentro como fuera del ámbito profesional.',
   education: [
      {
         title: 'Sistemas Microinformáticos y Redes',
         grade: 'Medio',
         finished: true,
         yearStart: 2019,
         yearEnd: 2021,
      },
      {
         title: 'Desarrollo de Aplicaciones Multiplataforma',
         grade: 'Superior',
         finished: true,
         yearStart: 2021,
         yearEnd: 2023,
      },

      {
         title: 'Rock{theCode}',
         type: 'Desarrollo Web Fullstack',
         source: 'PowerMBA',
         finished: false,
         yearStart: 2024,
         yearEnd: 2025,
      },
   ],
   workExp: [
      {
         position: 'Desarrollador Fullstack (Junior)',
         company: 'MyDance',
         startDate: 2023,
         endDate: 2024,
         companyLink: 'https://www.mydance.zone/',
         monthDuration: 6,
         description:
            'Puesto de desarrollador Fullstack Junior en MyDance, mejorando / implementando funcionalidades tanto en la aplicación web (HTML, CSS, Bootstrap, C#, JavaScript, ASP.NET) como en Android (Xamarin Forms, C#).',
      },
   ],
   skills: [
      //level 1: Principiante //level 2: Intermedio //level 3: Avanzado //level 4: Experto
      {
         name: 'HTML5',
         level: 3,
      },
      {
         name: 'CSS3',
         level: 3,
      },
      {
         name: 'JavaScript',
         level: 3,
      },
      {
         name: 'Git',
         level: 1,
      },
      {
         name: 'Frontend',
         level: 2,
      },
      {
         name: 'Backend',
         level: 2,
      },
      {
         name: 'Android',
         level: 2,
      },
      {
         name: 'C#',
         level: 2,
      },
      {
         name: 'Java',
         level: 2,
      },
      {
         name: 'MySQL',
         level: 1,
      },
      {
         name: 'SQL',
         level: 2,
      },
      {
         name: 'Videojuegos',
         level: 3,
      },
      {
         name: 'Unity',
         level: 2,
      },
   ],
   projects: [
      {
         title: 'Recreación Pinterest con Unsplash y JS',
         description:
            'Recreación Pinterest usando Unsplash para la obtención de imágenes y JS para el resto de la funcionalidad de la web.',
         link: 'https://damigand-pinterest.netlify.app',
         repo: 'https://github.com/damigand/pinterest_damigand',
         preview: './pinterest.png',
      },
      {
         title: 'Simulador de pokédex con JS',
         description: 'Simulación de búsqueda de pokémon usando solamente JavaScript y datos estáticos.',
         link: 'https://damigand-pokedex.netlify.app',
         repo: 'https://github.com/damigand/pokedex',
         preview: './pokedex.png',
      },
   ],
};

export default data;
