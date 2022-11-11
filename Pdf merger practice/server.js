const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))

const {mergePdfs} = require('./merge');
// const { mergePdfs } = require('./testpdf');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
})
app.post('/merge', upload.array('pdfs', 2), async(req, res, next)=> {
  // console.log(req.files);
 let d= await mergePdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
  // res.send({ data: req.files });
   res.redirect(`https://localhost:3000/static/${d}.pdf`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})