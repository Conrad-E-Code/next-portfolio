import { Schema, model, models } from "mongoose";

const ConBlogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
    },
    content: {
        type: String,
        required: [true, "Body is required!"],
    }
});

const ConBlog = models.ConBlog || model("ConBlog", ConBlogSchema);

export default ConBlog;