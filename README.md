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
1. Para la función del splash se crea una vista independiente que tendrá un contador de tiempo con setTimeOut (3500 milisegundos), y cuando pase el tiempo establecido debe redireccionar a la la vista principal.
2. En la vista principal se mostrará una imagen de background con los logos principales y dos botones, enfocándonos en el boton de singup, al cual se le asignará un evento click para que direccione a otra view.
3. La siguiente vista tendrá un dropdown para que el usuario elija el país, y un input para que ingrese su teléfono, y un botón para enviar datos, el cual tendrá la clase disabled para deshabilitarlo hasta que el usaurio ingrese los datos solicitados del input, los cuales serán validados para que sólo se ingresen números y sean 10 dígitos, estableciendo el atributo pattern en el html. Al darle click al botón, redireccionará a una nueva view y enviará un alert con un código que deberá ingresar en la siguiente view.
4. El código que se va a enviar al usuario, debe contener 3 números aleatorios, para esto usaremos el método Math.floor dentro de una función, y ese número se guardará en una variable, se creará otra función que llame a la primera y la cual por medio de un for se ejecutará 3 veces, y se enviará un alert con esos números que arrojarán ambas funciones.
5. En la nueva view tendremos 3 campos vacíos que deberán llenarse con el código que se envió por medio del alert, y al ingresarlos se habilitará el boton de next, y también tendrá la opción de volver a cargar un nuevo código al usuario, esto se hará únicamente llamando la función en el evento de este nuevo botón.
6. La siguiente vista tendrá un form con 3 inputs, para agregar datos del usaurio, su nombre, apellido y correo, y un checkbox con leyenda para que acepte términos y condiciones, y un botón que va a direccionar a la última vista. Todos los datos anteriores se validarán de la misma manera que en los anteriores.
7. La última vista sólo tendrá un mensaje que indique que su registro ha sido exitoso.
8. Agregar la función de que el icono < tenga la opción de regresar a la vista anterior, esto por medio de su href, en el cual le daremos la liga a dónde debe direccionar cada uno.