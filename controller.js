const { mongoose } = require('mongoose')
var { Post , Author } = require('./User')

const insert = async (req,res)=> {
    let data = await Author.create({name:'yazhnila1'})

    await Post.create({author :  mongoose.Types.ObjectId(data._id),name : 'hari1'})

    console.log(data);
    res.send('hai')
}

const getdata = async (req,res) => {
    let data = await Author.find().populate('getpost')
    console.log(data[1].getpost);
    res.send('succ')
}

const createuser = async (req,res) => {
  
    res.send('succ')
}

module.exports =  {
    insert : insert,
    getdata : getdata,
    createuser:createuser
}