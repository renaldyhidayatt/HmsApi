const request = require('supertest');
const app = require("../server")
const db = require("../database/models");


let thisDb = db

beforeAll(async () => {
    jest.setTimeout(30000);
    await thisDb.sequelize.sync({ force: true })
})


describe("create appointment", () => {
    test("should return message Create Appointment", async () => {
        const response = await request(app)
            .post("/appointment")
            .send({
                doctorSpecialization: "test",
                consultancyFees: "test",
                appointmentDate: "test",
                appointmentTime: "12.08",
                userStatus: "oke",
                UserId: 1,
                DoctorId: 1,
                doctorStatus: "lifetime",
            })
        expect(response.statusCode).toBe(200);
    })
})

describe("GetAll Appointment", () => {
    test("should return statuscode 200 All Appointment ", async () => {
        const response = await request(app)
            .get("/appointment")
        expect(response.statusCode).toBe(200);
    })
})

describe("GetById appointment", () => {
    test("should return statuscode 200 Get Appointment", async () => {
        const response = await request(app)
            .get("/appointment/1")
        expect(response.statusCode).toBe(200);
    })
})

describe("Update appointment", () => {
    test("should return statuscode 200 Update Appointment", async () => {
        const response = await request(app)
            .post("/appointment/1")
            .send({
                doctorSpecialization: "test",
                consultancyFees: "test",
                appointmentDate: "test",
                appointmentTime: "12.08",
                userStatus: "oke",
                UserId: 1,
                DoctorId: 1,
                doctorStatus: "lifetime",
            })
            expect(response.statusCode).toBe(200);
        })
})

describe("Delete", () => {
    test("should return statuscode 200 Delete Appointment", async () => {
        const response = await request(app)
            .delete("/appointment/1")
        expect(response.statusCode).toBe(200);
    })
})

afterAll(async() => {
    await thisDb.sequelize.close()
})