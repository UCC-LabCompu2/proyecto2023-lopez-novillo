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
        return false;
    }

    if(isNaN(edad)){
        alert("Ingrese edad en numeros");
    }
    if(edad===""){
        alert ("Ingrese la edad");
    }

    document.getElementById("nom").value = "";
    document.getElementById("eda").value = "";

    
    return true;

}

canciones =() =>{
    var generoM=document.getElementById("genero").value;
    var estado=document.getElementById("estado").value;
    var cambio=document.getElementById("cambio").value;

    console.log(generoM);
    console.log(estado);
    console.log(cambio);

    if(generoM==="rock" && estado==="Feliz" && cambio==="Si"){
        window.open("AcercaDe.html");
    
    }

    
}