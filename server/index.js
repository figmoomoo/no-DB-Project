const express = require('express');

const app = express();
const port = 3636;

//controllers
const petCtrl = require('./controllers/petController')

//middleware
app.use(express.json())

//Endpoints
app.get('/api/pet', petCtrl.getPet)
app.post('/api/pet', petCtrl.addPet)
app.delete('/api/pet/:id', petCtrl.deletePet)
app.put('/api/pet/:id', petCtrl.editPet)

app.listen(port, () => console.log(`This should be working... I hope... on port ${port}`))