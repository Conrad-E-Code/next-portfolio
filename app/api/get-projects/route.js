export const DELETE = async (req, {id}) => {

    try {
       const  myDelete = await fetch(`http://localhost:3001/api/projects/${id}`, {
            method: "DELETE",
        })
        const data = await myDelete.json()
        console.log(data, "MY DEWLDATA");
        return new Response(JSON.stringify({"deleted": data}), { status: 200 });
    }
    catch (error) {
        console.log(error, "MY ERROR get-projects");
        return new Response(JSON.stringify({ error: error }), {
            status: 500,
        });
    }
}