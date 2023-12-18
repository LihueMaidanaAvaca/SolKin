export default function dayAndMonthK(day,month) {  
  let tablaOne = 0;
  let d = parseInt(day)
  let m = parseInt(month)
  
  switch (m) {
  case 1:
    tablaOne = d+54;
    break;
  case 2:
    tablaOne = d+85;
    break;
  case 3:
    tablaOne = d+113;
    break;
  case 4:
    tablaOne = d+144;
    break;
  case 5:
    tablaOne = d+174;
    break;
  case 6:
    tablaOne = d+205;
    break;
  case 7:
    tablaOne = d+235; 
    break;
  case 8:
    tablaOne = d+6;
    break;
  case 9:
    tablaOne = d+37;
    break;
  case 10:
    tablaOne = d+67;
    break;   
  case 11:
    tablaOne = d+98;
    break;
  case 12:
    tablaOne = d+128;
    break;
  default:
    tablaOne = 'Lo lamentamos, por el momento no disponemos de ' + d + '.';
}

    return tablaOne
}
