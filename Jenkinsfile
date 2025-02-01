pipeline {
    agent any
    tools {
       nodejs 'NodeJS'
    }
    stages {
        stage('Install Docker Compose') {
            steps {
                script {
                    sh '''
                    if ! command -v docker-compose &> /dev/null
                    then
                        echo "docker-compose not found, installing..."
                        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o ~/bin/docker-compose
                        chmod +x ~/bin/docker-compose
                        export PATH=$PATH:~/bin
                    else
                        echo "docker-compose is already installed"
                    fi
                    '''
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
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
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