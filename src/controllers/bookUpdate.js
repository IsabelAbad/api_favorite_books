const { db } = require("../firebase");

const bookUpdate = async (req, res) => {
  const newData = req.body;
  await db.collection("books").doc(req.params.id).update(newData);

  const results = await db.collection("books").get();

  const books = results.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.status(200).send({
    status: "ok",
    message: `El libro con id: ${req.params.id} ha sido modificado correctamente.`,
    data: books,
  });
};

module.exports = bookUpdate;
