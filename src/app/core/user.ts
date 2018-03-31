export interface Roles { // add roles using this pattern
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface PrivacyFlags { // used to control public visibility of fields
  email: boolean;
  displayName?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  photoURL?: boolean;
  favoriteColor?: boolean; // example of adding additional user information - remove me if not wanted
}

//NOTE fields added here must also be added to auth.service.updateUserData()
export interface User { // add additional user profile data here
  uid: string;
  email: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  photoURL?: string;
  roles: Roles;
  privFlags: PrivacyFlags;
  favoriteColor?: string;  // example of adding additional user information - remove me if not wanted
}
