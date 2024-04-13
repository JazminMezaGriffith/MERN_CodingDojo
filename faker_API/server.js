const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

class User {
  constructor() {
    this._id = faker.datatype.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.datatype.number();
    this.name = faker.company.companyName();
    this.direccion = {
        streetName: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
  }
}

app.get('/api/users/new', (req, res) => {
  const newUser = new User();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = new Company();
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
  const newUser = new User();
  const newCompany = new Company();
  res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
