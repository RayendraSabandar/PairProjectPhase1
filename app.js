const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/index')

app.set('view engine', 'ejs')

app.use("/public", express.static("public"))

app.use(express.urlencoded({extended:false}))

app.use(router)

app.listen(port, () => {
    console.log('This app is listening to port', 3000);
})