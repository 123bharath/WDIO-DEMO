pipeline{
    agent any

    stages{
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage("build"){
            steps{
                echo "Installing the dependencies..."
                bat "npm install"
            }
        }
        stage("test"){
            steps{
                echo "Testing in progress..."
                bat "npx wdio run wdio.conf.js"
            }
        }
        stage('Allure Report') {
            steps {
                echo "Generating Allure Report..."
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
        stage("deploy"){
            steps{
                echo "All steps executed successfully..."

            }
        }
    }
    post{
        always{
            echo "Execution Completed..."
        }
        success{
            echo "Execution is successful..."
             // Report build success to GitHub
            githubNotify context: 'Jenkins Build', status: 'SUCCESS'
        }
        failure{
            echo "Execution is failed..."
            // Report build failure to GitHub
            githubNotify context: 'Jenkins Build', status: 'FAILURE'
        }
    }
}
