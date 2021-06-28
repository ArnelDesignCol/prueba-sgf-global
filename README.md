## Pasos para la instalación del proyecto

Para poder instalar, ejecutar e interactuar con el proyecto debemos seguir los siguientes pasos:

   1. Primero en nuestro servidor local mysql crearemos una base de datos con el nombre `laika`.
   2. clonaremos el proyecto con el siguiente comando: \
      `https://github.com/ArnelDesignCol/prueba-sgf-global.git`
   3. Entraremos con nuestro IDE favorito y en la terminal ejecutaremos los siguientes comandos: \
      - `composer install`
      - `npm install` 
      - `npm run dev`
      - `npm run watch`
      - `php artisan serve`
  4. estos dos ultimos comandos los ejecutaremos de manera simultanea.
  5. ejecutaremos los comandos para realizar las migraciones realizadas, con los siguientes comandos en tu terminal: 
      - `php artisan migrate`
      - `php artisan db:seed`\

## Listo! ya esta todo listo para poder interactuar con el proyecto.