import { Grid, Card, CardContent, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getPosts } from "../services/posts.service";
import { GetPostResponseDto, GetPostsParams } from "../types";

const Me = ({user, isAuthenticated, loginWithRedirect, getAccessTokenSilently}: {user: any, isAuthenticated: boolean, loginWithRedirect: any, getAccessTokenSilently: any}) => {
    const [posts, setPosts] = useState(Array<GetPostResponseDto>);

    useEffect(() => {
        console.log("howdy");
        const wrapper = async () => {
            let token = await getAccessTokenSilently();
            return await getPosts(new GetPostsParams(token));
        }

        wrapper()
            .then(getPostsResponseDto => {
                console.log(getPostsResponseDto);
                setPosts(getPostsResponseDto.posts);
            })
    }, [])

    return (
        isAuthenticated ?
        <>
            <h2>{user?.name}'s Posts</h2>  
            <Box component="div" maxHeight="700px" overflow="auto">
                {posts.map((item, _) => (
                    <>
                    <Grid container rowSpacing={1} columnSpacing={2} p={1}>
                        <Grid item>
                            <Card>
                                <CardContent>
                                    <h3>{item.title}</h3>
                                    <h4>{item.description}</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <br/>
                    </>
                ))}
            </Box>
        </>
        :
        <>
            {loginWithRedirect()}
        </>
    )
}

export default Me;