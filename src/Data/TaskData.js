const TaskAllData=[
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
    
]

function getAllTaskData() {
    return TaskAllData;
}

export { getAllTaskData };