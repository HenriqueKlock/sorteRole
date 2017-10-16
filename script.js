$(document).ready(function(){

        var x = 0;
        var lugar = [];
        var y = 0;
        var comida = [];

  
         $("#btnCadLugar").click(function(){ 
        	if($("#textCadLugar").val() == " " || $("#textCadLugar").val() == ""){
        		alert("preencha");
        	}else{
	            lugar.push($("#textCadLugar").val());
	            $("#pLugar").text(lugar + "\n");
	            x++;
	            $("#textCadLugar").val("");
            }
        }); 

        $("#btnCadComida").click(function(){ 
        	if($("#textCadComida").val() == " " || $("#textCadComida").val() == ""){
        		alert("preencha");
        	}else{
	            comida.push($("#textCadComida").val());
	            $("#pComida").text(comida);
	            y++;
	            $("#textCadComida").val("");
            }
        });

        $("#btnLugar").click(function(){
        	$(".col-sm-3").toggle();
        });

        $("#btnComida").click(function(){
        	$(".col-sm-9").toggle();
        });  

        $("#btnSortLugar").click(function(){
    		var numeroSortLugar = Math.floor(Math.random() * lugar.length);
    		var i;
    		for(i = 0; i < lugar.length; i++){
    			if(numeroSortLugar == i){
    				$("#resultLugar").text(lugar[i]);
    			}
    		}
    	});
    	$("#btnSortComida").click(function(){
    		var numeroSortComida = Math.floor(Math.random() * comida.length);
    		var j;
    		for(j = 0; j < comida.length; j++){
    			if(numeroSortComida == j){
    				$("#resultComida").text(comida[j]);
    			}
    		}
    	});
});             