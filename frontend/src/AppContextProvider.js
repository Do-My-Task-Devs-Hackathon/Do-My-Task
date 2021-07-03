import http from "./http-common";

class AppContextProvider {

  //Task routes
  async getAllTask() {
      const data = await http.get("/api/tasks/");
    return data;
  }

  async getTask(id) { // accepts Task's id
      const data = await http.get("/api/tasks/find/"+id);
    return data;
  }

  async create(data) { // JSON with user_id, title, description
    return http.post("/api/tasks/create", data);
  }

  

//   get(id) {
//     return http.get(/tutorials/${id});
//   }

//   update(id, data) {
//     return http.put(/tutorials/${id}, data);
//   }

//   delete(id) {
//     return http.delete(/tutorials/${id});
//   }

//   deleteAll() {
//     return http.delete(/tutorials);
//   }

//   findByTitle(title) {
//     return http.get(/tutorials?title=${title});
//   }
}

export default new AppContextProvider();