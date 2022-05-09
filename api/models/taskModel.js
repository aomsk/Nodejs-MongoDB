const mongoose = require('mongoose')

// const { Schema } = mongoose;

const taskSchema = new mongoose.Schema(
    {
        task1: {
            type: String,
            required: 'task1 cannot be blank'
        },
        task2: {
            type: String,
            required: 'task2 cannot be blank'
        }
    },
    { timestamps: true, versionKey: false },
    { collation: 'task' }
)

module.exports = mongoose.model('task', taskSchema);