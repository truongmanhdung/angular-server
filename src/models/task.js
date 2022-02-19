import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;
const taskSchema = new mongoose.Schema(
  {
    nameTask: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    assignee: {
      type: ObjectId,
      ref: "Users",
    },
    watcher: [
        {
            userId: {
                type: ObjectId,
                ref: "Users"
            }   
        }
    ],
    timeStart: {
      type: Date,
      default: new Date(),
    },
    projectId: {
      type: ObjectId,
      ref: "projects",
    },
  },
  { timestamps: true }
);

export default mongoose.model("tasks", taskSchema);
