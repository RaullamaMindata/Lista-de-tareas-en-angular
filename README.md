# Lista de Tareas
![Descripción de la imagen]([ruta/imagen.png](https://github.com/Raullam/Lista-de-tareas-en-angular/blob/main/assets/Sin%20t%C3%ADtulo.png))

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.5.

# Iniciar el Servidor JSON
Para comenzar a usar `json-server` y simular una base de datos local:

**1. Instalar el JSON server**:

Si aún no tienes `json-server` instalado, ejecuta el siguiente comando en tu terminal:

```bash
npm install -g json-server
```

**2. Iniciar el servidor**:

Dirígete a la carpeta del proyecto donde se encuentra el archivo `db.json` (que actúa como base de datos) y ejecuta:

```bash
json-server --watch db.json --port 3000
```

Esto iniciará el servidor en `http://localhost:3000/`, y podrás acceder a la base de datos a través de esa URL. El archivo `db.json` contiene los datos iniciales, y el servidor se recargará automáticamente cada vez que este archivo sea modificado.

**Nota**: Si el puerto 3000 ya está en uso, puedes especificar otro puerto con `--port <numero_puerto>`.

**3. Acceder a la API**:

El servidor estará disponible en la siguiente URL:

http://localhost:3000/

Puedes acceder a los datos de las tareas a través de las siguientes rutas:

- http://localhost:3000/tasks para obtener todas las tareas.
- http://localhost:3000/tasks/{id} para obtener una tarea específica por su ID.
- http://localhost:3000/tasks/{id} para actualizar o eliminar tareas.

## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y dirígete a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques algún archivo fuente.

## Generación de código (Code scaffolding)

Angular CLI incluye herramientas poderosas para la generación de código. Para generar un nuevo componente, ejecuta:

```bash
ng generate component nombre-del-componente
```

Para obtener una lista completa de esquemas disponibles (como `components`, `directives` o `pipes`), ejecuta:

```bash
ng generate --help
```

## Compilación

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los archivos resultantes en el directorio `dist/`. Por defecto, la compilación para producción optimiza la aplicación para mejorar su rendimiento y velocidad.

## Ejecutar pruebas unitarias

Para ejecutar pruebas unitarias con el framework [Karma](https://karma-runner.github.io), usa el siguiente comando:

```bash
ng test
```

## Ejecutar pruebas end-to-end (e2e)

Para realizar pruebas end-to-end (e2e), ejecuta:

```bash
ng e2e
```

Angular CLI no incluye un framework de pruebas end-to-end por defecto. Puedes elegir el que mejor se adapte a tus necesidades.

## Recursos adicionales

Para obtener más información sobre el uso de Angular CLI, incluidos comandos detallados, visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

