/**
 * Convierte unidades entre metros, pulgadas, pies y yardas.
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingresa el usuario
 */

validacion = () => {
    var nombre=document.getElementById("nom").value;
    var edad=document.getElementById("eda").value;
    if(nombre === ""){
        alert("Ingresar el nombre");
        return false;

    }
    if(!isNaN(nombre)){
        alert("El nombre no puede ser numero");
        document.getElementById("nom").value = "";
        return false;
    }

    if(edad===""){
        alert ("Ingrese la edad");
        return false;
    }

    if(isNaN(edad)){
        alert("La edad no puede estar en letras");
        document.getElementById("eda").value = "";
        return false;
    }
  
    return true;

    document.getElementById("nom").value = "";
    document.getElementById("eda").value = "";


}

canciones =() =>{
    var generoM=document.getElementById("genero").value;
    var estado=document.getElementById("estado").value;
    var cambio=document.getElementById("cambio").value;

    console.log(generoM);
    console.log(estado);
    console.log(cambio);

    if (validacion()===false){
        return;
    }

    if(generoM==="rock" && estado==="Feliz" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=8AHCfZTRGiI");
    
    }

    if(generoM==="rock" && estado==="Feliz" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=i6RZY4Ar3fw&list=RDi6RZY4Ar3fw&start_radio=1");
    
    }

    if(generoM==="rock" && estado==="Triste" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=-nn1veyAgDQ");
    
    }

    if(generoM==="rock" && estado==="Triste" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=8AHCfZTRGiI");
    }

    if(generoM==="rockn" && estado==="Feliz" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=1Zjm0uh8oeA");
    
    }

    if(generoM==="rockn" && estado==="Feliz" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=u4viftk6vBw");
    
    }

    if(generoM==="rockn" && estado==="Triste" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=u4viftk6vBw");
    
    }

    if(generoM==="rockn" && estado==="Triste" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=1Zjm0uh8oeA");
    
    }

    if(generoM==="trap" && estado==="Feliz" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=yzlzqYD3vRA");
    
    }

    if(generoM==="trap" && estado==="Feliz" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=yYVCf-y2YmE");
    
    }

    if(generoM==="trap" && estado==="Triste" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=yYVCf-y2YmE");
    
    }

    if(generoM==="trap" && estado==="Triste" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=yzlzqYD3vRA");
    
    }

    if(generoM==="tecno" && estado==="Feliz" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=8AHCfZTRGiI");
    
    }

    if(generoM==="tecno" && estado==="Feliz" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=8AHCfZTRGiI");
    
    }

    if(generoM==="tecno" && estado==="Triste" && cambio==="Si"){
        window.open("https://www.youtube.com/watch?v=8AHCfZTRGiI");
    
    }

    if(generoM==="tecno" && estado==="Triste" && cambio==="No"){
        window.open("https://www.youtube.com/watch?v=8AHCfZTRGiI");
    
    }
}
   
function animacion() {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "Fotos/start.png";
    

    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas en cada cuadro de animación
        ctx.drawImage(img, 550, 100);
    };
    
}

const dx = 2;
let x = 0;
function cargarWeb() {
    const canvas = document.getElementById("loadCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = new Image();

    img.onload = function () {
      ctx.drawImage(img, x, 100);
    };

    img.src = "Fotos/descarga.png"; // Asegúrate de que la ruta de la imagen sea correcta

    if (x > canvas.width) {
      x = 0;
    }

    x += dx;
  }

    
