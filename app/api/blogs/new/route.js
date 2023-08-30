import { connectToDBBlogs } from "/utils/database";
import ConBlog from "/models/conBlog";


export const POST = async (req, ) => {
    const {content, title} = await req.json();
    try {
            await connectToDBBlogs();
            const blog = await ConBlog.findOne({title: title});

            if (!blog) {
                console.log("Blog title OK");
                const newBlog = new ConBlog({
                    content: content,
                    title: title
                });
                await newBlog.save();
                return new Response(JSON.stringify(newBlog), { status: 201 });
            }

            return new Response(JSON.stringify({message: "Choose a different title"}), {
                status: 403,
            });
    } catch (error) {
        console.log(error, "POST error blogs new route");
    }
};
