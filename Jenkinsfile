pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS = credentials('github-token-id')
    }

    stages {

        stage("Notify GitHub: Pending") {
            steps {
                script {
                    githubNotify context: 'WDIO Tests', status: 'PENDING', description: 'Tests running', credentialsId: env.GITHUB_CREDENTIALS
                }
            }
        }

        stage("Build") {
            steps {
                echo "Installing dependencies..."
                bat "npm install"
            }
        }

        stage("Test") {
            steps {
                echo "Running WDIO tests..."
                bat "npx wdio run wdio.conf.js"
            }
        }

        stage("Allure Report") {
            steps {
                echo "Generating Allure Report..."
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }

        stage("Deploy") {
            steps {
                echo "All steps executed successfully..."
            }
        }

        stage("Notify GitHub: Result") {
            steps {
                script {
                    def buildStatus = currentBuild.currentResult == 'SUCCESS' ? 'SUCCESS' : 'FAILURE'
                    githubNotify context: 'WDIO Tests', status: buildStatus, description: 'WDIO tests finished', credentialsId: env.GITHUB_CREDENTIALS

                    if (buildStatus != 'SUCCESS') {
                        error("WDIO tests failed! Merge blocked by branch protection.")
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Execution Completed..."
        }
        success {
            echo "Execution Successful!"
        }
        failure {
            echo "Execution Failed!"
        }
    }
}