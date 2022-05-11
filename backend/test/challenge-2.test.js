import { server } from "../server.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

describe("Teacher Endpoints", () => {
  it("POST /addTeacher should show a newly added teacher", async () => {
    // add new teacher
    await requestWithSupertest.post("/addTeacher").send({
        "id": 10033,
        "name": "Nilanthi Fernando",
        "age": 42
    });

    const res = await requestWithSupertest.get("/listTeachers");
    expect(res.status).toEqual(200);
    let body = res.body;
    
    expect(body).toContainEqual({
        "id": 10033,
        "name": "Nilanthi Fernando",
        "age": 42
    });
  });
});