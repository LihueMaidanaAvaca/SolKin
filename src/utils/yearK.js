export default function yearK(year){
    let tableTwo = 0
    let y = parseInt(year)
    
    if (y < 1957){
      do {
      y += 52;
      } while (y < 1957);
      tableTwo = y
    } else if(y >= 2009){
      do {
      y -= 52;
      } while (y > 2009);
      tableTwo = y
    } else {
      tableTwo = y
    }
    
    let key = (tableTwo-1957).toString().split('')
    
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