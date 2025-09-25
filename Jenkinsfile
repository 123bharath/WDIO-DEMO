pipeline {
    agent any   // Runs on any available Jenkins agent

    // environment {
    //     // Jenkins credential ID that stores your GitHub token
    //     GITHUB_TOKEN = credentials('github-token-id')
    // }

    stages {
        // stage('Checkout') {
        //     steps {
        //         // Check out the source code from the GitHub PR branch
        //         checkout scm
        //     }
        // }

        stage('Build') {
            steps {
                sh 'echo "Building project..."'
                sh 'npm install'   // Example build step
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                sh 'npx wdio wdio.conf.js'      // Replace with your test command
            }
        }
    }

    post {
        success {
            // ✅ Jenkins automatically reports SUCCESS to GitHub
            echo 'Build successful. GitHub will allow merge.'
        }
        failure {
            // ❌ Jenkins automatically reports FAILURE to GitHub
            echo 'Build failed. GitHub will block merge until fixed.'
        }
    }
}
