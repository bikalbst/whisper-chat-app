import { v2 as cloudinary } from "cloudinary"
import { ENV } from "../lib/env.js"

cloudinary.config({
    cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
    api_key: ENV.CLOUDINARY_API,
    api_secret: ENV.CLOUDINARY_SECRET
});

export default cloudinary;