const request = require('supertest');
const app = require("../server")
const db = require("../database/models");

let thisDb = db



beforeAll(async() => {
    jest.setTimeout(30000);
    await thisDb.sequelize.sync({ force: true })
})

describe("Signup Auth", () => {

    test("should return message signup", async () => {
        const response = await request(app)
            .post("/auth/register")
            .send({
                firstName: "test",
                lastName: "test",
                address: "test",
                city: "test",
                gender: "test",
                email: "ya@gmail.com",
                password: "mytest"
            })
        expect(response.statusCode).toBe(200);
    })
})

describe("Signin Auth", () => {
    test("should return message signin", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({
                email: "ya@gmail.com",
                password: "mytest"

            })
        expect(response.statusCode).toBe(200);
    })
})

afterAll(async() => {
    await thisDb.sequelize.close()
})