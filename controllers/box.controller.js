const Box = require("../models_print/print.box.model");

exports.boxAdmin = (req, res) => {
  console.log("req.body---> ", req.body);

  res.status(200).json({
    role: "Admin",
    boxWidth: req.body.boxWidth,
    boxHigh: req.body.boxHigh,
    boxDepth: req.body.boxDepth,
  });
};

exports.boxUser = (req, res) => {
  console.log("req.body---> ", req.body);

  res.status(200).json({
    role: "User",
    boxWidth: req.body.boxWidth,
    boxHigh: req.body.boxHigh,
    boxDepth: req.body.boxDepth,
  });
};

exports.boxAll = (req, res) => {
  console.log("req.body---> ", req.body);

  res.status(200).json({
    role: "All",
    boxWidth: req.body.boxWidth,
    boxHigh: req.body.boxHigh,
    boxDepth: req.body.boxDepth,
  });
};

// exports.saveBoxSpec = (req, res) => {
//   console.log("req.body---> ", req.body);
//   const Box = new BOX({
//     boxWidth: req.body.boxWidth,
//     boxHigh: req.body.boxHigh,
//     boxDepth: req.body.boxDepth,
//     pattern: req.body.pattern,
//   });
//   Box.save((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//   });

//   console.log("Box--> ", Box);
//   res.status(200).json(Box);
// };

exports.saveBoxSpec = async (req, res) => {
  let { boxWidth, boxHigh, boxDepth, pattern, A, B, spec, type } = req.body;
  try {
    let box = new Box({
      boxWidth,
      boxHigh,
      boxDepth,
      pattern,
      A,
      B,
      spec,
      type,
    });
    let newBox = await box.save();
    res.status(200).json({
      status: "Success",
      data: box,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
