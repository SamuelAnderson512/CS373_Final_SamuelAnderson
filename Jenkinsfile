pipeline {
    agent any

    environment {
        S3_BUCKET = 'samuel-static-site-991727098724-us-east-2-an'
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
