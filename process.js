const dotenv = require("dotenv");
dotenv.config();

const myUrl = new URL('https://api.themoviedb.org/diana?id=456#tested');

console.log(myUrl)