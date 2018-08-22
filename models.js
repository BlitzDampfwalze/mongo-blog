const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//difference? const BlogPost = mongoose.model('BlogPost', {model object stuff here})
const blogSchema = new mongoose.Schema(
    {
        author: { 
            firstName: String, 
            lastName: String }, 
        title: {type: String}, 
        content: {type: String}, 
        created: {type: Date, default: Date.now} 
    }
);

blogSchema.virtual('authorName').get(function() {
    return `${this.author.firstName} ${this.author.lastName}`.trim();
    });

blogSchema.methods.serialize = function() {
    return {
        id: this._id,
        author: this.authorName,
        content: this.content,
        title: this.title,
        created: this.created
    };
};
const BlogPost = mongoose.model('BlogPost', blogSchema)
module.exports = { BlogPost };
