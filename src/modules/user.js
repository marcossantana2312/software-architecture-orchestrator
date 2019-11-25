const axios = require ('axios');

const resolvers = {
//   Query: {
//     task: async (_, {taskId}, ctx) => {
//       try {
//         const user = ctx.auth.user;

//         const {data} = await axios.get (
//           `${process.env.TASK_URL}/${user.id}/task/${taskId}`
//         );

//         const {task} = data;

//         return task;
//       } catch (error) {
//         throw new Error ('Não foi possível buscar a tarefa');
//       }
//     },
//     tasks: async (_, args, ctx) => {
//       try {
//         const user = ctx.auth.user;

//         const {data} = await axios.get (`${process.env.TASK_URL}/${user.id}`);

//         const {tasks} = data;

//         return tasks;
//       } catch (error) {
//         console.log (error);
//         throw new Error ('Não foi possível buscar as tarefas');
//       }
//     },
//   },
  Mutation: {
    registerUserAuth: async (_, { email, name, password }, ctx) => {
      try {
        const params = {
          email,
          name,
          password
        };
        const { data } = await axios.post (`${process.env.AUTH_URL}/user`, params);
        return {
          success: !!data.message,
          message: data.message || data.error,
        };
      } catch (error) {
          console.log(error);
        return {
          success: false,
          message: 'Não foi possivel criar o usuário',
        };
      }
    },
    signin: async (_, { email, password}, ctx) => {
        try {
            const params = {
                email,
                password
            };
            const { data } = await axios.post(`${process.env.AUTH_URL}/signin`, params);
            console.log(data)
            return {
                success: !!data.jwtToken,
                message: data.message,
                token: data.jwtToken || null
            }
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: data.message || "Não foi possivel realizar o login"
            }
        }
    }
  },
};

export {resolvers};
