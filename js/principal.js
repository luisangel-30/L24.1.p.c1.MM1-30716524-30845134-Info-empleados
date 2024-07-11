/*INFO EMPLEADOS
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
determinar cuál es el monto promedio que paga por cada tipo de personal.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150:
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90
Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175*/
import CL_empresa from "./CL_empresa.js";
import CL_personal from "./CL_personal.js";

let personal= new CL_personal();
let pers1 = new CL_personal("Juan", "1",100);
let pers2 = new CL_personal("Ana", "1",120);
let pers3 = new CL_personal("Lin", "2",200);
let pers4 = new CL_personal("Mary", "1",50);
let pers5 = new CL_personal("Carlos", "2",150);

let empresa= new CL_empresa();
empresa.procesar(pers1);
empresa.procesar(pers2);
empresa.procesar(pers3);
empresa.procesar(pers4);
empresa.procesar(pers5);

let salida=document.getElementById("salida");
salida.innerHTML=`
<br>Monto total pagado a obreros: $${empresa.acumobresuel}
<br>Promedio pagado a ${empresa.contobre} obreros: $${empresa.promedioobre()}
<br><br>
Monto total pagado a administrativos: $${empresa.acumadmsuel}
<br>Promedio pagado a ${empresa.contadm} administrativos:$${empresa.promedioadm()}

`