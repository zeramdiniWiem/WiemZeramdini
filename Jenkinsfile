pipeline {
    agent any
    tools {
       nodejs 'NodeJS'
    }
    stages {
        stage('Install Docker Compose') {
            steps {
                script {
                    // Install Docker Compose if it's not already installed
                    sh '''
                    # Create the directory if it doesn't exist
                    mkdir -p /var/jenkins_home/bin

                    # Install Docker Compose in the specified directory
                    if ! command -v docker-compose &> /dev/null
                    then
                        echo "docker-compose not found, installing..."
                        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /var/jenkins_home/bin/docker-compose
                        chmod +x /var/jenkins_home/bin/docker-compose
                        # Add the bin directory to the PATH
                        export PATH=$PATH:/var/jenkins_home/bin
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