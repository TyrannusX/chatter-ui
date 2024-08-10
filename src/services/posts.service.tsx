import { GetPostsParams, GetPostsResponseDto } from "../types"

const baseServiceUrl = import.meta.env.VITE_BASESERVICEURL;

export const getPosts = async (getPostParams: GetPostsParams): Promise<GetPostsResponseDto> => {
    console.log(getPostParams.token)
    let response: Response = await fetch(`${baseServiceUrl}/posts`,{
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${getPostParams.token}`
        }
    });
    
    return await response.json();
}