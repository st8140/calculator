'use strict';

 /* global $*/
$(document).ready(function() { 
  
  let total = 0;
  let input = '';
  let calc = '+';
  let setValue;
  
  // 0~9,小数点ボタン
  $('.setValue').click(function() {
    setValue = $(this).val();
    // console.log(`${setValue}を取得しました`)
    input += setValue;
    document.calculatorForm.indicate.value = input;
  }); 
  
  // 演算ボタン
  $('#calc').click(function() {
    total = new Function('return ' + input)();
    document.calculatorForm.indicate.value = total;
    
  });
  
  // クリアボタン
  $('#clear').click(function() {
    total = 0;
    calc = '+';
    input = "";
    document.calculatorForm.indicate.value = total;
  });
    
});

