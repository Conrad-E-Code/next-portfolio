import { connectToDBBlogs } from "/utils/database";
import ConBlog from "/models/conBlog";

//ROUTE HANDLER
export const GET = async (req) => {
    try {

            await connectToDBBlogs();
            const blogs = await ConBlog.find({});
            return new Response(JSON.stringify(blogs), {
                status: 200,
            });
    } catch (error) {
        return new Response(JSON.stringify({"error": error}), {status: 500})
    }
};
