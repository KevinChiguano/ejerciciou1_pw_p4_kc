let puntaje = 0;
let intentos = 0;

const reiniciar = () => {
    let textoInicial = document.getElementById('idTextoInicial');
    let respuesta = document.getElementById('idRespuesta')
    let imagen = document.getElementById('idImagen');
    let txtIntentos = document.getElementById('idIntento');
    let txtPuntaje = document.getElementById('idPuntaje')

    respuesta.innerHTML = ""
    imagen.src = "../img/pnegro.jpg";

    txtIntentos.innerHTML = 'Intentos: 0';
    txtPuntaje.innerHTML = 'Puntaje: 0';

    puntaje = 0;
    intentos = 0;
}

const seleccionarBotonUno = () => {
    let boton = document.getElementById('idIncUno');
    seleccion(boton)
}

const seleccionarBotonDos = () => {
    let boton = document.getElementById('idIncDos');
    seleccion(boton)
}

const seleccionarBotonTres = () => {
    let boton = document.getElementById('idIncTres');
    seleccion(boton)
}

const seleccionarBotonCuatro = () => {
    let boton = document.getElementById('idCorrecto');
    seleccion(boton)
}

const seleccion = (boton) => {

    let textoInicial = document.getElementById('idTextoInicial');
    let respuesta = document.getElementById('idRespuesta');
    let imagen = document.getElementById('idImagen');
    let txtIntentos = document.getElementById('idIntento');
    let txtPuntaje = document.getElementById('idPuntaje');

    intentos = intentos+1;
    console.log(intentos)

    if(intentos===3 && boton.textContent != 'excadrill'){
        txtIntentos.innerHTML = 'Intentos: '+intentos;
        intentos=0;
        puntaje=0;
        reiniciar();
    }else{

        if (boton.textContent === 'excadrill') {
            respuesta.innerHTML = "Felicitaciones, has seleccionado la opción correcta";
            respuesta.style.background = 'blue';
            respuesta.style.border = 'solid';
            respuesta.style.fontFamily = "'Times New Roman', Times, serif'";
            imagen.src = "../img/pcolor.jpg";


            txtPuntaje.innerHTML = 'Puntaje: '+puntajeObtenido(intentos);

        } else {
            respuesta.innerHTML = "Pokémon incorrecto, intentalo nuevamente";
            respuesta.style.background = 'none';
            respuesta.style.border = 'none';
            respuesta.style.fontFamily = "'Times New Roman', Times, serif'";            
        }
        txtIntentos.innerHTML = 'Intentos: '+intentos;

    }
    
}

const puntajeObtenido = (intentos)=>{
    if(intentos===1){
        return 5;
    }else if(intentos===2){
        return 3;
    }else{
        return 1;
    }
}
