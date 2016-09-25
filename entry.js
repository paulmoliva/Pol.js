var Pol = require('./pol.js');

document.addEventListener('DOMContentLoaded', function (){
  Pol.presidentialPoll();
  Pol.presidentialPoll('four-way-national');

  Pol.presidentalChart();

});
