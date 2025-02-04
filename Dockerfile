# Usar la imagen oficial de Jenkins LTS como base
FROM jenkins/jenkins:lts

# Cambiar al usuario root para instalar paquetes
USER root

# Actualizar la lista de paquetes e instalar Git
RUN apt-get update && apt-get install -y git

# Volver al usuario jenkins
USER jenkins