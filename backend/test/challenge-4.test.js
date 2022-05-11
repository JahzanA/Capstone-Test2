import { server } from "../server.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

describe("Student Endpoints", () => {
    it("GET /listStudents should show all students", async () => {
      const res = await requestWithSupertest.get("/listStudents");
      expect(res.status).toEqual(200);
      let body = res.body;
      expect(body.length).toEqual(3);
      body.forEach(element => {
          expect(element).toHaveProperty('ageeee');
          expect(element).toHaveProperty('nameeee');
          expect(element).toHaveProperty('iddddd');
          expect(element).toHaveProperty('religionnnnn');
      });
    });
  
  });