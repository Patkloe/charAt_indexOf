function str_charat_index(x,s){
 var pos = s.charAt(x);
 alert('caractere a la Position ' + ' ' + x + 'dans string'+ ' ' +s + ':' + ' ' + pos);
 var ind = s.indexOf(pos);
 alert('A la position ' + ' ' + ind + ' ' + 'nous avons le charactere :' + ' ' + pos);
}
str_charat_index(0,'Patrick');
