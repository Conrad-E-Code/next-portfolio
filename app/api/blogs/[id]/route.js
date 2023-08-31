import { connectToDBBlogs } from "/utils/database";
import ConBlog from "/models/conBlog";

//ROUTE HANDLER
export const GET = async (req, {params}) => {
    console.log(params)
    try {



             await connectToDBBlogs();
             const blog = await ConBlog.findOne({_id: params.id});
             return new Response(JSON.stringify(blog), {
                status: 200,
             });
    } catch (error) {
        return new Response(JSON.stringify({"error": error}), {status: 500})
    }
};
