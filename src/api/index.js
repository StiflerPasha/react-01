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
	 async getProfile(id) {
			let response = await instance.get(`profile/${id}`);
			return response.data
	 },
};

export const authAPI = {
	 async getAuth() {
			let response = await instance.get(`auth/me`);
			return response.data
	 },
};