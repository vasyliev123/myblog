
export async function getPostsDetails(id: string) {
    const p = (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`))

    const post = await p.json();
    
    return post;
}