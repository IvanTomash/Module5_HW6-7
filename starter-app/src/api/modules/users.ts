import { IUser } from "../../interfaces/users";
import apiClient from "../client";

export const getById = (id: string) => apiClient({
  path: `users/${id}`,
  method: 'GET'
})

export const getByPage = (page: number) => apiClient({
  path: `users?page=${page}`,
  method: 'GET'
})

export const updateUser = (user: IUser) => apiClient({
  path: `users/${user.id}`,
  method: `POST`,
  data: user,
})

export const createUser = (user: IUser) => apiClient({
  path: `users`,
  method: `POST`,
  data: user,
})

