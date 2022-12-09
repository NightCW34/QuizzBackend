import ItemModel from "../models/items";
import { Question } from "../interfaces/questions.interface";

const insertQuestion = async (item: Question) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getQuestions = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getQuestion = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateQuestion = async (id: string, data: Question) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteQuestion = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });
  return responseItem;
};

export {
  insertQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
};
