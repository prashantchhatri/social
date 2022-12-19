module.exports.home = function(req, res){
    return res.end('<h1> hello world </h1>') 
}


module.exports.test = function(req, res){
    return res.end('<h1> test page</h1> ')
}