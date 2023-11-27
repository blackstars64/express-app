const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    /** mon code pour le test */
    const response = await request(app).get("/api/movies");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("return 1 movie", async () => {
    /** mon code pour le test */
    const response = await request(app).get("/api/movies/1");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
  it("should'd return movie", async () => {
    const response = await request(app).get("/api/movies/0");
    expect(response.status).toEqual(404);
  });
});