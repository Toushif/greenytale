import multer from "fastify-multer";

const upload = multer({
    limits: {
        fileSize: 9.049e+15
    },
    fileFilter(req, file, cb) {
        // if(!file.originalname.endsWith('.pdf')) { //here we are using endswith method to check if a single file those charactes at the end
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) { //here match uses regex to chec extentions of multiple files which we are allowing
            cb(new Error('Please upload a JPG/JPEG/PNG file'))
        }

        cb(undefined, true)
    }
})

export default upload