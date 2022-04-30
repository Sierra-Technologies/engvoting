const express = require('express');
const router = require('./controller')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const CORS = require('cors');
const path = require('path')
// const ejs = require('ejs')

dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(CORS())
app.set('view engine','ejs')

//Router
router(app);

app.listen(PORT,()=>{
    console.log('listening to port ' + PORT)
})


