Aws.config.update({
  region: 'us-west-1',
  credentials: Aws::Credentials.new(ENV['s3_access_key_id'], ENV['s3_secret_access_key'])
})

Aws::VERSION = Gem.loaded_specs["aws-sdk"].version
