pipeline{
  
  environment{
    dockerimagename = "solas98/user-service"
    dockerImage = ""
  }
  
  agent any
  
  stages{
    stage('SCM'){
      steps{
        git 'https://github.com/solas98/Hotel-Management.git'
      }
    }    
    stage('Build Image'){
      steps{
        sh "cd ./user-service"
        script{
          dockerImage = docker.build dockerimagename
        }
      }
    }
  }  
}
