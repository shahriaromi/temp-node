const os = require('os');

//info current user
// console.log(os.userInfo());

//method returns system uptime in seconds
// console.log(`system uptime in seconds: ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
