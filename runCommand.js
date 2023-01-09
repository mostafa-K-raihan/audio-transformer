const spawn = require('child_process').spawn;

function runCommand(cmd, args, options) {
  const onData = options?.onData || ((data) => console.log(data));
  const onError = options?.onError || ((err) => console.log(err));
  const onFinish = options?.onFinish || (() => console.log('Finished'));

  const proc = spawn(cmd, args.split(' '));
  
  proc.stdout.on('data', onData);
  proc.stderr.setEncoding('utf8');
  proc.stderr.on('data', onError);
  proc.on('close', onFinish);
}

module.exports = runCommand;

