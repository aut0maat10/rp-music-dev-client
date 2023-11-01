terraform {
    backend "s3" {
        bucket = "dev-rp-terraform-backend"
        key    = "tf-backend.tfstate"
        region = "us-east-1"
        encrypt = true
        dynamodb_table = "dev-rp-terraform-backend"
  }
}
