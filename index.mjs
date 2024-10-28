// import express from 'express'
// import router from './routes/index.mjs'
// import db from './config/db.js'
// const app = express()

// app.listen(3002, () => {
//   console.log('listeninig at 3002')

//   db.connection.once('open', () => {
//     console.log('db connected successfully!')
//   })
// })

// app.use(express.json()); //Backend ko bata rahe hain ke frontend ka data json format me aega

// app.use('/', router)

//Mongodb Steps:
//1. Connect Mongodb with Nodejs
//2. Create Schemas
//3. DB se Baat Cheet karwana!
import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

// import authRouter from './routes/auth.mjs'

import productsRouter from './routes/products.js'




const app = express();
app.use(express.json()); // body parser
app.use(cors())


app.use("/products", productsRouter) // Secure api




//     /static/vscode_windows.exe
app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, './web/build')))

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})