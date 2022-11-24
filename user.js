const moongose = require('mongoose')

const Author = moongose.Schema({
    name : String
},{
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true } 
  })

const Post = moongose.Schema({
    name : String,
    author : [{ type : moongose.Types.ObjectId , ref : 'Author'}]
})

Author.virtual('getpost', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'author'
  });

  let post = moongose.model("Post" , Post );
  let author = moongose.model("Author" , Author )

module.exports = {
    Post : post,
    Author : author
}
