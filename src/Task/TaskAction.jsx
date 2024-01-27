import { useContext, useState } from "react";

import { TaskContext } from "../context/api";

// eslint-disable-next-line react/prop-types
export default function TaskAction({ onSearch }) {
  const { dispatch } = useContext(TaskContext);

  function handleAddClick() {
    dispatch({ type: "SHOW_ADD_MODAL", payload: null });
  }

  function handleDeleteAllClick() {
    dispatch({ type: "DELETE_ALL_TASKS" });
  }

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <form>
            <div className="flex">
              <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                  placeholder="Search Task"
                  value={searchTerm}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                  onClick={handleSubmit}
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={handleAddClick}
          >
            Add Task
          </button>
          <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleDeleteAllClick}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
}
