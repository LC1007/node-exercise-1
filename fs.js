const {writeFile, readFile, appendFile} = require('fs')

readFile('./data2.txt', 'utf-8', (err, data)=>{
    if(!err)
        console.log(data)
    if(err)
        console.log('File does not exist');
})