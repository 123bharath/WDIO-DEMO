pipeline{
    agent any

    stages{
        stage("build"){
            steps{
                echo "Installing the dependencies..."
                sh "npm install"
            }
        }
        stage("test"){
            steps{
                echo "Testing in progress..."
                sh "npx wdio run wdio.conf.js"
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
        }
        failure{
            echo "Execution is failed..."
        }
    }
}