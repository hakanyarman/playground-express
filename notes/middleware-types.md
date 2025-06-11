# Middleware Types

application-level middleware

```js
app.use((req, res, next) => {
  console.log('Application-level middleware')
  next()
})
```

---

router-level middleware

```js
const router = express.Router()

router.use((req, res, next) => {
  console.log('Router-level middleware')
  next()
})
```

---

error-handling middleware

```js
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Bir hata oluştu!')
})
```

- diğer middlewarelerden farkı 4 tane parametre almasıdır.

- next(err) ile tetiklenir.

---

built-in middleware

```js
app.use(express.json())
app.use(express.static('public'))
```

---

third-party middleware

```js
const morgan = require('morgan')
app.use(morgan('dev'))
```

- npm üzerinden yüklenen middlewarelerdir.
