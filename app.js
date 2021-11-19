const express = require("express");
const app = express();
const facts = require("./facts.json")
const cors = require("cors");
const favicon = require("serve-favicon");

app.use(cors());

app.use(favicon(__dirname + "/public/favicon.ico"));

app.get("/", (req, res) => {
    res.status(200).json(facts[Math.floor(Math.random() * facts.length)]);
});

app.get("/:id", (req, res) => {
    if (req.params.id > facts.length){
        res.status(404).json({"404-not-found": `Bu id'ye sahip bir gereksiz bilgi yok yanlızca 1-${facts.length} arasında bir sayı girilebilir.`});
    } else{
        res.status(200).json(facts[req.params.id - 1]);
    }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});