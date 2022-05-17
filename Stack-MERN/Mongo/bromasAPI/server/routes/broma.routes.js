const BromaController = require('../controllers/broma.controller');

module.exports = app =>{
    app.get("/api/jokes/", BromaController.findAllBroma);
    app.get("/api/jokes/:id", BromaController.findOneBroma);
    app.post("/api/jokes/new", BromaController.createBroma);
    app.put("/api/jokes/update/:id", BromaController.updateBroma);
    app.delete("/api/jokes/delete/:id", BromaController.deleteBroma);
}