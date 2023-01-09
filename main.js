#!/usr/bin/env node
const run = require('./runCommand');


const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');


const argv = yargs(hideBin(process.argv))
  // .command('serve [port]', 'start the server', (yargs) => {
  //   return yargs
  //     .positional('port', {
  //       describe: 'port to bind on',
  //       default: 5000
  //     })
  // }, (argv) => {
  //   if (argv.verbose) console.info(`start server on :${argv.port}`)
  //   serve(argv.port)
  // })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .option('input', {
    alias: 'i',
    type: 'string',
    description: 'Input file: Full path',
    required: true,
  })
  .option('output', {
    alias: 'o',
    type: 'string',
  description: 'Output file: Full path',
  required: true,
  })
.option('seek', {
  alias: 'ss', 
  type: 'string',
  description: 'seek to time in seconds'
})
.option('to', {
  alias: 't',
  type: 'string',
  description: 'total time in seconds'
})
.option('clip', {
  description: 'Option to clip the file',
  type: 'boolean',
  default: false,
})
  .parse()
console.log(argv)


const clipFile = (argv) => {
  const { input, output } = argv;
  if( !input || !output) {
    throw new Error('Need input/output file');
  }
const { seek, to } = argv;
const defFile = '/mnt/c/Users/USER/Downloads/outputfile.mp3';
run('ffmpeg', `-y -ss ${seek} -t ${to} -i ${input} -acodec copy ${output}`);
}


const runFFMpeg = (argv) => {
  if (argv.clip) {
    clipFile(argv);
  }
}


runFFMpeg(argv);


