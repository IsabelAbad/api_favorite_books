const { db } = require("../firebase");

const postBook = async (req, res) => {
  const { title, author, synopsis, book_id } = req.body;

  await db.collection("books").add({ title, author, synopsis, book_id });

  res.status(200).send({
    status: "ok",
    message: "Nuevo libro creado con éxito",
  });
};

module.exports = postBook;
