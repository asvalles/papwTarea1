function fun_usuario()
{
    var e = document.getElementById("ddd").value;

    if(e.length > 6)
    {
        //alert("nice");
        return true;
    }
    else
    {
        alert("julio me regana");
        document.getElementById("ddd").style.backgroundColor = "red";
        return false;
    }

}

function fun_registrar()
{
    //mayuscula, minuscula, numero
    var p = document.getElementById("contrasena").value;
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
                //alert("mayuscula " + p.charAt(i));
                mayuscula = true;
            }
            if(p.charAt(i).toLowerCase() == p.charAt(i) && isNaN(p.charAt(i)))
            {
                //alert("prueba " + p.charAt(i));
                minuscula = true;
            }
            if(isNaN(p.charAt(i)) == false)
            {
                //alert("numero " + p.charAt(i));
                numero = true;
            }
        }
        tamano = true;
    }
    if(mayuscula == true && minuscula == true && numero == true && tamano == true)
    {
        //alert("funciona");
        return true;
    }
    else
    {
        //alert("no jala");
        document.getElementById("contrasena").style.backgroundColor = "red";
        return false;
    }
}    

function ambas()
{
var us = fun_usuario();
var reg= fun_registrar();

    if(reg && us)
    {
        alert("Se han submitiado las cosas");
        //AQUI HAGO EL SUBMIT
    }
    else
    {
        alert("no se han submitado las cosas");
    }
}