const express = require("express");

const getBooks = require("../controllers/getBooks");
const getBookById = require("../controllers/getBookById");

const postBook = require("../controllers/postBook");

const deleteBook = require("../controllers/deleteBook");
const bookUpdate = require("../controllers/bookUpdate");

const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);

router.post("/books", postBook);

router.put("/books/:id", bookUpdate);

router.delete("/deletebooks/:id", deleteBook);

module.exports = router;
