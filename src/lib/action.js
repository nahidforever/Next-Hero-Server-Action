export const createTask = async (formData) => {
  "use server";

  // const title = formData.get('title');
  // const description = formData.get('description');
  // const priority = formData.get('priority');
  // const status = formData.get('status');
  // const assignedTo = formData.get('assignedTo');

  // const newTask = {title, description, priority, status, assignedTo};

  const newTask = Object.fromEntries(formData.fromEntries());
  
  console.log("Adding a task with name: ", newTask);
};
