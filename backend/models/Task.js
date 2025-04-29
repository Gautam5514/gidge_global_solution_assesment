import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
    title: String,
    description: String,
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
});

export default mongoose.model('Task', taskSchema);