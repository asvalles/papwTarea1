function fun_usuario(){
    var usu = $("#ddd").val();
    if(usu.length > 6)
    {
        return true;
    }
    else
    {
        $("#ddd").css("background-color","red");
        return false;
    }
}

function fun_registrar()
{
    
    var p = $("#contrasena").val();
    var mayuscula = false;
    var minuscula = false;
    var numero = false;
    var tamano = false;

    if(p.length > 8)
    {
        for(var i = 0; i<p.length; i++)
        {    
            if(p.charAt(i).toUpperCase() == p.charAt(i) && isNaN(p.charAt(i)))
            {
                mayuscula = true;
            }
            if(p.charAt(i).toLowerCase() == p.charAt(i) && isNaN(p.charAt(i)))
            {
                minuscula = true;
            }
            if(isNaN(p.charAt(i)) == false)
            {
                numero = true;
            }
        }
        tamano = true;
    }
    if(mayuscula == true && minuscula == true && numero == true && tamano == true)
    {
        return true;
    }
    else
    {
        $("#contrasena").css("background-color","red");
        //alertify
        //    .alert("This is an alert dialog.", function(){
        //    alertify.message('OK');
        //    });
        //var notification = alertify.notify('sample', 'success', 5, function(){  console.log('dismissed'); });
        //alertify.error('Error message');
        return false;
    }
}

$(document).ready(function(){
    $("#registrar").click(function(){
        var us = fun_usuario();
        var reg= fun_registrar();

        if(reg && us)
        {
            console.log("Se han submitiado las cosas");
            //AQUI HAGO EL SUBMIT
        }
        else
        {
            console.log("no se han submitado las cosas");
        }
    });
});