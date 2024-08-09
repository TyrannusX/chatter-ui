import { Grid, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { getPosts } from "../services/posts.service";

const Me = ({user, isAuthenticated, loginWithRedirect, getAccessTokenSilently}: {user: any, isAuthenticated: boolean, loginWithRedirect: any, getAccessTokenSilently: any}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            let token = await getAccessTokenSilently();
            return await getPosts({token: token});
        }

        wrapper()
            .then(response => {
                console.log(response.json().then(obj => setPosts(obj.posts)))
            })
    }, [])

    return (
        isAuthenticated ?
        <>
            <h2>{user?.name}'s Posts</h2>
            {posts.map((item, _) => (
                <>
                <Grid container rowSpacing={1} columnSpacing={2}>
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
        </>
        :
        <>
            {loginWithRedirect()}
        </>
    )
}

export default Me;