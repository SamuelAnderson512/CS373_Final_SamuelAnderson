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

        stage('Deploy to S3') {
            steps {
                // We use '.' to sync the current directory. 
                // We exclude the .git folder and the Jenkinsfile so they don't end up on your live website.
                sh "aws s3 sync . s3://${S3_BUCKET} --delete --exclude '.git/*' --exclude 'Jenkinsfile' --region us-east-2"
            }
        }

        stage('Invalidate CloudFront Cache') {
            steps {
                sh "aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DIST_ID} --paths '/*'"
            }
        }
    }
}
