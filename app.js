const Express = require("express");
const app = Express();
const facts = require("./facts.json")
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json(facts[Math.floor(Math.random() * facts.length)]);
});

app.get("/all", (req, res) => {
    res.status(200).json(facts)
})

app.get("/:id", (req, res) => {
    if (req.params.id > facts.length || req.params.id <= 0){
        res.status(404).json({"error": "404 Not Found", "message": `Bu id'ye ait bir gereksiz bilgi yok. Yanlızca 1-${facts.length} arası sayılar girilebilir.`});
    } else{
        res.status(200).json(facts[req.params.id - 1]);
    }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});