const initialState = {
    tasks: [
        {
            id: crypto.randomUUID(),
            title: "Learn Reacts",
            description:
              "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
            tags: ["web", "react", "js"],
            priority: "High",
            isFavorite: true,
          },
          {
            id: crypto.randomUUID(),
            title: "Learn GraphQul",
            description:
              "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
            tags: ["web", "GraphQul", "js"],
            priority: "High",
            isFavorite: true,
          },
        
          {
            id: crypto.randomUUID(),
            title: "Graphic",
            description:
              "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
            tags: ["web", "GraphQul", "js"],
            priority: "High",
            isFavorite: false,
          },
    ],
    showAddModal: false,
    taskToUpdate: null,
    searchTerm: ""
  };
  
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          showAddModal: false
        };
      case "EDIT_TASK":
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? action.payload : task
          ),
          showAddModal: false,
          taskToUpdate: null
        };
      case "SHOW_ADD_MODAL":
        return {
          ...state,
          showAddModal: true,
          taskToUpdate: action.payload
        };
      case "CLOSE_ADD_MODAL":
        return {
          ...state,
          showAddModal: false,
          taskToUpdate: null
        };
      case "DELETE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case "DELETE_ALL_TASKS":
        return {
          ...state,
          tasks: []
        };
      case "TOGGLE_FAVORITE":
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload
              ? { ...task, isFavorite: !task.isFavorite }
              : task
          )
        };
        case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
      default:
        return state;
    }
  };


  export {
    initialState,
    taskReducer
}