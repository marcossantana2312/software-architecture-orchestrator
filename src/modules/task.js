const axios = require ('axios');

const resolvers = {
  Query: {
    task: async (_, {taskId}, ctx) => {
      try {
        const user = ctx.auth.user;

        const {data} = await axios.get (
          `${process.env.TASK_URL}/${user.id}/task/${taskId}`
        );

        const {task} = data;

        return task;
      } catch (error) {
        throw new Error ('Não foi possível buscar a tarefa');
      }
    },
    tasks: async (_, args, ctx) => {
      try {
        const user = ctx.auth.user;

        const {data} = await axios.get (`${process.env.TASK_URL}/${user.id}`);

        const {tasks} = data;

        return tasks;
      } catch (error) {
        console.log (error);
        throw new Error ('Não foi possível buscar as tarefas');
      }
    },
  },
  Mutation: {
    createTask: async (_, {title, description}, ctx) => {
      const user = ctx.auth.user;

      try {
        const params = {
          title,
          description,
          userId: user.id,
        };
        const {data: task} = await axios.post (process.env.TASK_URL, params);
        return {
          success: !task.message,
          task,
          message: task.message || null,
        };
      } catch (error) {
        return {
          success: false,
          message: 'Não foi possivel cadastrar a tarefa',
        };
      }
    },
  },
};

export {resolvers};
