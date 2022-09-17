const express = require ('express');
const port = 8000;
const app = express();



app.use('/',require('./routes'));

//setup view engine always after midware
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err)
    console.log("error",err);

    console.log(`Server is running on port :${port}`);
});