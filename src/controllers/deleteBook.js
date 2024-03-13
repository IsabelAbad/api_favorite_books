const { db } = require("../firebase");

const deleteBook = async (req, res) => {
  await db.collection("books").doc(req.params.id).delete();

  const results = await db.collection("books").get();

  const books = results.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).send({
    status: "ok",
    message: `El libro con id: ${req.params.id} y todos sus elementos relacionados fueron eliminados.`,
    data: books,
  });
};

module.exports = deleteBook;
