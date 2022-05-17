const EstudianteController = require('../controllers/estudiante.controller');

module.exports = app =>{
    app.get("/api/estudiantes/", EstudianteController.findAllStudent);
    app.get("/api/estudiantes/:id", EstudianteController.findOneStudent);
    app.post("/api/estudiantes/new", EstudianteController.createStudent);
    app.put("/api/estudiantes/update/:id", EstudianteController.updateStudent);
    app.delete("/api/estudiantes/delete/:id", EstudianteController.deleteStudent);
}