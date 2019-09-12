const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*connect user to post 
-- they can only delete their own post
-- show which user created the post
*/
const PostSchema = new Schema({
  user: {
    // reference each post to the user
    type: Schema.Types.ObjectId, // show who pest
    ref: 'usres' // connect user to the post
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId, // shows who did the like
        ref: 'users'
      }
    }
  ],
  comments: [
    // every comments need info below
    {
      user: {
        type: Schema.Types.ObjectId, // shows who wrote the comment
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
