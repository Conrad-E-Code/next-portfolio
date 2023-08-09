import { connectToDBSpins } from "../../../utils/database";
import SpinCount from "../../../models/spinCount";


export const POST = async (req, ) => {
    const {amount, skill} = await req.json();
    try {
            await connectToDBSpins();
            const spins = await SpinCount.findOne({skill: skill});

            if (!spins) {
                console.log("NO SPINS FOUND");
                const newSpin = new SpinCount({
                    amount: 10,
                    skill: skill
                });
                await newSpin.save();
                return new Response(JSON.stringify(newSpin), { status: 201 });
            }
            spins.amount = spins.amount + amount
            await spins.save();
            return new Response(JSON.stringify(spins), {
                status: 200,
            });
    } catch (error) {
        console.log(error, "POST error spins route");
    }
};
