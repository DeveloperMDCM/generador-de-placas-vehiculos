
var NumberRandom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
var container = document.querySelector(".container");
var d ="";
var len = 0;
d3.text("dataset_placas.csv", function (data) {
  var parsedCSV = d3.csv.parseRows(data);
d  = [parsedCSV];
 len = parsedCSV.length
console.log(parsedCSV)
console.log(len)
});
const StartGame = () => { //funcion QUE INICIA el cargue de imagenes
  for (var i = 1; i < len; i++) {
    var div = document.createElement("img");
    container.appendChild(div);
    div.style.width = `${700}` + `px`;	//`${i}px`
    div.style.height = `${200}` + `px`; //`${i}px`
    div.style.margin = `${20}` + `px`; //`${i}px`
    div.setAttribute("class", `div`);
    div.setAttribute("src", `https://matriculasdelmundo.com/gCOL1.php?textCOL1=${d[0][i]}&textCOL10=COLOMBIA`); 
    
  }
}
