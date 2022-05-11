import { server } from "../server.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

describe("Teacher Endpoints", () => {
  it("POST /deleteTeacher should delete a teacher", async () => {
    // add new teacher
    await requestWithSupertest.post("/addTeacher").send({
        "id": 100333,
        "name": "Pasindu Fernando",
        "age": 45
    });

    // delete Teacher
    await requestWithSupertest.post("/deleteTeacher").send({
        "id": 100333
    });

    const res = await requestWithSupertest.get("/listTeachers");
    expect(res.status).toEqual(200);
    let body = res.body;
    
    expect(body).not.toContainEqual({
        "id": 100333,
        "name": "Pasindu Fernando",
        "age": 45
    });
  });
});