# Usar una imagen base de Node.js
FROM node:18-alpine

# Instalar dependencias necesarias para Alpine y Tailwind CSS
RUN apk add --no-cache bash

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instalar todas las dependencias (incluyendo devDependencies)
RUN npm install

# Copiar todo el código del proyecto
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Exponer el puerto donde correrá la app
EXPOSE 3000

# Comando para ejecutar la app en producción
CMD ["npm", "start"]
