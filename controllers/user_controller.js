module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: 'Social | SignIn'
    })
}

module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: 'Social | SignUp '
    })
}


//get user input data
module.exports.create = function(res, req){
    //later
}

//sign in and create user session
module.exports.createSession = function(res, req){
    //later
}