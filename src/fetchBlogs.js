
/*
NEED TO MOVE THIS FILE TO server folder with blog schema 



*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const app = express();
const PORT = process.env.PORT || 3002; // Change the port to 3002
const dbURI = "mongodb+srv://1111:1111@wow.vszgprj.mongodb.net/beer-counter";

app.use(cors());
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Connected to database');
    app.listen(PORT, () => { // Corrected the port to PORT
      console.log(`Server is running on port ${PORT}`); // Corrected the log message
    });
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

app.use(express.json()); // Middleware to parse JSON bodies

// app.get('/api/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'Tom',
//     body: 'More about my new blog',
//     author: 'Tom Author',
//     beers: 13
//   });

//   blog.save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.error('Error saving blog:', err);
//       res.status(500).json({ error: 'Error saving blog' });
//     });
// });

app.post('/api/add-blog', (req, res) => {
    const { title, body, author, beers } = req.body;
  
    // Assuming you're receiving the title, body, author, and beers in the request body
  
    const blog = new Blog({
      title,
      body: "",
      author: "",
      beers: 0
    });
  
    blog.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error('Error saving blog:', err);
        res.status(500).json({ error: 'Error saving blog' });
      });
  });


app.get('/api/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.json(result); // Send the response as JSON
    })
    .catch((err) => {
      console.error('Error fetching blogs:', err);
      res.status(500).json({ error: 'Error fetching blogs' });
    });
});

app.put('/api/all-blogs/:id', (req, res) => {
    const id = req.params.id;
    const { beers } = req.body; // Assuming you're sending the updated beers value in the request body
  
    Blog.findByIdAndUpdate(id, { beers }, { new: true })
      .then(updatedBlog => {
        if (!updatedBlog) {
          return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(updatedBlog);
      })
      .catch(err => {
        console.error('Error updating blog:', err);
        res.status(500).json({ error: 'Error updating blog' });
      });
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
