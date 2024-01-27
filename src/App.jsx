import { useReducer } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskeBoard from "./Task/TaskBoard";
import { initialState, taskReducer } from "./reducer/TaskReducer";
import { TaskContext } from "./context/api";


export default function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <>
    <TaskContext.Provider value={{state,dispatch}}>
    <Header />
    <Hero />
    <TaskeBoard />
    <Footer />
    </TaskContext.Provider>
    </>
  )
}
