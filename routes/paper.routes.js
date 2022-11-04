const { authJwt } = require("../middlewares");
const InsertPaper = require("../controllers/paper.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post(
    "/api/admin/insert",
    [authJwt.verifyToken, authJwt.isAdmin], // Admin only
    InsertPaper.savePaperSpec
  );

  app.get(
    "/api/admin/paper",
    [authJwt.verifyToken, authJwt.isModerator], // Admin + Moderator
    InsertPaper.getAllPaperSpec
  );

  // app.post(
  //   "/api/admin/saveBoxSpec",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   InsertPaper.saveBoxSpec
  // );
};
