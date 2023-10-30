variable "access_key" {
  type = string
  description = "AWS access key"
}
variable "secret_key" {
  type = string
  description = "AWS secret key"
}
variable "domain_name" {
  type = string
  description = "Name of the domain"
}
variable "bucket_name" {
  type = string
  description = "Name of the bucket."
}
variable "region" {
    type = string
    default = "us-east-1"
}