const reloj = () =>{
    let agujaHoras = document.getElementById("agujaHoras");
    let agujaMinutos = document.getElementById("agujaMinutos");
    let agujaSegundos = document.getElementById("agujaSegundos");
    
    let horasMinutosSegundos = document.getElementById("horasMinutosSegundos");
    let diaMesAnio = document.getElementById("diaMesAnio");
    
    let tiempo = new Date();
    let nombreDia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviebre", "Diciembre"];

    let hora;
    let minuto;
    let segundo;
    let dia;
    let mes;

    tiempo.getHours() < 10 ? hora = `0${tiempo.getHours()}` : hora = tiempo.getHours();
    tiempo.getMinutes() < 10 ? minuto = `0${tiempo.getMinutes()}` : minuto = tiempo.getMinutes();
    tiempo.getSeconds() < 10 ? segundo = `0${tiempo.getSeconds()}` : segundo = tiempo.getSeconds();
    tiempo.getDate() < 10 ? dia = `0${tiempo.getDate()}` : dia = tiempo.getDate();
    tiempo.getMonth() < 10 ? mes = `0${tiempo.getMonth()+1}` : mes = tiempo.getMonth()+1;

    horasMinutosSegundos.textContent = `${hora}:${minuto}:${segundo}`;
    diaMesAnio.textContent = `${dia} del ${mes} del ${tiempo.getFullYear()}`;    

    agujaHoras.style.transform = 'translate(-50%,-100%) rotate(' + tiempo.getHours()*30 + 'deg)'
    agujaMinutos.style.transform = 'translate(-50%,-100%) rotate(' + tiempo.getMinutes()*6 + 'deg)';
    agujaSegundos.style.transform = 'translate(-50%,-100%) rotate(' + tiempo.getSeconds()*6 + 'deg)';
    
    setInterval(reloj, 1000);
}

reloj();

/**
 * *Cambiar formato de hora(12 o 24)
 * *Cambiar el formato de mes(numero o nombre)
 * *Cambiar el formato de fecha (de o /)
 * *Camiar formato de año(YYYY o YY)
 * *Mostrar dia de la semana(Lunes, Martes, etc)
 * *tema oscuro
 * *Modal con el la explicacion de la fecha
 * D	El día de la fecha con uno o dos dígitos
 * DD	El día de la fecha siempre con dos dígitos
 * DDD	El nombre del día de la semana con tres letras, como lun a dom
 * DDDD	El nombre del día de la semana
 * M	El mes de la fecha con uno o dos dígitos
 * MM	El mes de la fecha siempre con dos dígitos
 * MMM	El nombre del mes con tres letras, como ene a dic
 * MMMM	El nombre del mes
 * AA	El año de la fecha con dos dígitos
 * AAAA	El año de la fecha con cuatro dígitos
 * SE	Número de la semana del año
 * Q	El trimestre de la fecha, como T1 a T4
 * TT	El trimestre de la fecha, como 1º trimestre a 4º trimestre
 */