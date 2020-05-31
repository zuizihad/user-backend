const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const UserRoutes = require('./UserRoutes')

const app =express()
app.use(cors())
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/users', UserRoutes)

app.get('/', (req, res) =>{
    res.render('index')
})
app.get('*', (req, res) =>{
    res.send('<h1>404 page not found</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})