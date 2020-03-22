const { expect } = require("chai");
const GetAllPiadas = require("src/app/piadas/GetAllPiadas");

describe("App :: User :: GetAllPiadas", () => {
  var getAllPiadas;

  context("when query is successful", () => {
    before(() => {
      const MockUsersRepository = {
        getAll: () => Promise.resolve("Imagine all the piadas...")
      };

      getAllPiadas = new GetAllPiadas({
        piadasRepository: MockUsersRepository
      });
    });

    it("emits SUCCESS with all the piadas", done => {
      getAllPiadas.on(getAllPiadas.outputs.SUCCESS, response => {
        expect(response).to.equal("Imagine all the piadas...");
        done();
      });

      getAllPiadas.execute();
    });
  });

  context("when there is an internal error", () => {
    before(() => {
      const MockUsersRepository = {
        getAll: () => Promise.reject(new Error("Failed"))
      };

      getAllPiadas = new GetAllPiadas({
        piadasRepository: MockUsersRepository
      });
    });

    it("emits ERROR with the error", done => {
      getAllPiadas.on(getAllPiadas.outputs.ERROR, response => {
        expect(response.message).to.equal("Failed");

        done();
      });

      getAllPiadas.execute();
    });
  });
});
