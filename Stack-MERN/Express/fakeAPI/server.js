const {faker} = require('@faker-js/faker');
const express = require('express');

const app = express();

// se utilizan cuando vamos hacer un CRUD y sirven para interpretar y decodificar JSON
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

const objetoUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

const objetoEmpresa = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    direccion:{
        calle: faker.address.streetAddress(),
        cuidad: faker.address.city(),
        estado: faker.address.state(),
        cp: faker.address.zipCode(),
        pais: faker.address.country()
    }
});

app.get("/api/users/new", (req, res) =>{
    const nuevoUser = objetoUser();
    res.json(nuevoUser);
});

app.get("/api/companies/new", (req, res) =>{
    const nuevaEmpresa = objetoEmpresa();
    res.json(nuevaEmpresa);
});

app.get("/api/user/company", (req, res) =>{
    const nuevaEmpresa = objetoEmpresa();
    const nuevoUser = objetoUser();
    res.json({User:nuevoUser, Empresa:nuevaEmpresa});
});

app.listen(8000,()=> console.log('listening'));