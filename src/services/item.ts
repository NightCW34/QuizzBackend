import ItemModel from "../models/items";
import { Question } from "../interfaces/questions.interface";

const insertQuestion = async (item: Question) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getQuestions = async () => {
  const responseItem = await ItemModel.find({}).limit(10);

  const responseRandomItem = responseItem.sort(() => Math.random() - 0.5);

  return responseRandomItem;
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
