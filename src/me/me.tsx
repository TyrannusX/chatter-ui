import { Grid, Card, CardContent, Container, Box, Accordion, AccordionDetails, AccordionSummary, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { getPosts } from "../services/posts.service";
import { ChatterComponentParams, GetPostResponseDto, GetPostsParams } from "../types";

const Me = (chatterComponentParams: ChatterComponentParams) => {
    const [posts, setPosts] = useState(Array<GetPostResponseDto>);

    useEffect(() => {
        console.log("howdy");
        const wrapper = async () => {
            let token = await chatterComponentParams.getAccessTokenSilently();
            return await getPosts(new GetPostsParams(token));
        }

        wrapper()
            .then(getPostsResponseDto => {
                console.log(getPostsResponseDto);
                setPosts(getPostsResponseDto.posts);
            })
    }, [])

    return (
        chatterComponentParams.isAuthenticated ?
        <>
            <Grid container columnSpacing={2}>
                <Grid item xs={6}>
                <h2>{chatterComponentParams.user?.name}'s Posts</h2>  
                    <Box component="div" maxHeight="700px" overflow="auto">
                        <Grid container rowSpacing={4} columnSpacing={1}>
                            {posts.map((item, _) => (
                                <>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <h3>{item.title}</h3>
                                                <h4>{item.description}</h4>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <h2>{chatterComponentParams.user?.name}'s Settings</h2>
                    <Accordion>
                        <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            Feed
                        </AccordionSummary>
                        <AccordionDetails>
                            <h4>Ads<Checkbox title="Ads" /></h4>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>
        :
        <>
            {chatterComponentParams.loginWithRedirect()}
        </>
    )
}

export default Me;