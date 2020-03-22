const Operation = require("src/app/Operation");

class GetAllPiadas extends Operation {
  constructor({ piadasRepository }) {
    super();
    this.piadasRepository = piadasRepository;
  }

  async execute() {
    const { SUCCESS, ERROR } = this.outputs;

    try {
      const piadas = await this.piadasRepository.getAll({
        attributes: ["piada", "origem"]
      });

      this.emit(SUCCESS, piadas);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
}

GetAllPiadas.setOutputs(["SUCCESS", "ERROR"]);

module.exports = GetAllPiadas;
