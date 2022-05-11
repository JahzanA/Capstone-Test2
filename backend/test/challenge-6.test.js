import { server } from "../server.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

describe("Student Endpoints", () => {  
    it("POST /deleteStudent should delete a student", async () => {
      // add new teacher
      await requestWithSupertest.post("/addStudents").send({
        "id": 20033,
        "name": "Rashini Shehara",
        "age": 12,
        "religion": "Buddhist"
    });
  
      // delete Student
      await requestWithSupertest.post("/deleteStudent").send({
          "id": 20033
      });
  
      const res = await requestWithSupertest.get("/listStudents");
      expect(res.status).toEqual(200);
      let body = res.body;
      
      expect(body).not.toContainEqual({
        "id": 20033,
        "name": "Rashini Shehara",
        "age": 12,
        "religion": "Buddhist"
    });
    });
  });