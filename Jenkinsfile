pipeline {
    agent any

    environment {
        // GitHub token stored in Jenkins credentials
        GITHUB_TOKEN = credentials('github-token-id') 
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the branch/PR that triggered the build
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing NPM dependencies..."
                bat 'npm install'
            }
        }

        stage('Run WDIO Tests') {
            steps {
                script {
                    try {
                        echo "Running WebdriverIO tests..."
                        bat 'npx wdio run wdio.conf.js'
                        
                        // Notify GitHub that the build succeeded
                        githubNotify context: 'Jenkins Check', status: 'SUCCESS', description: 'All tests passed!'
                    } catch (Exception e) {
                        // Notify GitHub that the build failed
                        githubNotify context: 'Jenkins Check', status: 'FAILURE', description: 'Tests failed!'
                        error("WDIO tests failed")
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
