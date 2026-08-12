export const ROUTES = {
 
  APP: "/",

  LOGIN: "/login",

  
  DASHBOARD: "/dashboard",

  USERS: "/users",

  USER_DETAIL: "/users/:userId",

  CREATE_USER: "/users/new",

  EDIT_USER: "/users/:userId/edit",

  WORK_ITEMS: "/work-items",

  CREATE_WORK_ITEM: "/work-items/new",

  WORK_ITEM_DETAIL: "/work-items/:id",

  EDIT_WORK_ITEM: "/work-items/:id/edit",

  PROFILE: "/profile",

  SETTINGS: "/settings",

  FORBIDDEN: "/forbidden",

  NOT_FOUND: "*",
} as const;