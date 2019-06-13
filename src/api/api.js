import * as axios from "axios";

export const usersAPI = {
	 getUsers(currentPage = 1, pageSize = 5) {
			return axios.get(`https://randomuser.me/api/?page=${currentPage}&results=${pageSize}&seed=foobar`)
			.then(response => response.data.results)
	 }
};