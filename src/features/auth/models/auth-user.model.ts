// import type { UserRole } from "../types/auth.types";
import type { Role } from "@/config/roles";
export interface AuthUser {
  id: number;

  username: string;

  email: string;

  fullName: string;

  image: string;

  role: Role;
}