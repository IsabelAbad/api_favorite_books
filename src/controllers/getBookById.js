const { db } = require("../firebase");

const getBookById = async (req, res) => {
  const results = await db.collection("books").doc(req.params.id).get();

  const book = {
    id: results.id,

    ...results.data(),
  };

  return res.send({
    status: "ok",
    data: book,
  });
};

module.exports = getBookById;
