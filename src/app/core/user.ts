export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  role: Roles;
  // subscriber?: boolean;
  // editor?: boolean;
  // admin?: boolean;
  //favoriteColor?: string;  //example of adding additional user information
}
