let Crawler = require("crawler");
let basePiadas = require("./base-piadas.json");
var fs = require("fs");

let crawler = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      let $ = res.$;
      // $ is Cheerio by default
      //a lean implementation of core jQuery designed specifically for the server
      let atual = $(".piada").text();

      if (typeof basePiadas.curtas === "object") {
        console.log("adicionando piada: ", atual);
        basePiadas.curtas.push(atual);
        let json = JSON.stringify(basePiadas);
        fs.writeFile("base-piadas.json", json, "utf8", function() {});
      }
    }
    done();
  }
});

// crawler.queue('https://www.piadasnet.com/piada1936curtas.htm')

for (let index = 0; index < 8; index++) {
  const primeiraPiada = 1936 - 55;
  crawler.queue(
    "https://www.piadasnet.com/piada" + (primeiraPiada + index) + "curtas.htm"
  );
}
