const express = require('express');

const app = express();

/* Nos ayudan a interpretar y decodificar el JSON */
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const estudiantes = [
    {nombre: "Elena", apellido:"De Troya"},
    {nombre: "Juana", apellido: "De Arco"},
    {nombre: "Pedro", apellido: "Paramo"}
];

app.get("/api", (req, res) => {
    res.json({message: "Hola clase!"});
})

app.get("/api/estudiantes", (req, res) => {
    res.json(estudiantes);
});

app.post("/api/estudiantes",(req, res) => {
    console.log(req.body);
    estudiantes.push(req.body);
    res.json(estudiantes);
});

app.get("/api/estudiantes/:id", (req, res) => {
    let id = req.params.id;
    res.json(estudiantes[id]);
});

app.delete("/api/estudiantes/:num", (req, res) => {
    let id = req.params.num;
    estudiantes.splice(id, 1);
    res.json(estudiantes);
})

app.put("/api/estudiantes/:num", (req, res) =>{
    let id = req.params.num;
    estudiantes[id] = req.body;
    res.json(estudiantes);
})

app.listen(8000, () => {
    console.log("Servidor corriendo");
});