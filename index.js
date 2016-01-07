'use strict';

// Spin up server
const express = require('express')
const config = require('./config.js').express
const app = express()

// Configure server
app
    .set('env',config.env)
    .set('strict routing',config.routing.strict)
    .set('view engine',config.views.engine)
    .set('views',config.views.dir)
    .use('/js',express.static(__dirname+'/js'))
    .use('/css',express.static(__dirname+'/css'))

// Keep it spinning
app.listen(config.port)
console.log(`App started at ${config.port}`);

// Set render methods for index page
app.get('/', function(req,res) {
    res.render('index')
})

// Set render methods for given pages
var pageList = config.routing.pages
for (let i=1;i<pageList;i++) {
    var page = pageList[i]
    app.get(`/${page}`, function (req,res) {
        res.render(`#{page}`)
    })
}