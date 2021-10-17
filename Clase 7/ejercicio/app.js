const express = require('express')
const http = require('http')
// const connection = require('./connection')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./connection')
const Blog = require('./models/blog')

// express app
const app = express()

app.listen( 3000 )

// conect to mongodb server
const dbURI = MONGO_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => console.log('connected to db'))
    .catch(error => console.error(error))

// create the model - class
 const firstPost = new Blog({
     title: 'this my the first post',
     snippet: "wow such a post",
     body: "very like incredible"
 })   

//  console.log(firstPost);

// save the post (everyonce you save the document)
//  firstPost.save()

// READ ALL
const consoleLoggearTodosLosPosts = async () => {

    const todosLosPosts = await Blog.find()
    console.log(todosLosPosts);

}
// consoleLoggearTodosLosPosts()
// console.log(consoleLoggearTodosLosPosts());

// READ ONE
// READ + FILTER
// READ + SORT
// READ + SORT + SKIP
// READ + SORT + SKIP + LIMIT
// DELETE




app.get('/', (req, res) => {
    res.redirect('/all-post')
})

app.get('/add-post', ( req, res ) => {
    const blog = new Blog({
        title: 'new post 2',
        snippet: 'about the blog',
        body: 'more about the blog'
    })

    blog.save()
        .then( result => res.send(result) )
        .catch( error => console.error(error) )
})


app.get('/all-post', ( req, res) => {
    Blog.find()
        .then( result => res.send( result ))
        .catch( error => console.error( error ))
})

app.get('/single-post', ( req, res) => {
    Blog.findById( "614a3d9cf00c22ca34d79b7b" )
        .then( result => res.send( result ) )
        .catch( error => console.error( error ))
})
