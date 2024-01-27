import { useContext } from "react";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { TaskContext } from "../context/api";
import AddEditTaskModal from "./AddEditTaskModel";

export default function TaskeBoard() {
  const { state, dispatch } = useContext(TaskContext);
  const { tasks, showAddModal, taskToUpdate } = state;

  console.log("tasktoupdatetest-taskboard", taskToUpdate);


  const handleSearch = (searchTerm) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
  };

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddEditTaskModal
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/*TaskAction */}
          <TaskAction  onSearch={handleSearch}/>
          {/*TaskList */}
          <TaskList />
        </div>
      </div>
    </section>
  );
}
