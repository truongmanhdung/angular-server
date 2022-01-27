import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    teamSize: {
        type: String
    },
    startDate: {
        type: Date,
        default: new Date()
    },
    endDate: {
        type: Date,
        default: new Date()
    },
    project_money: {
        type: Number,
        default: 1000000
    }
}, { timestamps: true });


export default mongoose.model('projects', projectSchema);