const datosBici = require('./datosBici.js')

const dhBici = {
    bicicletas: datosBici.leerJSON(),
    buscarBici: function(id){
        const biciEnc = this.bicicletas.filter((bici) => {
            return bici.id === id
        })
        if(biciEnc.length === 0){
            return null
        }
        return biciEnc
    },
    venderBici: function(id){
        const biciEnc= this.buscarBici(id)
        if(biciEnc === null){
            return 'Bicicleta no encontrada'
        }
        biciEnc[0].vendida = true;
        return biciEnc[0];
    },
    biciParaLaVenta: function(){
        const bicisNoVendidas = this.bicicletas.filter((bici) => {
            return !bici.vendida
        })
        return bicisNoVendidas
    },
    totalDeVentas: function(){
        const total = this.bicicletas.reduce((acum,bici) => {
            if(bici.vendida){
                acum += bici.precio;
            }
            return acum
        },0)
        return total
    },
    aumentoBici: function(aumento){
        const aumentoBicis = this.bicicletas.map((bici)=>{
        const porcentaje = bici.precio * aumento / 100
        bici.precio += porcentaje
        return bici
    
    })
        return aumentoBicis
    },
    biciPorRodado: function(num){
        const rodadoBici = this.bicicletas.filter((bici)=>{
            return bici.rodado === num
        })
        return rodadoBici
    },
    listarTodasLasBici: function(){
        const bicisDisponibles = this.bicicletas.forEach((bici) => {
            console.log(bici)
        });
    }
}
//console.log(dhBici.buscarBici(1))
//console.log(dhBici.venderBici(8))
//console.log(dhBici.biciParaLaVenta())
//console.log(dhBici.totalDeVentas())
//console.log(dhBici.aumentoBici(20))
//console.log(dhBici.biciPorRodado(20))
//dhBici.listarTodasLasBici()