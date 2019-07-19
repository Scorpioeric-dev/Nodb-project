const express = require('express')
const app = express()
const ctrl = require('./controller')
const port = 4444

app.use(express.json())
app.get('/api/styles',ctrl.getData)
app.post('/api/styles',ctrl.addStyle)
app.delete('/api/styles/:id',ctrl.delete)
app.put('/api/styles/:id',ctrl.styleUpdate)

//crud nd express/port set up (backend)


app.listen( port, () => console.log(`Did you ${port}`))