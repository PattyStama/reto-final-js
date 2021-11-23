//funcion de ingresos
function salario(salary){
    return salary*12;
}
function calcularSalarioanual(){
    const Inputmensual=document.getElementById("Inputmensual");
    const salary=Number(Inputmensual.value);
    
    const salarioanual=salario(salary);
    inganual.innerText="Su salario anual es de $ " + salarioanual;
}


//funcion de gastos
function gastos (casa,cel,luz,water,inter,gas,food,med){
    return casa+cel+luz+water+inter+gas+food+med;
}
function calcularGastos(){
    const Inputcasa=document.getElementById("Inputcasa");
    const Inputcel=document.getElementById("Inputcel");
    const Inputluz=document.getElementById("Inputluz");
    const Inputwater=document.getElementById("Inputwater");
    const Inputinter=document.getElementById("Inputinter");
    const Inputgas=document.getElementById("Inputgas");
    const Inputfood=document.getElementById("Inputfood");
    const Inputmed=document.getElementById("Inputmed");
    const casa=Number(Inputcasa.value);
    const cel=Number(Inputcel.value);
    const luz=Number(Inputluz.value);
    const water=Number(Inputwater.value);
    const inter=Number(Inputinter.value);
    const gas=Number(Inputgas.value);
    const food=Number(Inputfood.value);
    const med=Number(Inputmed.value);

    const gastosmensuales=gastos(casa,cel,luz,water,inter,gas,food,med);
    gastoscal.innerText="Sus gastos mensuales son de $ " + gastosmensuales;
}

//funcion deudas
    function deudas(salary, casa,cel,luz,water,inter,gas,food,med){
        return salary-(casa+cel+luz+water+inter+gas+food+med);
    }
    function sobramensual(){
        const Inputmensual=document.getElementById("Inputmensual");
        const salary=Number(Inputmensual.value);
        const Inputcasa=document.getElementById("Inputcasa");
        const Inputcel=document.getElementById("Inputcel");
        const Inputluz=document.getElementById("Inputluz");
        const Inputwater=document.getElementById("Inputwater");
        const Inputinter=document.getElementById("Inputinter");
        const Inputgas=document.getElementById("Inputgas");
        const Inputfood=document.getElementById("Inputfood");
        const Inputmed=document.getElementById("Inputmed");
        const casa=Number(Inputcasa.value);
        const cel=Number(Inputcel.value);
        const luz=Number(Inputluz.value);
        const water=Number(Inputwater.value);
        const inter=Number(Inputinter.value);
        const gas=Number(Inputgas.value);
        const food=Number(Inputfood.value);
        const med=Number(Inputmed.value);
        
        const sobramensuales=deudas(salary, casa,cel,luz,water,inter,gas,food,med);
        if (sobramensuales>=0.01){
            endeudamiento.innerText="Puede ahorrar de $ " + sobramensuales;
        }else 
        if (sobramensuales===0) {
            endeudamiento.innerText="No queda nada para ahorrar $ " + sobramensuales;
        }else{
            endeudamiento.innerText="Lo siento esta sobregirado en sus gastos $ " + sobramensuales;
        }
         
    }
       