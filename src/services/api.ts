import axios from "axios";
import type { User } from "../types/api";
import { config } from "../config";

const apiClient = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

export const apiService = {
  // Get all users
  async getUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get<User[]>("/api/users");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  // Health check
  async healthCheck(): Promise<any> {
    try {
      const response = await apiClient.get("/api/health");
      return response.data;
    } catch (error) {
      console.error("Error checking health:", error);
      throw error;
    }
  },
};
