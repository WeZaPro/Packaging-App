const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  CodePaper: {
    type: String,
    //required: true,
  },
  paperType: {
    type: String,
    //required: true,
  },

  paperName: {
    type: String,
    //required: true,
  },
  paperBrand: {
    type: String,
    //required: true,
  },
  paperGrams: {
    type: Number,
    //required: true,
  },
  paperWidth: {
    // inch
    type: Number,
    //required: true,
  },
  paperHigh: {
    // inch
    type: Number,
    //required: true,
  },
  paperColor: {
    type: String,
    //required: true,
  },

  time: { type: Date, default: Date.now },
});

const Paper = mongoose.model("Paper", paperSchema);
module.exports = Paper;
