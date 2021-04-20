<h1>Manual de instalacion</h1>

<h3>Requerimientos</h3>

<ul>
    <li>Angular 10</li>
    <li>Node js</li>
</ul>

<h3>Instalacion</h3>
<ul>
    <li>Clonar el repositorio </li>
    <li>una vez clonado ubicarse con la terminal de su sistema operativo  en la raiz del directotio de este proyecto y ejecutar el comando <b>npm install</b> para instalar las dependencias de node.</li>
</ul>

<h3>Ejecutar aplicacion</h3>

<ul>
    <li>
        abrir la terminal de comandos del sistema opertivo y ubicarse en el directorio donde esta nuestra aplicacion
        ejecutar el siguiente comando <b>ng serve --port 4401</b>
        la aplicacion iniciara el servidor y se ejecutara en el puerto 4401  , especialmente seleccione el puerto 4401 porque yo tenia otras aplicaciones corriendo en el puerto 4200 que es el que usa por defecto
    </li>

</ul>


<h3>Tecnologias usadas</h3>

<p>
    Para esa aplicacion use el framework front end <b>Angular 10</b> para el desarrollo del front de la aplicacion que consume unos servicios echos en <b>Laravel</b>
    <b>npm</b> que es el manejador de dependencias de node js.
    <b>Bootstrap</b> como framework css para mejorar el aspecto de interfaz
</p>

<h3>Explicacion logica de la aplicacion</h3>
<p>
    sea realizo una estructura sencilla con 4 modulos principales cada modulo es un endpoint en la aplicacion de laravel un api rest que se consume atravez de un front en angular que posee la interfaz grafica
    estos modulos son:
    <ul>
        <li>Crear cuenta que recibe dos parametros nombre y saldo incial de la cuenta esto crea un numero de cuenta unico para el usuario de 7 digios con el cual realizara el resto de operaciones</li>
        <li>Modulo consignar que simula una consignacion a la cuenta creada o a cualquier cuenta existente recibe el numero de cuenta valido y el valor a consignar el sistema devuelve a que cuenta se consigno y el nuevo saldo de la cuenta</li>
        <li>Modulo retirar al igual que el modulo de consignar recibe el numero de cuenta y un valor a retirar el sistema devuelve el numero de cuenta al cual se retiro y el nuevo saldo</li>
        <li>Luego tenemos el modulo de consultar este recibe el numero de cuenta y el sistema devuelve el valor del saldo que posee en la cuenta</li>
    </ul>
</p>

<h3>Que hubiera echo si tubiera mas tiempo</h3>
<p>
    Si tubiera mas tiempo habria realizado una aplicacion mas completa , como trabajo actualmente pues me vi un poco reducido de tiempo  y  me falto realizar las pruebas unitarias espero haber demostrado mis  conocimientos al maximo
</p>
