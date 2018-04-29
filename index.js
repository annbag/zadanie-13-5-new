var OSinfo = require('./modules/OsInfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {

    var input = process.stdin.read();
	if(input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
		        process.stdout.write('Quitting app!\n');
		        process.exit();
		        break;
        	case '/versionNode':
        		process.stdout.write('Node.js version is : ' + process.version.node + '\n');
        		break;
        	case '/SysLang':
        		process.stdout.write('System language is ' + process.env.lang + '\n');
        		break;
            case '/getOSinfo':
                OSinfo.print();
                break;
        	default :
        		process.stderr.write('Wrong instruction!\n');
        };
    }    
});