import * as axios from "axios";

const instance = axios.create({
	 baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	 withCredentials: true,
	 /*headers: {
			"API-KEY": "21e9a884-937c-4030-846a-ee9be34dade6",
	 }*/
});

export const usersAPI = {
	 async getUsers(currentPage = 1, pageSize = 5) {
			let response = await instance.get(`users/?page=${currentPage}&count=${pageSize}`);
			return response.data
	 },
};

export const profileAPI = {
	 getProfile(id) {
			return instance.get(`profile/${id}`)
			.then(response => response.data)
	 },
};

export const authAPI = {
	 getAuth() {
			return instance.get(`auth/me`)
			.then(response => response.data)
	 },
};