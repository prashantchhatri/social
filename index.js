const express = require('express')
const app = express();
const port = 8080;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'))
app.use(expressLayouts); 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes'))

//setup views
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on Port:${port}`);
})