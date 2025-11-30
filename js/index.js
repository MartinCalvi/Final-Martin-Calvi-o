//Formulario

function mostrarError(fieldId, mensaje){
    const errorElemento = document.getElementById(fieldId)
    errorElemento.textContent = "❌" + mensaje;
    errorElemento.style.display ='block';
}


function ocultarError(fieldId){
    const errorElemento = document.getElementById(fieldId)
    errorElemento.style.display ='none';
}




function validar(){
    /*const email_valido= "martin@hotmail.com";
    const pass_valido="1234";*/

    let persona = [
        {
            "usuario" : "admin@hotmail.com",
            "contraseña" : 1234,
        },

        {
            "usuario" : "martin@gmail.com",
            "contraseña" : 2040,
        }
    ]

    const userEmail = document.getElementById('id_mail').value;
    const userPass = document.getElementById('id_pass').value;

    let valido= true;

    //Condicional

    if (userEmail.length<1){
        mostrarError('email_vacio', 'El campo usuario no debe estar vacio');
        valido=false;

    }else{
        ocultarError('email_vacio')
    }

    if (userPass.length<1){
        mostrarError('pass_vacio', ' El campo password no debe estar vacio');
        valido=false;

    }else{
        ocultarError('pass_vacio')
    }

    /*if(email_valido!==userEmail || pass_valido!==userPass){
        mostrarError('login_error', 'Las credenciales no son validos')
    }else{
        ocultarError('login_error')
    }*/

    for(let i=0; i<persona.length;i++){
        if(persona[i].usuario == userEmail && persona[i].contraseña==userPass){
        ocultarError('login_error')
        valido = true
        break
        }else{
            mostrarError('login_error', '❌ Error en ingreso de datos')
            valido=false
        }

    }
    
    return valido

}


const boton = document.getElementById("boton_ingresar");

boton.addEventListener("click", function(event){
    event.preventDefault();
    if(validar()){
        window.location.href = "pagina/entrada.html"
    }
}
)


