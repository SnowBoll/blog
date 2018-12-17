function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    //recorrido en la busqueda

    for( i= 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a") [0];
        txtValue = a.textContent || a.innerText;
         if (txtValue.toUpperCase().indexOf(filter) >= 0) {
            li[i].style.display = "";
            ul.style.display = "inline";
         }else{
            li[i].style.display = "none";
        } if(input.value === ""){
            ul.style.display = "none";
        }
    }

}