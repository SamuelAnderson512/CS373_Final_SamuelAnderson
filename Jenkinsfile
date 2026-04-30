pipeline {
    agent any

    environment {
        S3_BUCKET = 'samuel-static-site-991727098724'
        CLOUDFRONT_DIST_ID = 'EC7ASQ09LCKHT'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // If you are using a framework like React or Hugo, run your build commands here.
                // e.g., sh 'npm install' and sh 'npm run build'
                // If it's just plain HTML/CSS, you can delete this stage entirely.
                echo 'Building the site...'
            }
        }

        stage('Deploy to S3') {
            steps {
                // Adjust the local path ('./build') to wherever your compiled site lives
                sh "aws s3 sync ./build s3://${S3_BUCKET} --delete"
            }
        }

        stage('Invalidate CloudFront Cache') {
            steps {
                // This forces CloudFront to drop the old cached files and fetch the new ones from S3
                sh "aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DIST_ID} --paths '/*'"
            }
        }
    }
}
