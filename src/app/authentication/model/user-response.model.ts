export interface UserResponseWrapper {
    message:string;
    data: UserResponse
}

interface UserResponse {
    roles: string[];
    token: string;
}