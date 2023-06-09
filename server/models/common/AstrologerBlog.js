const mongoose = require("mongoose");
const AstrologerBlog = new mongoose.Schema({

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    title: {
        type: String,
        require: String,
    },
    description: {
        type: String,
        require: String,
    },
    courseURL: {
        type: String,
        require: String,
    },
    coverImage: {
        type: String,
    },
    thumbnilImage: {
        type: String,
    },
    category: {
        type: String,
        require: String,
    },
    tags: [{
        type: String
    }]

},
    { timestamps: true }
)
module.exports = mongoose.model("AstrologerBlog", AstrologerBlog);
