import { ROUTES } from "@/shared/constants/routes";

import type { AppRoute } from "./types";

import {
  LoginPage,
  DashboardPage,
  UserListPage,
  UserDetailPage,
  CreateUserPage,
  EditUserPage,
  WorkItemsPage,
  ProfilePage,
  SettingsPage,
  ForbiddenPage,
  NotFoundPage,
  CreateWorkItemPage,
  EditWorkItemPage,
} from "./lazy";

import { PERMISSIONS } from "@/config/permissions";

export const publicRoutes: AppRoute[] = [
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
  },
];

export const protectedRoutes: AppRoute[] = [
  {
    path: "dashboard",
    component: DashboardPage,
    permissions: [
      PERMISSIONS.DASHBOARD.READ,
    ],
    navigation: {
      label: "Dashboard",
    },
  },

  {
    path: "users",
    component: UserListPage,
    permissions: [
      PERMISSIONS.USERS.READ,
    ],
    navigation: {
      label: "Users",
    },
  },

  {
    path: "users/:userId",
    component: UserDetailPage,
    permissions: [
      PERMISSIONS.USERS.READ,
    ],
  },

  {
    path: "users/new",
    component: CreateUserPage,
    permissions: [
      PERMISSIONS.USERS.CREATE,
    ],
  },

  {
    path: "users/:userId/edit",
    component: EditUserPage,
    permissions: [
      PERMISSIONS.USERS.UPDATE,
    ],
  },

  {
    path: "work-items",
    component: WorkItemsPage,
    permissions: [
      PERMISSIONS.WORK_ITEMS.READ,
    ],
    navigation: {
      label: "Work Items",
    },
  },

  {
    path: "work-items/new",
    component: CreateWorkItemPage,
    permissions: [
      PERMISSIONS.WORK_ITEMS.CREATE,
    ],
  },

  {
    path: "work-items/:id/edit",
    component: EditWorkItemPage,
    permissions: [
      PERMISSIONS.WORK_ITEMS.UPDATE,
    ],
  },

  {
    path: "profile",
    component: ProfilePage,
    permissions: [
      PERMISSIONS.PROFILE.READ,
      PERMISSIONS.PROFILE.UPDATE,
    ],
    navigation: {
      label: "Profile",
    },
  },

  {
    path: "settings",
    component: SettingsPage,
    permissions: [
      PERMISSIONS.SETTINGS.READ,
      PERMISSIONS.SETTINGS.UPDATE,
    ],
    navigation: {
      label: "Settings",
    },
  },
];

export const errorRoutes: AppRoute[] = [
  {
    path: ROUTES.FORBIDDEN,
    component: ForbiddenPage,
  },

  {
    path: ROUTES.NOT_FOUND,
    component: NotFoundPage,
  },
];