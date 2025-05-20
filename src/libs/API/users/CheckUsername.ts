import request from "../Request";

export default async function checkUsername(username: any) {
    const data = await request("/users/auth/check", {
        method: "POST",
        data: { username }
    });
    
    return data;
}