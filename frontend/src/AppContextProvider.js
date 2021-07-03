import http from "./http-common";

class AppContextProvider {
  async getAll() {
      const data = await http.get("/api/tasks/");
    return data;
  }

//   get(id) {
//     return http.get(/tutorials/${id});
//   }

  create(data) {
    return http.post("/api/tasks/create", data);
  }

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