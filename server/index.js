const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5050

app.use(express.static('html'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../html/index.html'))

app.listen(port, () => console.log(`We cruisin now boyyyysss, we out here on ${port}!!`))