// Importer les modules nécessaires
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors())

mongoose.connect("mongodb+srv://mimikhl2005:HelloWorld000@cluster0.mehlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const quoteSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

  
app.get("/quotes/random", async (req, res) => {
    try {
      const count = await Quote.countDocuments();
      if (count === 0) {
        return res.status(404).json({ message: "Aucune citation trouvée dans la base de données." });
      }
      const randomIndex = Math.floor(Math.random() * count);
      const randomQuote = await Quote.findOne().skip(randomIndex);
      res.json(randomQuote);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération de la citation." });
    }
  });
  

app.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});
