var t4Styles = document.documentElement;
var caixa = document.getElementById('caixa');
var body = document.getElementsByTagName('body')[0];

var larguraCaixa = caixa.offsetWidth;
var alturaCaixa = caixa.offsetHeight;

var larguraBody = body.offsetWidth;
var alturaBody = body.offsetHeight;

var limitadorLargura = larguraBody - larguraCaixa - 10;
var limitadorAltura = alturaBody - alturaCaixa - 10;

var margemLargura = larguraCaixa;
var margemAltura = alturaCaixa;

var novaLargura = 0
var novaAltura = 0

var imgTinhu = document.getElementById('tinhu');

function aceitou() {
    imgTinhu.style.display = 'flex';
    imgTinhu.style.opacity = '1';
    setTimeout(function () {
        imgTinhu.style.width = '100%';
        setTimeout(function () {
            window.location.href = "https://api.whatsapp.com/send?phone=5551993275592&text=ol%C3%A1%2C%20belo%20damo%2C%20seu%20convite%20foi%20aceito";
        }, 1500)
    }, 250)
}



function reposicionar() {
    novaLargura = Math.floor(Math.random() * (10 - limitadorLargura) + limitadorLargura);
    novaAltura = Math.floor(Math.random() * (10 - limitadorAltura) + limitadorAltura);

    caixa.style.left = novaLargura + 'px';
    caixa.style.top = novaAltura + 'px';
}