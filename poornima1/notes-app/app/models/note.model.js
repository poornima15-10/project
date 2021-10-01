const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    id:String,
    uid:String,
    title: String,
    content: String,
    isActive:Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);