# 1. Archivo de configuracion "Dockerfile".

Para iniciar un contener es necesario preparar una configuracion inicial, la cual posee los siguientes parametros minimos:

- Versión de node con la que correrá la aplicación web
  FROM node:17-alpine3.14
- Creamos un directorio interno en el contenedor donde se copiara nuestra aplicación web
  WORKDIR /usr/src/app

- Instalación de dependencias - A wildcard is used to ensure both package.json AND package-lock.json are copied - where available (npm@5+)
  COPY package\*.json ./
  RUN npm install

- If you are building your code for production - RUN npm ci --only=production - Copiamos los archivos del proyecto
  COPY . .

- La instrucción EXPOSE informa a Docker que el contenedor escucha en los puertos de red especificados en tiempo de ejecución.
  EXPOSE 4000

- CMD esta intruccion define que comandos se ejecutan cuando se inicia el contenedor.
  CMD [ "node", "index.js" ]

# 2. Preparar archivo ".dockerignore".

Incluye archivos de gran tamaño o que sean confidenciales, la consola de forma previa revisa este archivo para no subir de forma innecesaria los directorios que coincidan con ellos.

# 3. Comando "Build".

El comando docker build crea una imagen a partir de un Dockerfile.
ex: - docker build . -t mi-primer-contenedor

# 4. Ejecutar contenedor.

La instruccion Run ejecuta cualquier comando, en este caso sera nuestro contenedor definido.
ex: - docker run -p 3000:3000 mi-primer-contenedor
