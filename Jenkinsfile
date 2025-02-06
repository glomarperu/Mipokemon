pipeline {
    agent any

    tools {
        nodejs 'node'  // Debe coincidir con el nombre que configuraste en Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Lscys/DM2_Typescript.git', branch: 'main'
            }
        }
        stage('Verify Node.js and npm') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado con éxito.'
        }
        failure {
            echo 'Pipeline falló.'
        }
    }
}
