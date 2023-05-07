"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.updateQuestion = exports.getQuestion = exports.getQuestions = exports.insertQuestion = void 0;
const items_1 = __importDefault(require("../models/items"));
const insertQuestion = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield items_1.default.create(item);
    return responseInsert;
});
exports.insertQuestion = insertQuestion;
const getQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield items_1.default.find({}).limit(10);
    const responseRandomItem = responseItem.sort(() => Math.random() - 0.5);
    return responseRandomItem;
});
exports.getQuestions = getQuestions;
const getQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield items_1.default.findOne({ _id: id });
    return responseItem;
});
exports.getQuestion = getQuestion;
const updateQuestion = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield items_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return responseItem;
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield items_1.default.remove({ _id: id });
    return responseItem;
});
exports.deleteQuestion = deleteQuestion;
