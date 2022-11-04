exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  // CHECK-----> HEADER
  console.log("user.controller req body---> ", req.body);
  console.log("user.controller req header---> ", req.headers);
  console.log("user.controller req Header cookies---> ", req.headers.cookie);
  console.log("user.controller req Header token---> ", req.headers.token);
  console.log("user.controller req Header host---> ", req.headers.host);
  console.log("user.controller req query params---> ", req.query.data);
  console.log(
    "user.controller req.headers.authorization",
    req.headers.authorization
  );

  // Bearer token
  if (req.headers.authorization.split(" ")[0] === "Bearer") {
    const token_Bearer = req.headers.authorization.split(" ")[1];
    console.log("user.controller Bearer Token---> ", token_Bearer);
  }

  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.box = (req, res) => {
  console.log("req.body---> ", req.body);
  res.status(200).send("Box.");
};
