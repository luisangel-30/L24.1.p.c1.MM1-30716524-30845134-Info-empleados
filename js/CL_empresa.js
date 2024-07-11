
export default class CL_empresa{
    constructor(){
        this.contobre=0;
        this.contadm=0;
        this.acumobresuel=0.0;
        this.acumadmsuel=0.0;
    }
    procesar(per){
        if(per.tipo=="1")
            this.contobre++;
        else
        this.contadm++;
    if(per.tipo=="1")
        this.acumobresuel+=per.sueldo;
    else
    this.acumadmsuel+=per.sueldo;
    }
    promedioobre(){
        return this.acumobresuel/this.contobre;
    }
    promedioadm(){
        return this.acumadmsuel/this.contadm;
    }
}