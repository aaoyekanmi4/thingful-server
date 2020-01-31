const bcrypt = require('bcryptjs');

console.log(bcrypt.hashSync("ping-password", 10));