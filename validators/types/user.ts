// model User {
//   id         String @id @default(cuid())
//   email      String @unique
//   password   String
//   first_name String
//   last_name  String

//   createdAt   DateTime     @default(now())
//   updatedAt   DateTime     @updatedAt
//   session     Session[]
//   memberships Membership[]
// }

// export interface UserType {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   address: string;
//   state: string;
//   country: string;
//   avatar: string;
//   bio: string;
//   gender: string;
//   role: string;
//   is_verified: boolean;
//   two_factor_enabled: boolean;
//   is_oauth: boolean;
//   created_at: string;
//   profile_completed: boolean;
// }

export interface UserType {
  // id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
