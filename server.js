const express = require('express')
const codeRoutes = require('./routes/codeRoutes')

const app = express()

app.use(express.json({ extends: false }))

app.get('/', (req, res) => {
  res.json('Welcome to Compile Nest.')
})

app.use('/code', codeRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})