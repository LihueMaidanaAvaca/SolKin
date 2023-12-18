import NuKaban from '../assets/images/Seals/NuKaban.png';
import NuEtznab from '../assets/images/Seals/NuEtznab.png';
import NuCauac from '../assets/images/Seals/NuCauac.png';
import NuAhau from '../assets/images/Seals/NuAhau.png';
import NuImix from '../assets/images/Seals/NuImix.png';
import NuIk from '../assets/images/Seals/NuIk.png';
import NuAkban from '../assets/images/Seals/NuAkban.png';
import NuKan from '../assets/images/Seals/NuKan.png';
import NuChicchan from '../assets/images/Seals/NuChicchan.png';
import NuCimi from '../assets/images/Seals/NuCimi.png';
import NuManik from '../assets/images/Seals/NuManik.png';
import NuLamat from '../assets/images/Seals/NuLamat.png';
import NuMuluc from '../assets/images/Seals/NuMuluc.png';
import NuOc from '../assets/images/Seals/NuOc.png';
import NuChuen from '../assets/images/Seals/NuChuen.png';
import NuEb from '../assets/images/Seals/NuEb.png';
import NuBen from '../assets/images/Seals/NuBen.png';
import NuIx from '../assets/images/Seals/NuIx.png';
import NuMen from '../assets/images/Seals/NuMen.png';
import NuCib from '../assets/images/Seals/NuCib.png';


export default function imgSeals(seal){
    if(seal>20){
        seal-=20
    }

    switch(seal){
        case 20:
            return NuAhau;
        case 0:
            return NuAhau;
        case 1:
            return NuImix;
        case 2:
            return NuIk;
        case 3:
            return NuAkban;
        case 4:
            return NuKan;
        case 5:
            return NuChicchan;
        case 6:
            return NuCimi;
        case 7:
            return NuManik;
        case 8:
            return NuLamat;
        case 9:
            return NuMuluc;
        case 10:
            return NuOc;
        case 11:
            return NuChuen;
        case 12:
            return NuEb;
        case 13:
            return NuBen;
        case 14:
            return NuIx;
        case 15:
            return NuMen;
        case 16:
            return NuCib;
        case 17:
            return NuKaban;
        case 18:
            return NuEtznab;
        case 19:
            return NuCauac;
        default:
            return 'nothing'    

    }

}