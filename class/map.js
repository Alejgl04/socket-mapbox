const Market = require('./marker');
class Map {
  constructor(){}

  markerts = {
    '1':{
      id: '1',
      name: 'Felipe',
      lng: -82.572590,
      lat: 28.0634744,
      color: '#dd8fee'
    },
    '2':{
      id: '2',
      name: 'Amy',
      lng: -82.572190, 
      lat: 28.0634744,
      color: '#790af0'
    },
    '3':{
      id: '3',
      name: 'Orlando',
      lng: -82.572920, 
      lat: 28.0634744,
      color: '#19884b'
    }
  };


  getMarkers() {
    return this.markerts;
  }

  addMarkers( markert ) {
    this.markerts[ markert.id ] = markert;
  }

  removeMarker( id ) {
    console.log(id);

    delete this.markerts[id];
  }

  moveMarker( market = Market ) {
    console.log(market)
  }
}

module.exports = { Map };