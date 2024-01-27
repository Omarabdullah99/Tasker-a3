const TaskContext = createContext();

1.const initialState = {
  taskToUpdate: null,

2.case "SET_TASK_TO_UPDATE":
return { ...state, taskToUpdate: action.payload};