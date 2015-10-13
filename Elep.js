/**
 * Created by Jakub Lewera on 2015-10-12.
 */
function drawElephant() {

 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");

 // tlo
 var gradient=ctx.createLinearGradient(0,0,0,400);
 gradient.addColorStop(0,"blue");
 gradient.addColorStop(1,"white");
 ctx.fillStyle=gradient;
 ctx.fillRect(0,0,500,400);
 ctx.fillStyle="#EFDD6F";
 ctx.fillRect(0,400,500,100);

 // tulow
 ctx.fillStyle="#FFA5D2";
 ctx.beginPath();
 ctx.moveTo(200,300);
 ctx.bezierCurveTo(200,400,400,400,400,300);
 ctx.moveTo(200,300);
 ctx.bezierCurveTo(200,200,400,200,400,300);
 ctx.fill();

 //ogon
 ctx.moveTo(400,300);
 ctx.bezierCurveTo(400,300,430,320,440,380);
 ctx.bezierCurveTo(438,370,430,300,395,270);
 ctx.fill();

 //uszy
 ctx.fillStyle="#FFA5D2";
 ctx.moveTo(190,210);
 ctx.bezierCurveTo(190,210,195,170,250,195);
 ctx.bezierCurveTo(250,195,260,260,190,300);
 ctx.fill();

 //glowa
 ctx.fillStyle="#FFA5D2";
 ctx.moveTo(230,250);
 ctx.arc(175,250,55,0,Math.PI,true);

 //traba
 ctx.bezierCurveTo(120,300,140,350,90,375);
 ctx.bezierCurveTo(75,375,100,415,105,405);
 ctx.bezierCurveTo(105,405,200,350,190,300);
 ctx.lineTo(200,290);
 ctx.fill();


 //nogi
 ctx.moveTo(200,300);
 ctx.rect(210,300,40,100);
 ctx.rect(350,300,40,100);
 ctx.fill();



 //oczy lub oko...
 ctx.beginPath();
 ctx.fillStyle="#ffffff";
 ctx.moveTo(155,240);
 ctx.arc(145,240,10,0,Math.PI*2,true);
 ctx.fill();
 ctx.fillStyle="#000000";
 ctx.beginPath();
 ctx.moveTo(147,240);
 ctx.arc(142,240,5,0,Math.PI*2,true);
 ctx.fill();

 //palce
 ctx.beginPath();
 ctx.fillStyle="#FFFFF0";
 ctx.moveTo(210,400);
 ctx.arc(210,400,10,0,Math.PI*1.5,true);
 ctx.moveTo(350,400);
 ctx.arc(350,400,10,0,Math.PI*1.5,true);
 ctx.stroke();
 ctx.fill();

 //kly
 ctx.beginPath();
 ctx.fillStyle="#FFFFF0";
 ctx.moveTo(190,300);
 ctx.bezierCurveTo(180,300,120,325,70,330);
 ctx.bezierCurveTo(72,323,120,315,180,280);
 ctx.stroke();
 ctx.fill();

 //Slonce
 ctx.beginPath();
 ctx.fillStyle="#FDB813";
 ctx.moveTo(500,100);
 ctx.arc(425,100,75,0,Math.PI*2,true);
 ctx.fill();

}
