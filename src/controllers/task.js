import Task from "../models/task";

export const getAllTask = async (req, res) => {
  try {
    const { projectId } = req.query;
    if (projectId) {
      console.log("projectId", projectId);
      const tasks = await Task.find({ projectId })
        .populate({
          path: "watcher",
          populate: {
            path: "userId",
          },
        })
        .populate("projectId");
      res.status(200).json({
        success: true,
        tasks,
      });
    } else {
      const tasks = await Task.find({})
        .populate("projectId")
        .populate({
          path: "watcher",
          populate: {
            path: "userId",
          },
        });
      res.status(200).json({
        success: true,
        tasks,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createTask = async (req, res) => {
  const { nameTask } = req.body;
  if (!nameTask) {
    return res
      .status(404)
      .json({ success: false, message: "name task is required" });
  }
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(200).json({
      success: true,
      message: "Task saved successfully",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateTask = async (req, res) => {
  const { nameTask } = req.body;
  if (!nameTask) {
    return res
      .status(404)
      .json({ success: false, message: "name task is required" });
  }
  try {
    const UpdateConditions = { _id: req.params.id, userId: req.userId };
    const updateTask = await Task.findOneAndUpdate(UpdateConditions, req.body, {
      new: true,
    });
    if (!updateTask) {
      return res.status(401).json({
        success: false,
        message: "User not authorised to update Task",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User updated Task successfully",
      task: updateTask,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const DeleteConditions = { _id: req.params.id, userId: req.userId };
    const deleteTask = await Task.findOneAndDelete(DeleteConditions);
    if (!deleteTask) {
      return res.status(401).json({
        success: false,
        message: "User not authorised to delete Task",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Delete Product successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
