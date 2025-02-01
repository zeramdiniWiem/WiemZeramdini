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
                             sh 'npm install'
                         }
                     }
                 }
                 stage('Run Backend Tests') {
                     steps {
                         dir('back_project') {
                             script {
                                 try {
                                     sh 'npm test'
                                 } catch (Exception e) {
                                     echo "Backend tests failed or not available"
                                 }
                             }
                         }
                     }
                 }
                 stage('Run Frontend Tests') {
                     steps {
                         dir('project_front') {
                             script {
                                 try {
                                     sh 'ng test --watch=false --browsers=ChromeHeadless'
                                 } catch (Exception e) {
                                     echo "Frontend tests failed or not available"
                                 }
                             }
                         }
                     }
                 }
                 stage('Build Backend') {
                     steps {
                         dir('back_project') {
                             sh 'npm run build'
                         }
                     }
                 }
                 stage('Build Frontend') {
                     steps {
                         dir('project_front') {
                             sh 'ng build --configuration production'
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