# Usar la imagen oficial de Jenkins LTS como base
FROM jenkins/jenkins:lts

# Cambiar al usuario root para instalar paquetes
USER root

# Actualizar la lista de paquetes e instalar Git y dependencias necesarias para Node.js
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# Verificar las instalaciones
RUN git --version && node --version && npm --version

# Volver al usuario jenkins
USER jenkins