🧩 Descripción del Proyecto Desarrollado

Creamos un cubo 3D interactivo en HTML, CSS y JavaScript capaz de mostrar contenido web real dentro de sus caras, convirtiéndolo en una mini-plataforma de navegación y análisis visual.

Este cubo permite:

✅ 1. Introducir una URL en la cara frontal 

El usuario escribe cualquier dirección web en un campo de texto ubicado en la cara frontal del cubo.
Este input es el punto de entrada para cargar la web.

✅ 2. Cargar la página real dentro del cubo

La cara derecha del cubo contiene un iframe que renderiza la página web ingresada.
Esto permite ver la web en vivo directamente sobre una cara del cubo rotatorio.

✅ 3. Obtener y mostrar el código HTML real de la web

La cara izquierda muestra, en formato <pre>, el código fuente HTML real obtenido desde la URL ingresada.
Para obtenerlo fue necesario implementar un servidor proxy, ya que la mayoría de los sitios bloquean solicitudes directas por CORS.

✅ 4. Creación de un servidor Proxy Anti-CORS (Node.js)

Se desarrolló un pequeño backend en Node.js con Express, el cual:

Recibe una URL desde el frontend

Hace la petición real al servidor objetivo

Devuelve el HTML al navegador sin restricciones CORS

Permite visualizar código fuente incluso de sitios protegidos contra peticiones directas

Este servidor hace posible que el cubo 3D cargue tanto:

✔ La web en vivo
✔ El código HTML asociado

🎯 Objetivo del sistema

Crear una herramienta visual, futurista y educativa donde el usuario puede:

Navegar webs dentro de un cubo 3D

Analizar su estructura HTML en tiempo real

Ver cómo se compone un sitio web desde una interfaz creativa

Jugar con la rotación 3D mientras explora código y diseño

🛠️ Tecnologías utilizadas

HTML5 – estructura del cubo y la interfaz

CSS3 – animación 3D con transform, perspective y rotate

JavaScript – interacción, carga dinámica y manejo de eventos

Node.js + Express – servidor proxy anti-CORS

Web iframe rendering – muestra de la web real en una cara del cubo

🚀 Resultado

Obtuvimos un cubo 3D futurista, completamente funcional, que actúa como un mini inspector web, mostrando:

La web real

Su código fuente

Todo integrado dentro de un diseño rotatorio 3D inmersivo
🔹 un cubo que muestre CSS, JS y recursos multimedia,
🔹 modo IA asistente dentro del cubo,
🔹 o convertirlo en un inspector web avanzado tipo DevTools 3D.
