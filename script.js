$(document).ready(function(){
        var listaUl, listaLi, listaA;
        var i;
        var x = 0;
        var lugar = [];
        var y = 0;
        var input;
        var filter;
        listaUl = document.getElementById("myUL");
        listaLi = listaUl.getElementsByTagName('li');

        for(i = 0; i < listaLi.length; i++){
            listaA = listaLi[i].getElementsByTagName("a")[0];
            lugar.push(listaA.text);
        }

  
         $("#btnCadLugar").click(function(){ 
        	if($("#textCadLugar").val() == " " || $("#textCadLugar").val() == ""){
        		alert("preencha");
        	}else{
                var novoElemento = $("#textCadLugar").val();
                $("#myUL").append("<li><a>"+ novoElemento +"</a></li>");
	            lugar.push($("#textCadLugar").val());
	            $("#textCadLugar").val("");
                filter = "xadre";
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
        $("#textCadLugar").click(function(){
            $("#myUL").toggle();
        });

        $("#textCadLugar").keyup(function(){
            var ul, li, a, i;
            input = document.getElementById('textCadLugar');
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName('li');
    
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "block";
                } else {
                    li[i].style.display = "none";
                }
            }
        });
});             

function filtraLista() {
    
    

        
}