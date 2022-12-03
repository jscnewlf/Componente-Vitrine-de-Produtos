var width = window.screen.width;
if (width > 812) {
//scroll top para mostrar menu flutuante
	var lastScrollTop = 0;


window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       $('#header > div > div.row-100.header-nav').hide();
            $('#header > div > div.row-100.header-nav').removeClass('novoposition');
	          $('#header > div > div.row-100.header-nav').removeClass('zeroscroll');
   } else {
	   if(st == 0){
		        $('#header > div > div.row-100.header-nav').addClass('zeroscroll');
		    $('#header > div > div.row-100.header-nav').addClass('novoposition');
		          $('#header > div > div.row-100.header-nav').show();
	   } else {
		  $('#header > div > div.row-100.header-nav').show();
     $('#header > div > div.row-100.header-nav').addClass('novoposition');
	   $('#header > div > div.row-100.header-nav').removeClass('zeroscroll');   
	   }
      
   }


   lastScrollTop = st <= 0 ? 0 : st; 
}, false);

}
