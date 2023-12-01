const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//Users can make many posts.//
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Post can only belong to one user.//
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//Comment can only belong to one user.//
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

//Users can make many comments.//
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};