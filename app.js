//console.log('hola');

//Control de flujo
//if /else

const age = 18;
//let card;
const card = true;

/*
if(age >= 18){
    console.log('Eres mayor de edad');

}else{
    console.log(' No eres mayor de edad');

}


//Doble condicion
if(age >= 18 && card == true){
    console.log('Puedes manejar');
} else{
    console.log('No puedes manejar');
}

/*

/////////
const value1 = true;
let value2 = true;



const value10 = 0;
value10 = 20;

*/
// Condicion ya mas completo
// bebe, niño , adolescente , adulto , anciano.


if(age >= 0 && age < 3){
    console.log('Eres bebito')
}else if(age >= 3 && age < 12){
    console.log('Eres niño')
} 

/* Realizar un horoscopo de consola.
   Datos de entrada
   Proceso
   Dato de salida

   dato de entrada ( dia de cumpleaños, mes de cumpleaños)
   happy path ( 09 )
*/

function cumpleaños(dia, mes){
    if(dia >=21 && mes==01 || dia <=19 && mes==02){
        console.log('Su signo es Acuario');
    }
    else if(dia >=20 && mes==02 || dia <= 20 && mes==03){
        console.log('Su signo es Piscis');
    }
    else if(dia >=21 && mes==04 || dia <=20 && mes==05 ){
        console.log('Su signo es Tauro');
    }
    else if(dia >=21 && mes==05 || dia <= 21 && mes==06){
        console.log('Su signo es Geminis');
    }
    else if(dia >=22 && mes==06 || dia <=21 && mes==07){
        console.log('Su signo es Cáncer');
    }
    else if(dia >=22 && mes==07 || dia <= 23 && mes==08){
        console.log('Su signo es Leo');
    }
    else if(dia >=24 && mes==08 || dia <=23 && mes==09){
        console.log('Su signo es Libra');
    }
    else if(dia >=24 && mes==09 || dia <=23 && mes==10){
        console.log('Su signo es Libra');
    }
    else if(dia >=24 && mes==10 || dia <= 22 && mes==11){
        console.log('Su signo es Escorpio');
    }
    else if(dia >= 23 && mes==11 || dia <= 21 && mes==12){
        console.log('Su signo es Sagitario');
    }
    else if(dia >= 22 && mes==12 || dia <=20 && mes==01){
        console.log('Su signo es Capricornio');
    }

}
