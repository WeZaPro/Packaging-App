const mongoose = require("mongoose");

const boxSchema = new mongoose.Schema({
  boxCode: {
    type: String,
    //required: true,
  },
  boxType: {
    type: String,
    //required: true,
  },
  boxName: {
    type: String,
    //required: true,
  },
  spec: {
    depth: {
      type: Number,
      //required: true,
    },
    width: {
      type: Number,
      //required: true,
    },
    hight: {
      type: Number,
      //required: true,
    },
    insert: {
      type: Number,
      //required: true,
    },
    flap: {
      type: Number,
      //required: true,
    },
  },
  time: { type: Date, default: Date.now },
});

const Box = mongoose.model("Box", boxSchema);

module.exports = Box;
// sanple
// const boxSchema = new mongoose.Schema({
//   type: String,
//   pattern: [
//     {
//       type: String,
//     },
//   ],

//   spec: {
//     A: String,
//     B: String,
//     boxWidth: String,
//     boxHigh: String,
//     boxDepth: String,
//   },
//   time: { type: Date, default: Date.now },
// });

// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//     },
//     description: {
//       type: String,
//     },
//     price: {
//       type: String,
//     },
//     categoryId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Category",
//     },
//     sellerId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Seller",
//     },
//     discount: {
//       type: String,
//     },
//     status: {
//       type: String,
//       default: "active",
//       enum: ["active", "inactive", "deleted"],
//     },
//     images: {
//       type: Array,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
