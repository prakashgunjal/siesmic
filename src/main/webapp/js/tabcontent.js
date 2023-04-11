 $(document).ready(function() {
  if ($.browser.mozilla && $.browser.version <= "29.0" ){
   alert('Update Mozilla more than 28 ');
  }
 
  if( $.browser.chrome && $.browser.version >= "30.0" ){
   alert('Safari');
  }
  
  if ($.browser.msie && $.browser.version >= 10 ){
   alert('IE 6 or below version');
  }

 });

