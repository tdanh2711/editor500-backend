import AWS from 'aws-sdk'

const BUCKET = 'practice-editor'
AWS.config.update({
  accessKeyId: process.env.AKI,
  secretAccessKey: process.env.SAK,
})
const s3 = new AWS.S3()

const getSignedUrl = (fileName: string, fileType = 'image/jpeg') => {
  return new Promise<string>((resolve, reject) => {
    const params = {
      Bucket: BUCKET,
      Key: fileName,
      ContentType: fileType,
      Expires: 120,
      ACL: 'public-read',
    }
    s3.getSignedUrl('putObject', params, (err: unknown, url: string) => {
      if (err) {
        reject(err)
      } else {
        resolve(url)
      }
    })
  })
}

const aws = { getSignedUrl }
export default aws
