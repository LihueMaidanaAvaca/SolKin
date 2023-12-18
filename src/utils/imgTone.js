import Hun from '../assets/images/Tones/magnetico_white.png';
import Ka from '../assets/images/Tones/lunar_white.png';
import Ox from '../assets/images/Tones/electrico_white.png';
import Kan from '../assets/images/Tones/autoexistente_white.png';
import Ho from '../assets/images/Tones/entonado_white.png';
import Uak from '../assets/images/Tones/ritmico_white.png';
import Uuk from '../assets/images/Tones/resonante_white.png';
import Uaxak from '../assets/images/Tones/galactico_white.png';
import Bolon from '../assets/images/Tones/solar_white.png';
import Lahun from '../assets/images/Tones/planetario_white.png';
import Buluk from '../assets/images/Tones/espectral_white.png';
import Lahak from '../assets/images/Tones/cristal_white.png';
import OxLahun from '../assets/images/Tones/cosmico_white.png';


export default function imgTone(tone){
    switch(tone){
        case 1:
            return Hun;
        case 2:
            return Ka;
        case 3:
            return Ox;
        case 4:
            return Kan;
        case 5:
            return Ho;
        case 6:
            return Uak;
        case 7:
            return Uuk;
        case 8:
            return Uaxak;
        case 9:
            return Bolon;
        case 10:
            return Lahun;
        case 11:
            return Buluk;
        case 12:
            return Lahak;
        case 13:
            return OxLahun;
        default:
            return 'nothing'    

    }

}