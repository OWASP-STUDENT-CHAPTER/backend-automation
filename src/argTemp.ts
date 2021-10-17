const arg = require('arg')

const args = arg({
	// Commented ones could be used later
	'--help': Boolean,
	// '--version': Boolean,
	'--port': Number, // --port <number> or --port=<number>
	'--models': String, // --name <string> or --name=<string>

	// Aliases
	// '-v': '--verbose',
	// '-n': '--name', // -n <string>; result is stored in --name
	//     result is stored in --name
});

if (!args['--port']) throw new Error('missing required argument: --port');

console.log(args)

module.exports = {
	PORT : args['--port'],
	ModelURI : args['--models']
}