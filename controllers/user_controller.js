const User = require('../models/user')

module.exports.profile= function(req, res){
    // console.log(req.cookies);
    if (req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if(err){console.log('error in finding user in signing up'); return;}
            if(user){
                return res.render('home', {
                    title: 'User Profile',
                    user: 'user'
                })
            }
            return res.redirect('users/sign-in');

            
        });
    }else{
        return res.redirect('users/sign-in');
    }
}

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
                return res.redirect('sign-in')
            })
        }else{
            return res.redirect('back');
        }
    })

}

//sign in and create user session
module.exports.createSession = function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return;}
        if(user){
            if (user.password != req.body.password){
            return res.redirect('back');
            }
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        }else{
            return res.redirect('back');
        }
    })
}