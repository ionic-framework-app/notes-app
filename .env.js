var os = require('os');
var ifaces = os.networkInterfaces();
var keys = Object.keys(ifaces);

var localAddress;

for (var i = 0; i < keys.length; i++) {
  var iface = ifaces[keys[i]];
  iface.forEach(function(innerIface){
    if(innerIface.internal === false && innerIface.family === 'IPv4')
      localAddress = innerIface.address;
  });
}

console.log(localAddress);
module.exports = {
  SERVER_ADDRESS: ((localAddress + ':3000') || '0.0.0.0:3000')
}
