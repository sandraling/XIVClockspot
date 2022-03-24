import mongoose from "mongoose";
import { IDuty } from "../types";

const DutySchema = new mongoose.Schema({
    type: Number,
    expansion: Number,
    name: String,
    abbreviation: String
}, {
    collection: "duties"
});

export const Duty = mongoose.models.Duty || mongoose.model<IDuty>("Duty", DutySchema);