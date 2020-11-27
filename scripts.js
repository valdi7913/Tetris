//import { element } from 'src/utils';
//const BODY = document.querySelector('body');
//const h1 = element('h1',{},{},"hello world");
//const canv = element('canvas', {'id': 'canv', 'width': '300', 'height': '600' }, {}, {});
//BODY.appendChild(h1);
//BODY.appendChild(canv);
window.onload = function() {
    canv = document.querySelector('#canv');
    ctx = canv.getContext('2d');
    document.addEventListener('keydown', keyPush);
    setInterval(game, 1000/60);
}

function board() {
    this.xgrid = 30;
    this.ygrid = 60;
    this.matrix = math.zeros(10,20);
    this.drawgrid = function() {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 0.3;
        // Horizontal
        for (let i = 1; i < 21; i++) {
            ctx.beginPath();
            ctx.moveTo(0,i/2*this.ygrid);
            ctx.lineTo(canv.width,i/2*this.ygrid);
            ctx.stroke();
        }
        // Verical
        for (let i = 1; i < 11; i++) {
            ctx.beginPath();
            ctx.moveTo(i*this.xgrid,0);
            ctx.lineTo(i*this.xgrid, canv.height);
            ctx.stroke();
        }
    }
}
B = new board();
console.log(B.matrix)
function game() {
B.drawgrid();
}

function keyPush(e) {
switch(e.keyCode){
    case 37:    
        console.log('Left');
    break

    case 38: 
        console.log('Up');
    break    

    case 39:
        console.log('Right');
    break

    case 40:
        console.log('Down'); 
    break
}
}