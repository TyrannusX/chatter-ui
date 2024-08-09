export const getPosts = async ({token}: {token: String}) => {
    console.log(token)
    return await fetch("http://localhost:8000/posts",{
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}