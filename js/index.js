const CodeInBytes = document.getElementById("CodeInBytes")
const passedOrFailed = document.getElementById("passedOrFailed")
const areaTxt = document.getElementById("areaTxt")
const time = document.getElementById("runTime")
const lines = document.getElementById("totalOfLines")

function search() {
    validation()
    runTime()
    totalOfLines()
};

function elementByte() {
    areaTxt.addEventListener('input', () => {
        const bytes = encodeURI(areaTxt.value).split(/%.|./).length - 1;
        CodeInBytes.innerHTML = `${bytes} byte `
    });
};

function validation() {
    try{
        eval(areaTxt.value);
        passedOrFailed.innerHTML = `Codigo Válido!`
    } catch (err) {
        passedOrFailed.innerHTML = `Codigo inválido!`
    }
};
//?
function runTime() {
    // let t0 = performance.now(areaTxt.value);
    // let t1 = performance.now();
    // var tempo = (t0 - t1)
    // console.log(tempo)
    console.time(areaTxt.value);
    console.timeEnd(areaTxt.value)
    time.innerHTML = `Este código levou : ${tempo}, milissegundos.`
};

function totalOfLines() {
    let linhas = areaTxt.value.split('\n');
    return linhas.length,
    lines.innerHTML = `${linhas.length} line`
};