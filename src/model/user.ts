export type User = {
  first_name: string;
  last_name: string;
  email: string;
  status?: UserStatus;
};

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export const getUserStatusFromString = (
  string: string,
): UserStatus | undefined => {
  switch (string.toLowerCase()) {
    case "active":
      return UserStatus.ACTIVE;
    case "inactive":
      return UserStatus.INACTIVE;
    default:
      return undefined;
  }
};
