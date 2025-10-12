const mongoose = require("mongoose");

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    required: true,
  },
  noteDescription: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["HIGH", "LOW", "MEDIUM"],
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
  dateUpdated: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
