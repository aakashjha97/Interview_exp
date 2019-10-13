const express=require('express')
const path=require('path')
const fs = require('fs')

const app=express();

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/interview', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('interview.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

app.get('/company/0', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('springboard.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

app.get('/company/1', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('inovaccer.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

app.get('/company/2', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('oyo.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

app.get('/company/3', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('samsung.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

app.get('/company/4', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('comviva.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

app.get('/company/5', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      res.render('optum.ejs', {
        items: JSON.parse(data)
      })
    }
  })
})

//add more company

app.use('/',express.static(path.join(__dirname,'public')))

app.listen(process.env.PORT || 1234)