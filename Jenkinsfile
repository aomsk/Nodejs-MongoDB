pipeline {
    agent any
    stages {
        stage('Pull code from github') {
            steps {
                git branch: 'main', url: 'https://github.com/aomsk/Nodejs-MongoDB.git'
            }
        }
		stage('Download dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Deploy to Heruku') {
            steps {
                bat 'git add .'
                bat 'git commit -am "update all files"'
                bat 'git push heroku main'
            }
        }
        stage('node version') {
            steps {
                bat 'node --version'
            }
        }
    }
}