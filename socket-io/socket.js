const { Server } = require("socket.io");
const { Map } = require("../class/map");

const map = new Map();

const checkCustomer = ( io ) => {

  io.on('connection', ( customer ) => {
    console.log('Cliente Conectado !');

    //Disconnect
    offline( customer, io );

    mapSocket(customer, io);
    
  });
}

const mapSocket = ( customer, io ) => {
  
  customer.on('new-market', ( market ) => {

    map.addMarkers(market)
    customer.broadcast.emit('new-market',market);
  });

  customer.on('remove-marker', ( id ) => {

    map.removeMarker( id );
    map.getMarkers();
    customer.broadcast.emit('remove-marker', id);

  });

  customer.on('move-market', ( marker ) => {
    map.moveMarker(marker)
    customer.broadcast.emit('move-market', marker);
  });
};

const offline = ( customer, io ) => {
  customer.on('disconnect', () => {
    console.log('Cliente Desconectado !')    
  });

}

module.exports = { 
  checkCustomer,
  map
}