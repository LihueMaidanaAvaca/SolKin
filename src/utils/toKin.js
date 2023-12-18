import switchTone from "./switchTone";
import switchSeal from "./switchSeal";
import switchSealoffcolor from "./switchSealoffcolor";
import imgSeals from "./imgSeals";
import imgTone from "./imgTone";

export default function toKin(año, fecha){
    let kinMaya = año+fecha
    
    if(kinMaya > 260){
      kinMaya -= 260
    }
    
    let sello = parseInt(kinMaya) 

    console.log("kin", sello)
    
    if(sello >= 20){do {
      sello -= 20;
      } while (sello >= 20);}
    
    let tono = kinMaya
    
    if(tono > 13){do {
      tono -= 13;
      } while (tono > 13);}
    
    
    
    let tonoOculto = 14 - tono;
    
    
    
    let color = kinMaya

    
    if(color > 4){
      do {
        color -= 4;
      } while (color > 4);
    }
    
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
      default:
        raza = 'error';  
    }
    
    let onda = 0;

    if(sello < tono){
      onda = (sello+20)-(tono-1)
    } else if(sello > tono){
      onda = sello - (tono-1)
    } else if(tono === 1){
      onda = sello
    } else if(tono === sello){
      onda = 1
    }
      
    
    
    let oculto = 0;
    
    if(sello === 0){
      oculto = 1
    } else if(sello === 1){
      oculto = 0
    }else{oculto = 21 - sello;}
    
        
    let analogo = 0;
      
    analogo = 19 - sello;
    
    
    
    let antipoda = 0
    
    if(sello >= 10){
      antipoda = sello - 10;
    } else {
      antipoda = sello + 10;
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
      default:
        guia = 0   
    }
    
            
    return {
      
      kin: kinMaya,
      tono: tono,
      sello: sello,
      tribu: switchSeal(sello),
      vibracion: switchTone(tono),
      raza: raza,
      onda,
      Umbral: switchSealoffcolor(sello)+' '+switchTone(tono)+' '+raza,
      Onda: switchSealoffcolor(onda),
      Oculto: switchSeal(oculto).split(' ').join(' '+switchTone(tonoOculto)+' '),
      CatalizadorAnalogo: switchSeal(analogo).split(' ').join(' '+switchTone(tono)+' '),
      ReflejoAntipoda: switchSeal(antipoda).split(' ').join(' '+switchTone(tono)+' '),
      Guia: switchSeal(guia).split(' ').join(' '+switchTone(tono)+' '),
      imgSeal: imgSeals(sello),
      imgTone: imgTone(tono),
      imgWave: imgSeals(onda),
      imgGuia: imgSeals(guia),
      imgRight: imgSeals(analogo),
      imgLeft: imgSeals(antipoda),
      imgHide: imgSeals(oculto)
    }
   
    }