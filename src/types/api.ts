export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
}
