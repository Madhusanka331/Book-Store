const express = require ('express');
const { getAllBooks, addBooks, getBook, updateBook, deleteBook } = require('../controllers/book.controller');
const router = express.Router();


router.post("/", addBooks);
router.get("/", getAllBooks);
router.get("/:id", getBook);
router.put("/:bookId", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;