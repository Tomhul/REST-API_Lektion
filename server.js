import express from "express";

const app = express();
const PORT = 3000;

// Din "databas"
let minaBilar = [
  // Lägg till dina objekt här (id, etc...)
  { id: 1, name: "Volvo", typ: "bil" },
  { id: 2, name: "Nissan", typ: "bil" },
  { id: 3, name: "Toyota", typ: "bil" },
];

app.get("/", (req, res) => {
  res.json({ meddelande: "Välkommen till API:et Mina bilar " });
});

// 1. Hämta alla
app.get("/api/din-resurs", (req, res) => {
  res.json(minaBilar);
});

// 2. Hämta en via ID
app.get("/api/din-resurs/:id", (req, res) => {
  const id = Number(req.params.id);

  const bil = minaBilar.find((u) => u.id === id);

  if (!bil) {
    return res.status(404).json({ fel: "Bilen hittades inte" });
  }

  res.json(bil);
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
