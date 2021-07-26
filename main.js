// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
function casuali() {
    bomba = 16;
    if (bomba > 0 && bomba <= 100) {
      str = "";
      for (i = 0; i < bomba; i++) {
           num = Math.round(Math.random()*100 + 1);
           if (i > 0) {
              str += ", ";
           }
           str += num;
       }
   
     }
  }
  