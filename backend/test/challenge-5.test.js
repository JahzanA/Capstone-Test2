import { server } from "../server.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

describe("Student Endpoints", () => {

    it("POST /addStudent should show a newly added student", async () => {
      // add new student
      await requestWithSupertest.post("/addStudent").send({
        "id": 20033,
        "name": "Rashini Shehara",
        "age": 12,
        "religion": "Buddhist"
    });
  
      const res = await requestWithSupertest.get("/listStudents");
      expect(res.status).toEqual(200);
      let body = res.body;
      
      expect(body).toContainEqual({
        "id": 20033,
        "name": "Rashini Shehara",
        "age": 12,
        "religion": "Buddhist"
    });
    });
  

  });