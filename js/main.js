const CodeInBytes = document.getElementById("CodeInBytes");
const passedOrFailed = document.getElementById("passedOrFailed");
const areaTxt = document.getElementById("areaTxt");
const time = document.getElementById("runTime");
const lines = document.getElementById("totalOfLines");

function elementByte() {
    const bytes = encodeURI(areaTxt.value).split(/|/).length;
    CodeInBytes.innerHTML = `${bytes} byte `
    validation()
    runTime()
    totalOfLines()
};

function validation() {
    try{
        eval(areaTxt.value)
        passedOrFailed.innerHTML = `Codigo Válido!`
    } catch (err) {
        passedOrFailed.innerHTML = `Codigo inválido!`
    }
};

function runTime() {
    let inicio = performance.now()
    areaTxt.value
    let fim = performance.now()
    time.innerHTML = `Este código levou : ${fim - inicio}, milissegundos.`

    console.time("Meu timer")
    areaTxt.value
    console.timeEnd("Meu timer")
};

function totalOfLines() {
    let linhas = areaTxt.value.split('\n')
    return linhas.length,
    lines.innerHTML = `${linhas.length} line`
};