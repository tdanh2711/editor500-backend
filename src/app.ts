import express from 'express'
import cors from 'cors'
import aws from './aws'

const app = express()

app.use(cors())

app.get('/upload-url', async (req, res, next) => {
  const { fileName, fileType } = req.query
  if (!fileName) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Missing file name',
    })
  }

  const signedUrl = await aws.getSignedUrl(fileName as string, fileType as string)
  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Success',
    data: { signedUrl },
  })
})

export default app
