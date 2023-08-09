import { Schema, model, models } from "mongoose";

const SpinCountSchema = new Schema({
    amount: {
        type: Number,
        required: [true, "Spincount is required!"],
    },
    skill: {
        type: String,
        required: [true, "Skill is required!"],
    }
});

const SpinCount = models.SpinCount || model("SpinCount", SpinCountSchema);

export default SpinCount;