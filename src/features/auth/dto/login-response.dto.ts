
export interface LoginResponseDto {
  id: number;
  username: string;
  email: string;

  firstName: string;
  lastName: string;

  image: string;

  

  accessToken: string;
  refreshToken: string;
}