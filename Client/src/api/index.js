import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (authData) => API.post("/user/login",authData);

export const signUp = (authData) => API.post("/user/signup",authData);

export const postQuestion = (questionData) => API.post("/question/Ask",questionData ,console.log(questionData));

export const getAllQuestions = ()=> API.get('/questions/get');

export const postAnswer =(id, noOfAnswer,answerBody,userAnswered)=>API.patch(`/answer/post/${id}`,{ noOfAnswer,answerBody,userAnswered})