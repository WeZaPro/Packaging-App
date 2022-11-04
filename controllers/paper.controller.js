// insert วัตถุดิบ
// ค่าแรง + ต้นทุน + ค่าขนส่ง
// margin
// spec กระดาษ
const Paper = require("../models_print/paper.model");

// save paper
exports.savePaperSpec = async (req, res) => {
  // Check Type ถ้าซ้ำให้แจ้ง save ไม่ได้ PaperCode

  const paperCode = req.body.CodePaper;

  console.log("paperCode----> ", paperCode);
  Paper.findOne({ CodePaper: paperCode })
    .then((data) => {
      //res.send(data);
      if (!data) {
        console.log("Nodata----> ");
        const paper = new Paper({
          CodePaper: req.body.CodePaper,
          paperType: req.body.paperType,
          paperName: req.body.paperName,
          paperBrand: req.body.paperBrand,
          paperGrams: req.body.paperGrams,
          paperWidth: req.body.paperWidth,
          paperHigh: req.body.paperHigh,
          paperColor: req.body.paperColor,
        });

        paper.save(paper).then((data) => {
          res.send(data);
        });
      } else {
        res.send("ข้อมูลซ้ำ");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// get data
exports.getAllPaperSpec = async (req, res) => {
  const users = await Paper.find({});
  console.log(users);
  res.send(users);
};
