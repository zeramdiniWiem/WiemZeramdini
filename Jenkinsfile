         pipeline {
             agent any
             tools {
                nodejs 'NodeJS'
             }
             environment {
                 DOCKER_COMPOSE = '/usr/local/bin/docker-compose'
             }
             stages {
                 stage('Verify Docker Compose') {
                    steps {
                        script {
                            sh 'echo $PATH'
                            sh '${DOCKER_COMPOSE} --version'
                        }
                    }
                 }
                 stage('Checkout') {
                     steps {
                         git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/zeramdiniWiem/WiemZeramdini'
                     }
                 }
                 stage('Install Backend Dependencies') {
                     steps {
                         dir('back_project') {
                             sh 'npm install'
                         }
                     }
                 }
                 stage('Install Frontend Dependencies') {
                     steps {
                         dir('project_front') {
                            sh 'npm install'
                         }
                     }
                 }
                 stage('Build Frontend') {
                     steps {
                         dir('project_front') {
                             sh 'npm run build'
                         }
                     }
                 }
                 stage('Deploy with Docker Compose') {
                     steps {
                         dir('WiemZeramdini') {
                             sh '${DOCKER_COMPOSE} down'
                             sh '${DOCKER_COMPOSE} up -d'
                         }
                     }
                 }
             }
             post {
                 always {
                     archiveArtifacts artifacts: 'back_project/build/**/*', allowEmptyArchive: true
                     archiveArtifacts artifacts: 'project_front/dist/**/*', allowEmptyArchive: true
                 }
             }
         }