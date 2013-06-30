var until = require('util')
   , http = require('http')
   , httpProxy = require('http-proxy')

httpProxy.createServer({
	router: {
	    'localhost': 'localhose:8080',
	    'www.davelukas.net': 'localhost:7777'
	}
}).listen(80);

util.puts('http proxy server started on port 80');