
import fs from "fs"
const data =  fs.readFileSync("./package.json")
console.log(data.toString())

