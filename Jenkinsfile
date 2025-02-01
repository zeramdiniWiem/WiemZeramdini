         pipeline {
             agent any
             tools {
                nodejs 'NodeJS'
             }
             environment {
                 NODE_ENV = 'production'
             }
             stages {
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
                            sh 'rm -rf node_modules'
                            sh 'npm install'
                            sh 'npm install @angular-devkit/build-angular --save-dev'
                         }
                     }
                 }
                 stage('Build Frontend') {
                     steps {
                         dir('project_front') {
                             sh 'npx ng build --prod'
                         }
                     }
                 }
                 stage('Deploy with Docker Compose') {
                     steps {
                         dir('WiemZeramdini') {
                             sh 'docker-compose down'
                             sh 'docker-compose up -d --build'
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