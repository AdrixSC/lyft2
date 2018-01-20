#INSTRUCCIONES
Desarrolla una web-app que replique el sitio de Lyft, en este reto deberás cumplir los pasos necesarios para que tu usuario pueda registrarse.

##Flujo de la aplicación:
1. Debe tener una vista splash con duración de 2 a 5 segundos que redirecciona a tu vista principal. La vista de inicio debe contar con dos botones.
2. En la vista principal tenemos un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de NEXT debe estar deshabilitado hasta que se ingrese un número de 10 dígitos.
3. Una vez ingresado el número de teléfono se habilita el botón y al dar click debe enviar una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista.
4. En la siguiente vista se debe ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la vista donde ingresa sus datos.
5. Para ingresar sus datos necesitamos un formulario que le pida su nombre, apellido y correo electrónico. Deberá también tener un checkbox para que se acepten los términos y condiciones del servicio.
6. Ya que se ha realizado lo anterior, sólo se deberá mostrar una vista al usuario que le indique que ha concluido con el registro exitosamente.

#PSEUDOCÓDIGO

//HTML
1. Enlazar CDN de bootstrap y jQuery.
2. Maquetar el diseño de la aplicación.
3. Dar estilos necesarios.

//JS
1. Para la función del splash se crea una vista con clase hidden que tendrá un contador de tiempo (2 a 5 segundos), y cuando pase el tiempo se debe ocultar y mostrar la vista principal.
2. En la vista principal tendrá un form y dentro 1 select para que el usuario elija el país, y 1 input para que el usuario ingrese su teléfono, y un botón para enviar datos.
3. Validar el input del teléfono para habilitar el botoón.
4. Darle el evento click al botón y que éste envie un alert con un código aleatorio y redirecciones a una nueva vista (esto pasará al cerrar el alert o desde el botón???)
5. La nueva vista tendrá un input para ingresar el codigo lanzado y un botón para enviar ese dato, el cual direccionará a una nueva vista.
6. La siguiente nueva vista tendrá 3 inputs, para agregar datos del usaurio, su nombre, apellido y correo, y un checkbox con leyenda para que acepte términos y condiciones, y un botón que va a direccionar a la última vista.
7. La última vista sólo tendrá un mensaje que indique que su registro ha sido exitoso.
