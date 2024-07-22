const datosBici = require("./datosBici.js");

const dhBici = {
bicicletas: datosBici.bicicletasJSON(),
buscarBici: function(id){
    let biciBuscar = this.bicicletas.filter((bici)=>{
        return bici.id === id;
    });
    if(biciBuscar.length === 0){
        return null;
    };
    return biciBuscar;
},
venderBici: function(id){
    let biciBuscar = this.buscarBici(id)
    if (biciBuscar === null){
        return 'Bicicleta no encontrada'
    };
    biciBuscar[0].Vendida = true;
    return biciBuscar;
},
biciParalaVenta: function(){
    let bicisNoVendidas = this.bicicletas.filter((bici)=>{
        return !bici.Vendida;
    });
    return bicisNoVendidas;
},
totalDeVentas: function(){
    let total = this.bicicletas.reduce((acum,bici)=>{
        if(bici.Vendida){
            acum += bici.Precio
        }
        return acum;
    },0);
    return total;
},
aumentoBici: function(aum){
    let newData = this.bicicletas.map(element=>{
        let bici = {
            ...element, Precio: element.Precio +((element.Precio*aum)/100)
        
        }
        return bici
    })
 return newData;
}


};
//console.log(dhBici.buscarBici(5))
//console.log(dhBici.venderBici(5))
//console.log(dhBici.biciParalaVenta())
//console.log(dhBici.totalDeVentas())
//console.log(dhBici.aumentoBici(10))