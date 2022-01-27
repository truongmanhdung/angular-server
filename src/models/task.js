import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const taskSchema = new mongoose.Schema({
    nameTask: {
        type: String,
        required: true,
    },
    des: {
        type: String
    },
    timeStart: {
        type: Date,
        default: new Date(),
    },
    timeEnd: {
        type: Date,
        default: new Date(),
    },
    projectId: {
        type: ObjectId,
        ref: 'projects'
    }
}, { timestamps: true });


export default mongoose.model('tasks', taskSchema);