import 'dotenv/config.js'

export const ENV = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    CLIENT_URL: process.env.CLIENT_URL,
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API: process.env.CLOUDINARY_API,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
    ARCJET_KEY: process.env.ARCJET_KEY,
    ARCJET_ENV: process.env.ARCJET_MODE,
}
