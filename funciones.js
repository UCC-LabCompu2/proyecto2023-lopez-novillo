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
    
    animacion =() =>{
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "Fotos/n2.png";

    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas en cada cuadro de animación
        ctx.drawImage(img, 100, 100);
    };

    }

    var genero = document.getElementById("genero");
    var verificarBtn = document.getElementById("verificarBtn");
    var imgElement = document.getElementById("img");

    function verificarEntrada(){
        var entrada = entradaInput.value; 

        // Verifica las condiciones y asigna una imagen correspondiente
        if (entrada === "rock") {
          imgElement.src = "Fotos/rhcp.jfif";
        } else if (entrada === "trap") {
          imgElement.src = "Fotos/duki.jpeg";
        } else if (entrada === "tecno") {
          imgElement.src = "imagen3.jpg";
        } else {
          imgElement.src = ""; // Si no cumple ninguna condición, no asigna una imagen
        }
      
    }

    verificarBtn.addEventListener("click", verificarBtn);


    var canvasa = document.getElementById("canvas");
    var ctx = canvasa.getContext("2d");
    var image= new Image();
    image.src = "Fotos/duki.jpeg";

    function startanimation(){
        var position=0;

        function animate (){
            position = (position + 1)% canvasa.width;

            //borra contenido anterior
            ctx.clearRect(0,0,canvasa.width,canvasa.height);

            //dibuja img fondo repetidia

            for( var i=-1; i<=canvasa.width / image.width + 1;i++){
                ctx.drawImage(image, i*image.width-position,0);
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

    
