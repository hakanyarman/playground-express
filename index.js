import express from 'express'
import { carsRouter } from './routes/cars.js'

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './views')

app.all('/', (req, res) => {
  console.log('redirecting all API method calls on "/" route to index view')
  res.redirect('/index-view')
})

app.get('/index-view', (req, res) => {
  res.render('index', { name: 'hakan' })
})

app.post('/index-view', (req, res) => {
  const age = req.body.age
  res.redirect(`/other-route?age=${age}`)
})

app.get('/other-route', (req, res) => {
  const age = req.query.age
  res.render('redirecting', { age })
})

app.get('/download-note', (req, res) => {
  res.download('./notes/middleware-types.md')
})

// ----------------------------------------
// app.get("/users", (req, res) => {
//   res.send("get users");
// });

// app.post("/users", (req, res) => {
//   res.send("post to users");
// });

// app.patch("/users", (req, res) => {
//   res.send("update users");
// });
// ----------------------------------------

// use this instead of the structure shown above:

app
  .route('/users')
  .get((req, res) => {
    res.send('get users')
  })
  .post((req, res) => {
    res.send('post to users')
  })
  .patch((req, res) => {
    res.send('update users')
  })

// ----------------------------------------
// app.get("/cars", (req, res) => {
//   res.send("cars homepage");
// });

// app.get("/cars/toyota", (req, res) => {
//   res.send("toyota car");
// });

// app.get("/cars/hyundai", (req, res) => {
//   res.send("hyundai car");
// });
// ----------------------------------------

// use this instead of the structure shown above:

app.use('/cars', carsRouter)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
