const request = require('supertest');
const app = require("../server")
const db = require("../database/models");


let thisDb = db

beforeAll( async() => {
    jest.setTimeout(30000);
    await thisDb.sequelize.sync({ force: true })
})


describe("create doctor", () => {
    test("should return message Create Doctor", async () => {
        const response = await request(app)
            .post("/doctor")
            .send({
                doctorName: "test",
                specilization: "test",
                address: "test",
                docFees: "test",
                contactno: "12.08",
                docEmail: "oke",
            })
        expect(response.statusCode).toBe(200);
    })
})

describe("get all doctor", () => {
    test("should return statuscode 200 Get Doctor All", async () => {
        const response = await request(app)
            .get("/doctor")
        expect(response.statusCode).toBe(200);
    })
})

describe("get doctor by id", () => {
    test("should return statuscode 200 Get Doctor", async () => {
        const response = await request(app)
            .get("/doctor/1")
        expect(response.statusCode).toBe(200);
    })
})

describe("update doctor", () => {
    test("should return statuscode 200 Update Doctor", async () => {
        const response = await request(app)
            .post("/doctor/1")
            .send({
                doctorName: "test",
                specilization: "test",
                address: "test",
                docFees: "test",
                contactno: "12.08",
                docEmail: "oke",
            })
        expect(response.statusCode).toBe(200);
    })
})

describe("delete doctor", () => {
    test("should return statuscode 200 Delete Doctor", async () => {
        const response = await request(app)
            .delete("/doctor/1")
        expect(response.statusCode).toBe(200);
    })
})

afterAll(async() => {
    await thisDb.sequelize.close()
})