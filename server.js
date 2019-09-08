const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.use(express.static('public'))
//app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.listen(process.env.PORT || PORT, () => {
  console.log("Server started", PORT);
});