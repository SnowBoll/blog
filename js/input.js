var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};
   
    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
   
    return function( str ) {
        var ret = [];
        for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
                ret.push( mapping[ c ] );
            else
                ret.push( c );
        }      
        return ret.join( '' );
    }
   
  })();

function myFunction(){
    let input, filter, section, h2, txtValue, div;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    section = document.getElementById("contain");
    div = section.getElementsByTagName('div');


    for( let i = 0; i < div.length; i++){
        h2 = div[i].getElementsByTagName("h2") [0];
        txtValue = normalize(h2.textContent) || normalize(h2.innerText);
        if(txtValue.toUpperCase().indexOf(filter) > -1){
        div[i].style.display = "";
        }else {
         div[i].style.display = "none";
        }

        if(filter === ""){
            div[i].style.display = "";
        }
    }
      
}

