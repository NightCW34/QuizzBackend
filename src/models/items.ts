import { Schema, Types, model, Model } from "mongoose";
import { Question } from "../interfaces/questions.interface";

const ItemSchema = new Schema<Question>(
  {
    category: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    correct_answer: {
      type: String,
      required: true,
    },
    incorrect_answers: [
      {
        required: true,
        type: String,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);

export default ItemModel;
