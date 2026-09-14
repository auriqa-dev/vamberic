# Vamberic Group public website

## Production deployment

The public website follows this deployment path:

**Replit → GitHub → GitHub Actions → S3 → CloudFront**

Changes are developed in Replit and pushed to GitHub. The manual `Deploy production website` GitHub Actions workflow builds the static frontend, synchronises `dist/public/` to the production S3 bucket, then invalidates the CloudFront cache.

The workflow uses GitHub OIDC to assume the AWS role configured in the `AWS_DEPLOY_ROLE_ARN` repository variable. It does not use stored AWS access keys.
