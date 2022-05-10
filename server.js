const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
global.Task = require('./api/models/taskModel')
const routes = require('./api/routes/taskRoutes')

// mongoose.connect(
//     'mongodb://localhost:27017/vuecrudapp',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect('mongodb+srv://root:12345@cluster0.n01um.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', options);

const port = process.env.PORT || 3000;
if (port == null || port == "") {
    port = 3000
}

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)
app.listen(port)

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found!` })
})

console.log(`Server started on port ${port}`);