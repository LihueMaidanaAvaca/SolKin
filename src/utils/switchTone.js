export default function switchTone(tono){
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
      default:
        return tonoLunar  
    }
     return tonoLunar
    }