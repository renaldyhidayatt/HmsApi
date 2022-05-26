const request = require('supertest');
const app = require("../server")
const db = require("../database/models");


let thisDb = db

beforeAll(async () => {
    jest.setTimeout(30000);
    await thisDb.sequelize.sync({ force: true })
})

describe("create doctor spesialist", () => {
    test("should return message", async() =>{
        const response = await request(app).post("/doctorspe").send({
            specilization: "test",
        })
        expect(response.statusCode).toBe(200);
    })
})


afterAll(async() => {
    await thisDb.sequelize.close()
})