import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
})

export const logIn = (authData) => API.post("/user/login", authData,console.log(authData));
export const signUp = (authData) => API.post("/user/signup", authData);

export const postQuestion = (questionData) =>API.post("/question/Ask", questionData, console.log(questionData));
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

export const voteQuestion = (id, value, userId) =>API.patch(`/questions/vote/${id}`, { value, userId });

export const postAnswer=(id, noOfAnswer, answerBody, userAnswered, userId)=>API.patch(`/answer/post/${id}`,{noOfAnswer,answerBody,userAnswered,userId,});
export const deleteAnswer = (id, answerId, noOfAnswer) =>API.patch(`/answer/delete/${id}`, { answerId, noOfAnswer });
