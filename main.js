var date = new Date();
var heure =date.getHours();
var minute=date.getMinutes();
var seconde=date.getSeconds();

const f = function() {
if(seconde<59)
seconde++;
else
{minute++;seconde=00;}
if(minute>59)
{heure++;minute=0;}
document.getElementById("horloge").textContent=heure+":"+minute+":"+seconde;
setInterval(ff, 1000);

}
setInterval(f, 1000);

