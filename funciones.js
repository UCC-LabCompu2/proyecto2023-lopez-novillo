/**
 * Convierte unidades entre metros, pulgadas, pies y yardas.
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingresa el usuario
 */

 validacion = () => {                   //valida que el nombre y la edad esten bien
    var nombre=document.getElementById("nom").value; 
    var edad=document.getElementById("eda").value;
    if(nombre === ""){
        alert("Ingresar el nombre");  // si el campo esta vacio alerta para que se complete
        return false;

    }
    if(!isNaN(nombre)){                 // si es un numero alerta para que se escriba bien
        alert("El nombre no puede ser numero");
        document.getElementById("nom").value = "";
        return false;
    }

    if(edad===""){
        alert ("Ingrese la edad");// si el campo esta vacio alerta para que se complete
        return false;
    }
    if(edad>=100){
        alert("Ingrese una edad valida");
        document.getElementById("eda").value = "";
        return false;
    }

    if(isNaN(edad)){
        alert("La edad no puede estar en letras");// si es una letra alerta para que se escriba bien
        document.getElementById("eda").value = "";
        return false;
    }
  
    return true;

   


}
canciones =() =>{      //esta funcion realiza las distintas combinaciones para recomendar la mejor cancion
    var generoM=document.getElementById("genero").value;
    var estado=document.getElementById("estado").value;
    var cambio=document.getElementById("cambio").value;

    console.log(generoM);
    console.log(estado);
    console.log(cambio);

    if (validacion()===false){ //verifica que los campos esten bien completados antes de arrancar
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

   
function animacion() {  //realiza el primer canva cuando se toca el boton "comenzar"
    //obtiene el canvas y su contexto
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image(); //se crea el objeto image para cargar la imagen
    img.src = "Fotos/start.png"; //ruta
    
    // el evento onload se ejecuta cuando la imagen se carga correctamente
    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas en cada cuadro de animación
        ctx.drawImage(img, 550, 100);//dibuja la imagen en esas coordenadas
    };
    
}

function startAnimacion(){
    // Verifica las condiciones y asigna una imagen correspondiente
    var genero = document.getElementById("genero").value;
    var imgElement = document.getElementById("img");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    if (genero === "rock") {
      imgElement.src = "Fotos/rock.jpg";
    } else if (genero === "trap") {
      imgElement.src = "Fotos/trap.jpg";s
    } else if (genero === "tecno") {
      imgElement.src = "Fotos/Cattaneo.jpg";
    } else if (genero === "rockn") {
        imgElement.src = "Fotos/rock_nacional.jpg";
    } 
    console.log( "generoselec: " + genero);

    imgElement.classList.add("animacion");
    var xPos = 0;
    var yPos = 0;
    var velocidadX=1;

    function animacion2() {
        // borra el contenido de antes
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var img = new Image();
        img.src=imgElement.src;
    
        ctx.drawImage(img, xPos, yPos, 70, 70); 
    
        xPos += velocidadX; 
    
        // Si la imagen sale del canvas, reinicia su posición
        if (xPos > canvas.width) {
          xPos = -100; // Reinicia la posición para que vuelva a aparecer desde la izquierda
        }
    
        
        requestAnimationFrame(animacion2);
    }

    animacion2();

}

    
