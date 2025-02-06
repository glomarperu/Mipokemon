pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Lscys/DM2_Typescript.git', branch: 'master'
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