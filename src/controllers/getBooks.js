const { db } = require("../firebase");

const getBooks = async (req, res) => {
  try {
    const results = await db.collection("books").get();

    const books = results.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (books.length) {
      return res.send({
        data: books,
      });
    } else {
      res.status(400).send("libro no encontrado");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBooks;
