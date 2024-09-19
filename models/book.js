import mongoose from "mongoose";

const book = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
  },
  author: {
    type: String,
  },
  pages: {
    type: String,
  },
  img: {
    type: String,
  },
});

const Book = new mongoose.model("book", book);

export default Book;
