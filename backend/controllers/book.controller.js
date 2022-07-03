const Book = require("../model/Book.model");

const addBooks = async (req, res) => {
    try{
        const {name, author, description, price, available, image} = req.body;
        const book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
        })
        await book.save();
        return res.status(201).json({book});
    } catch (error){
        return res.status(500).json({message: error.message});
    }
}

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ books });
};

const getBook = async (req, res) => {
    try{
        const id = req.params.id;
        const book = await Book.findById(id);
        return res.status(200).json({book});
    }catch(error) {
        return res.status(404).json({message: error.message});
    }
}

const updateBook = async (req, res) => {
    try{
        const bookId = req.params.bookId;
        const {name, author, description, price, available, image} = req.body;
        const book = await Book.findByIdAndUpdate(bookId, {
            name,
            author,
            description,
            price,
            available,
            image,
        })
        await book.save();
        return res.status(200).json({ book });
    }catch(error){
        return res.status(404).json({message: error.message});
    }
}

const deleteBook = async (req, res) => {
    try{
        const id = req.params.id;
        const book = await Book.findByIdAndRemove(id)
        return res.status(200).json({message:"Successfully deleted"});
    } catch(error){
        return res.status(404).json({message: error.message})
    }
}
module.exports = {
    getAllBooks,
    addBooks,
    getBook,
    updateBook,
    deleteBook
    
}