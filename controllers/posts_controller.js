const Post = require('../models/post');
const post = require('../models/post');

module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user_id
    }, function(err, post){
        if(err){console.log('Error in creating a post'); return;}

        return res.redirect('back');
    })
}