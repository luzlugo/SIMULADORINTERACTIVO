
// calcular estadia
function datos(){
    alert('reserva con nosotros tu estadia');
    alert('si reservas mas de 10 dias recibes un descuento de 10%')
    }
    
    datos()
    
    let edad = Number (prompt('ingrese su edad:'))
    
    //La idea es que si la edad ingresada es menor a 18, se ingrese en un bucle. Y de ahi no salimos hasta que edad>=18, entonces
    while (edad < 18){ //mientras la edad ingresada sea menor a 18, ingreso al bucle
        alert("debes ser mayor de edad para ingresar") //alerto
           edad = Number (prompt('ingrese su edad:')) //vuelvo a pedir la edad y evaluo la condicion de arriba otra vez.
    }
    
    let dia = Number(prompt('ingrese numero de dias de estadia'))
    
    const valordeldia = 40
    
    const promo = 0.1
    
    let valorestadia = valordeldia*dia
    
    let promoaplicada = (valorestadia - (valordeldia*0.1))
    
    function promosi(){
        alert("aplicas al descuento")
        alert("Tu total con descuento es"+""+(promoaplicada))
    }
    
    function promono(){   
        alert("no aplicas al descuento")
        alert("Tu total con descuento es"+""+(valorestadia))
    }
    
    if (dia > 10) {
    
        promosi()
        console.log("Disfruta tu descuento y viaje")
        document.write(`<img src="img/rabbit-g5234cb8b9_640.PNG" >`)

        
        
    }else{
         promono()
         console.log("Disfruta tu viaje")
         document.write(`<img src="img/rabbit-g5234cb8b9_640.PNG" >`)
    }
    















