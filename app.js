const express = require('express')
const app = express()
const port = 3000;

//Servir contenido Estatico
app.use( express.static('public') )

app.get('/', (req, res)=> {
  res.send('Hello Worlddd')
})

app.get('/hola-mundo', (req, res)=> {
    res.send('HOLA MUNDO DESDE HOLA MUNDO')
})

app.get('*', (req, res)=>{
  
  //mostrar un elemento desde una peticion
  res.sendFile(__dirname +'/public/404.html')
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})