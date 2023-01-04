const User = require('../models/user')

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
module.exports.create = function(req, res){
    // console.log(req.body);
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return;}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user signing up'); return;}
                return res.redirect('users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
    })

}

//sign in and create user session
module.exports.createSession = function(res, req){
    //later
}