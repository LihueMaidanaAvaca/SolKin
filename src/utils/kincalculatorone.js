import switchTone from "./switchTone";

function cuentaPorFavor(nacimiento) {  
  let tabla1 = 0;
  let tabla2 = 0;
  
  switch (nacimiento[1]) {
  case 1:
    tabla1 = nacimiento[0]+54;
    break;
  case 2:
    tabla1 = nacimiento[0]+85;
    break;
  case 3:
    tabla1 = nacimiento[0]+113;
    break;
  case 4:
    tabla1 = nacimiento[0]+144;
    break;
  case 5:
    tabla1 = nacimiento[0]+174;
    break;
  case 6:
    tabla1 = nacimiento[0]+206;
    break;
  case 7:
    tabla1 = nacimiento[0]+236; 
    break;
  case 8:
    tabla1 = nacimiento[0]+6;
    break;
  case 9:
    tabla1 = nacimiento[0]+37;
    break;
  case 10:
    tabla1 = nacimiento[0]+67;
    break;   
  case 11:
    tabla1 = nacimiento[0]+98;
    break;
  case 12:
    tabla1 = nacimiento[0]+128;
    break;
  default:
    tabla1 = 'Lo lamentamos, por el momento no disponemos de ' + nacimiento[1] + '.';
}

    return tabla1
}

cuentaPorFavor([28,4])

function antesAhiDespues(año){
let trueYear = 0

if (año < 1957){
  do {
  año += 52;
  } while (año < 1957);
  trueYear = año
} else if(año >= 2009){
  do {
  año -= 52;
  } while (año > 2009);
  trueYear = año
} else {
  trueYear = año
}

let key = (trueYear-1957).toString().split('')

if(key.length === 1){
    key.unshift('0')      
  }

let unit = parseInt(key[1]);
let tens = parseInt(key[0])*10

if (unit === 0){
    return parseInt(tens + 3)
  } else if (unit === 1){
    return parseInt(tens + 108)
  } else if (unit === 2){
    return parseInt(tens + 213)
  } else if (unit === 3){
    return parseInt(tens + 58)
  } else if (unit === 4){
    return parseInt(tens + 163)
  } else if (unit === 5){
    return parseInt(tens + 8)
  } else if (unit === 6){
    return parseInt(tens + 113)
  } else if (unit === 7){
    return parseInt(tens + 218)
  } else if (unit === 8){
    return parseInt(tens + 63)
  } else if (unit === 9){
    return parseInt(tens + 168)
  } 
}

antesAhiDespues(1967)

function kin(año, fecha){
let kinMaya = año+fecha

if(kinMaya > 260){
  kinMaya -= 260
}

let sello = kinMaya 

  do {
  sello -= 20;
  } while (sello >= 20);

let tono = kinMaya

  do {
  tono -= 13;
  } while (tono > 13);

let selloSolar = ''

switch(sello){
    case 0:
    selloSolar = 'Sol';
    break;
    case 1:
    selloSolar = 'Dragon';
    break;
    case 2:
    selloSolar = 'Viento';
    break;
    case 3:
    selloSolar = 'Noche';
    break;
    case 4:
    selloSolar = 'Semilla';
    break;
    case 5:
    selloSolar = 'Serpiente';
    break;
    case 6:
    selloSolar = 'Muerte/Enlazador de Mundos';
    break;
    case 7:
    selloSolar = 'Mano';
    break;
    case 8:
    selloSolar = 'Estrella';
    break;
    case 9:
    selloSolar = 'Luna';
    break;
    case 10:
    selloSolar = 'Perro';
    break;
    case 11:
    selloSolar = 'Mono';
    break;
    case 12:
    selloSolar = 'Humano';
    break;
    case 13:
    selloSolar = 'Caminante del Cielo';
    break;
    case 14:
    selloSolar = 'Mago';
    break;
    case 15:
    selloSolar = 'Aguila';
    break;
    case 16:
    selloSolar = 'Guerrero';
    break;
    case 17:
    selloSolar = 'Tierra';
    break;
    case 18:
    selloSolar = 'Espejo';
    break;
    case 19:
    selloSolar = 'Tormenta';
    break;
  default: 'que onda'
}

let tonoLunar = ''

switch(tono){
  case 1:
    tonoLunar = 'Magnetico';
    break;
  case 2:
    tonoLunar = 'Lunar/Polar';
    break;
  case 3:
    tonoLunar = 'Electrico';
    break;
  case 4:
    tonoLunar = 'Auto-Existente';
    break;
  case 5:
    tonoLunar = 'Entonado';
    break;
  case 6:
    tonoLunar = 'Ritmico';
    break;
  case 7:
    tonoLunar = 'Resonante';
    break;
  case 8:
    tonoLunar = 'Galactico';
    break;
  case 9:
    tonoLunar = 'Solar';
    break;
  case 10:
    tonoLunar = 'Planetario';
    break;
  case 11:
    tonoLunar = 'Espectral';
    break;
  case 12:
    tonoLunar = 'Cristal';
    break;
  case 13:
    tonoLunar = 'Cosmico';
    break;  
  default: 'onda que'  
}

let tonoOculto = 14 - tono;

switch(tonoOculto){
  case 1:
    tonoOculto = 'Magnetico';
    break;
  case 2:
    tonoOculto = 'Lunar/Polar';
    break;
  case 3:
    tonoOculto = 'Electrico';
    break;
  case 4:
    tonoOculto = 'Auto-Existente';
    break;
  case 5:
    tonoOculto = 'Entonado';
    break;
  case 6:
    tonoOculto = 'Ritmico';
    break;
  case 7:
    tonoOculto = 'Resonante';
    break;
  case 8:
    tonoOculto = 'Galactico';
    break;
  case 9:
    tonoOculto = 'Solar';
    break;
  case 10:
    tonoOculto = 'Planetario';
    break;
  case 11:
    tonoOculto = 'Espectral';
    break;
  case 12:
    tonoOculto = 'Cristal';
    break;
  case 13:
    tonoOculto = 'Cosmico';
    break;  
  default: 'onda que'  
}

let color = kinMaya

do {
  color -= 4;
  } while (color > 4);

let raza = ''

switch(color){
  case 1:
    raza = 'Rojo';
    break;
  case 2:
    raza = 'Blanco';
    break;
  case 3:
    raza = 'Azul/Negro';
    break;
  case 4:
    raza = 'Amarillo';
    break;
  default: 'onqueda'  
    
}

let onda = 0
let ondaNum = 0
  
if(tono === 1){
  onda = sello
} else 
  ondaNum = (tono-1)-sello
    if(ondaNum < 0){
    onda = ondaNum * -1
    } else {
      onda = ondaNum
    }
  switch(onda){
    case 0:
    onda = 'Sol';
    break;
    case 1:
    onda = 'Dragon';
    break;
    case 2:
    onda = 'Viento';
    break;
    case 3:
    onda = 'Noche';
    break;
    case 4:
    onda = 'Semilla';
    break;
    case 5:
    onda = 'Serpiente';
    break;
    case 6:
    onda = 'Muerte/Enlazador de Mundos';
    break;
    case 7:
    onda = 'Mano';
    break;
    case 8:
    onda = 'Estrella';
    break;
    case 9:
    onda = 'Luna';
    break;
    case 10:
    onda = 'Perro';
    break;
    case 11:
    onda = 'Mono';
    break;
    case 12:
    onda = 'Humano';
    break;
    case 13:
    onda = 'Caminante del Cielo';
    break;
    case 14:
    onda = 'Mago';
    break;
    case 15:
    onda = 'Aguila';
    break;
    case 16:
    onda = 'Guerrero';
    break;
    case 17:
    onda = 'Tierra';
    break;
    case 18:
    onda = 'Espejo';
    break;
    case 19:
    onda = 'Tormenta';
    break;
  default: 'que onda';
}


let oculto = 0;

oculto = 21 - sello;

switch(oculto){
    case 20:
    oculto = 'Sol Amarillo';
    break;
    case 21:
    oculto = 'Dragon Rojo';
    break;
    case 2:
    oculto = 'Viento Blanco';
    break;
    case 3:
    oculto = 'Noche Negra/Azul';
    break;
    case 4:
    oculto = 'Semilla Amarillo';
    break;
    case 5:
    oculto = 'Serpiente Rojo';
    break;
    case 6:
    oculto = 'Muerte/Enlazador de Mundos Blanco';
    break;
    case 7:
    oculto = 'Mano Negra/Azul';
    break;
    case 8:
    oculto = 'Estrella Amarillo';
    break;
    case 9:
    oculto = 'Luna Rojo';
    break;
    case 10:
    oculto = 'Perro Blanco';
    break;
    case 11:
    oculto = 'Mono Negra/Azul';
    break;
    case 12:
    oculto = 'Humano Amarillo';
    break;
    case 13:
    oculto = 'Caminante del Cielo Rojo';
    break;
    case 14:
    oculto = 'Mago Blanco';
    break;
    case 15:
    oculto = 'Aguila Negra/Azul';
    break;
    case 16:
    oculto = 'Guerrero Amarillo';
    break;
    case 17:
    oculto = 'Tierra Rojo';
    break;
    case 18:
    oculto = 'Espejo Blanco';
    break;
    case 19:
    oculto = 'Tormenta Negra/Azul';
    break;
  default: 'que onda';
}

let analogo = 0;
  
analogo = 19 - sello;

switch(analogo){
    case 0:
    analogo = 'Sol Amarillo';
    break;
    case 1:
    analogo = 'Dragon Rojo';
    break;
    case 2:
    analogo = 'Viento Blanco';
    break;
    case 3:
    analogo = 'Noche Negra/Azul';
    break;
    case 4:
    analogo = 'Semilla Amarilla';
    break;
    case 5:
    analogo = 'Serpiente Roja';
    break;
    case 6:
    analogo = 'Muerte/Enlazador de Mundos Blanco';
    break;
    case 7:
    analogo = 'Mano Negra/Azul';
    break;
    case 8:
    analogo = 'Estrella Amarillo';
    break;
    case 9:
    analogo = 'Luna Rojo';
    break;
    case 10:
    analogo = 'Perro Blanco';
    break;
    case 11:
    analogo = 'Mono Negro/Azul';
    break;
    case 12:
    analogo = 'Humano Amarillo';
    break;
    case 13:
    analogo = 'Caminante del Cielo Rojo';
    break;
    case 14:
    analogo = 'Mago Blanco';
    break;
    case 15:
    analogo = 'Aguila Negra/Azul';
    break;
    case 16:
    analogo = 'Guerrero Amarillo';
    break;
    case 17:
    analogo = 'Tierra Rojo';
    break;
    case 18:
    analogo = 'Espejo Blanco';
    break;
    case 19:
    analogo = 'Tormenta Negra/Azul';
    break;
  default: 'que onda';
}

let antipoda = 0

if(sello >= 10){
  antipoda = sello - 10;
} else {
  antipoda = sello + 10;
}

switch(antipoda){
    case 0:
    antipoda = 'Sol Amarillo';
    break;
    case 1:
    antipoda = 'Dragon Rojo';
    break;
    case 2:
    antipoda = 'Viento Blanco';
    break;
    case 3:
    antipoda = 'Noche Negra/Azul';
    break;
    case 4:
    antipoda = 'Semilla Amarilla';
    break;
    case 5:
    antipoda = 'Serpiente Roja';
    break;
    case 6:
    antipoda = 'Muerte/Enlazador de Mundos Blanco';
    break;
    case 7:
    antipoda = 'Mano Negra/Azul';
    break;
    case 8:
    antipoda = 'Estrella Amarillo';
    break;
    case 9:
    antipoda = 'Luna Rojo';
    break;
    case 10:
    antipoda = 'Perro Blanco';
    break;
    case 11:
    antipoda = 'Mono Negro/Azul';
    break;
    case 12:
    antipoda = 'Humano Amarillo';
    break;
    case 13:
    antipoda = 'Caminante del Cielo Rojo';
    break;
    case 14:
    antipoda = 'Mago Blanco';
    break;
    case 15:
    antipoda = 'Aguila Negra/Azul';
    break;
    case 16:
    antipoda = 'Guerrero Amarillo';
    break;
    case 17:
    antipoda = 'Tierra Roja';
    break;
    case 18:
    antipoda = 'Espejo Blanco';
    break;
    case 19:
    antipoda = 'Tormenta Negra/Azul';
    break;
  default: 'que onda';
}

let guia = tono;

if(tono > 5){
  do {
  guia -= 5;
  } while (guia > 5);
}

  console.log(guia)

switch(guia){
  case 1:
    guia = sello;
    break;
  case 2:
    if (sello < 8){
      guia = (sello - 8) + 20
    } else guia = sello - 8
    break;
  case 3:
    if (sello > 16){
      guia = (sello + 4) - 20
    } else guia = sello + 4
    break;  
  case 4:
    if (sello < 4){
      guia = (sello + 20) - 4;
    } else guia = sello - 4;
    break;
  case 5:
    if (sello > 12){
      guia = (sello + 8) - 20
    } else guia = sello + 8
    break;  
}

  console.log(guia)
  
switch(guia){
    case 0:
    guia = 'Sol Amarillo';
    break;
    case 1:
    guia = 'Dragon Rojo';
    break;
    case 2:
    guia = 'Viento Blanco';
    break;
    case 3:
    guia = 'Noche Negra/Azul';
    break;
    case 4:
    guia = 'Semilla Amarilla';
    break;
    case 5:
    guia = 'Serpiente Roja';
    break;
    case 6:
    guia = 'Muerte/Enlazador Blanco';
    break;
    case 7:
    guia = 'Mano Negra/Azul';
    break;
    case 8:
    guia = 'Estrella Amarillo';
    break;
    case 9:
    guia = 'Luna Rojo';
    break;
    case 10:
    guia = 'Perro Blanco';
    break;
    case 11:
    guia = 'Mono Negro/Azul';
    break;
    case 12:
    guia = 'Humano Amarillo';
    break;
    case 13:
    guia = 'Caminante del Cielo Rojo';
    break;
    case 14:
    guia = 'Mago Blanco';
    break;
    case 15:
    guia = 'Aguila Negra/Azul';
    break;
    case 16:
    guia = 'Guerrero Amarillo';
    break;
    case 17:
    guia = 'Tierra Roja';
    break;
    case 18:
    guia = 'Espejo Blanco';
    break;
    case 19:
    guia = 'Tormenta Negra/Azul';
    break;
  default: 'que onda';
}
    
return {
  kin: kinMaya,
  tono: tono,
  sello: sello,
  tribu: selloSolar,
  vibracion: tonoLunar,
  raza: raza,
  Umbral: selloSolar+' '+tonoLunar+' '+raza,
  Onda: onda,
  Oculto: oculto.split(' ').join(' '+tonoOculto+' '),
  CatalizadorAnalogo: analogo.split(' ').join(' '+tonoLunar+' '),
  ReflejoAntipoda: antipoda.split(' ').join(' '+tonoLunar+' '),
  Guia: guia.split(' ').join(' '+tonoLunar+' ')
}
}

let day = 31;
let month = 5;
let year = 1995;

kin(antesAhiDespues(year),cuentaPorFavor([day,month]))