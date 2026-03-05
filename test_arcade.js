const fs = require('fs');
const data = fs.readFileSync('tech/arcade.glb').toString('utf8');
const rx = /\"name\":\"([^\"]+)\"/g;
let m;
const names = new Set();
while ((m = rx.exec(data)) !== null) {
  names.add(m[1]);
}
console.log(Array.from(names).join(', '));
