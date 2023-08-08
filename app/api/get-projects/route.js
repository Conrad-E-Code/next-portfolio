export const POST = async (req, { params }) => {

    try {
        // console.log(params, "MY PARAMS");
        const {id} = await req.json();

       const  myDelete = await fetch(`https://project-microservice-api.vercel.app/api/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id})
        })
        const data = await myDelete.json()
        console.log(data, "MY DEL DATA");
        return new Response(JSON.stringify({"deleted": data}), { status: 200 });
    }
    catch (error) {
        console.log(error, "MY ERROR get-projects");
        return new Response(JSON.stringify({ error: error }), {
            status: 500,
        });
    }
}

export const GET = async (req) => {
    try {
        const res = await fetch("https://project-microservice-api.vercel.app/api/projects")
        const data = await res.json()
        console.log(data, "MY DATA get-proj");
        return new Response(JSON.stringify(data), { status: 200 });
    }
    catch (error) {
        console.log(error, "GET ERROR-get-projects")
}
}