const express = require("express")
const morgan = require("morgan");
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");

const bodyParser= require("body-parser");

app.use(morgan("dev"));
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/forms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Model do documento
const Post = mongoose.model('Post', {
  name: String,
  idade:Number,
  email: String,
});

// Rota para salvar os dados
app.post('/forms', async (req, res) => {
  try {
    const { name, idade,email } = req.body;

    const post = new Post({ name,idade, email });

    await post.save();

    res.json({ message: 'Dados salvos com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar dados' });
  }
});



app.listen(8008, ()=> {
    console.log("Rodando");
})

