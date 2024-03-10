import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'


export const yarg = yargs(hideBin(process.argv) )
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication tale base'
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication tale limit'
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show mltiplication table'
    })
    .option('d',{
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })


    .check((argv, options) => {

        if( argv.b < 1 ) throw 'Error: Base must be greather than 0!';
        return true;
    })
    .parseSync()

