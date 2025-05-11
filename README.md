# Proyecto Angular Dockerizado

Este proyecto es una aplicación Angular empaquetada y desplegable a través de Docker. Aquí encontrarás las instrucciones para clonar el repositorio y levantar el proyecto localmente usando Docker.

## 📦 Requisitos previos

Antes de empezar, asegúrate de tener instalado en tu máquina:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- Angular 19 (Para ejecutar la aplicación el local)
- Node versión 18+ (Para ejecutar la aplicación el local)

## 🚀 Clonar el repositorio

```bash o consola de linea de comando (cmd)
git clone https://github.com/LSHERN/quipux_playlist_frontend.git

## Construir y ejecutar el contenedor docker

Para construir la imagen de docker debes ejecutar el siguiente comando en la raiz del proyecto:
docker build -t angular-playlist-app . 

Para levantar el contenedor:
docker run -p 8080:80 angular-playlist-app

Abre tu navegador y ejecuta: http://localhost:8080

