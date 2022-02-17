import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    teamSize: {
        type: Number
    },
    startDate: {
        type: String,
        default: new Date()
    },
    endDate: {
        type: String,
        default: new Date()
    },
    project_money: {
        type: Number,
        default: 1000000
    }
}, { timestamps: true });


export default mongoose.model('projects', projectSchema);