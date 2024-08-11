import { useLoaderData } from "react-router-dom";

export async function loader({params}: {params: any}) {
    const communityId = params.communityId
    return {communityId}
}

const Community = () => {
    const {communityId} = useLoaderData();

    return (
        <>
            <h1>Welcome to {communityId}</h1>
        </>
    )
}

export default Community