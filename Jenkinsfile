pipeline{
    agent any
    
//   environment {
//         DOCKER_TAG = getVersion()
//     }
    
    stages{
        stage('SCM'){
            steps{
                git branch: 'dev2', url: 'https://github.com/solas98/Hotel-Management'
            }
        }
        stage('Docker Build User-Service'){
            steps{
                dir('user-service'){
                    sh "ls"
                     sh "docker build . -t solas98/user-service:latest"
                }
            }
        }
        stage('Docker Build Hotel-Service'){
            steps{
                dir('hotel-service'){
                    sh "ls"
                     sh "docker build . -t solas98/hotel-service:latest"
                }
            }
        }
        stage('Docker Build Reservation-Service'){
            steps{
                dir('reservation-service'){
                    sh "ls"
                     sh "docker build . -t solas98/reservation-service:latest"
                }
            }
        }
        stage('Docker Push'){
            steps{
                withCredentials([string(credentialsId: 'DockerHubPwd', variable: 'DockerHubPwd')]) {
                sh "docker login -u solas98 -p ${DockerHubPwd}"
                sh "docker push solas98/user-service:latest"
                sh "docker push solas98/hotel-service:latest"
                sh "docker push solas98/reservation-service:latest"
                }
                // withCredentials([string(credentialsId: 'docker-hub', variable: 'docker-hub')]) {
                // sh "docker login -u solas98 -p Giwrgos98!@"
                // }
                // sh "docker push solas98/user-service:0.0.1"
                // sh "docker push solas98/hotel-service:${DOCKER_TAG}"
                // sh "docker push solas98/reservation-service:${DOCKER_TAG}"
                
            }
        }
    }
}

// def getVersion(){
//     def commitHash = sh label: '', returnStdout: true, script: 'git rev-parse --short HEAD'
//     return commitHash
// }
