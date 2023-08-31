require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const veggies = require('./models/veggies');
const mongoose = require('mongoose');
const Veggie = require('./models/Veggie');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once('open', ()=> {
      console.log('connected to mongo');
  });

//middleware
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//index
app.get('/veggies', (req, res)=>{
    Veggie.find({}) 
    .then((allveggies) => {
        console.log(allveggies);
        res.render('Index', { veggies: allveggies });
        })
    .catch (error => {
        console.error(error)
    })
});

//new
app.get('/veggies/new', (req, res) => {
    res.render('New')
});

//create ----- post route
app.post('/veggies/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }

    Veggie.create(req.body) 
    .then((createdVeggie) => {
     res.redirect('/veggies')
    })
    .catch(error => { 
        console.error(error)
    })
});

//show ----- and port app.listen
app.get('/veggies/:id', (req, res) => {
    Veggie.findOne({_id: req.params.id})
    .then((foundVeggie) => {
        res.render('Show', {
          veggie: foundVeggie
        })
    })
    .catch(error => {
        console.error(error)
    })
});


app.listen(PORT, ()=>{
    console.log(`app is listening at: ${PORT}`)
});