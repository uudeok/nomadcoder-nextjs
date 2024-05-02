import { baseUrl } from '../app/(Home)/page';

async function getVideos(id) {
    console.log(`Fetching videos : ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error('something broke...');
    const response = await fetch(`${baseUrl}/${id}/videoss`);
    return response.json();
}

export default async function MovieVideos({ id }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}
