var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  question: String,
  description: String,
  votes: {type: Number, default: 0},
  
});

mongoose.model('Post', PostSchema);