


// type Post = {
//     title: string;
//     content: string;
// };

// export default function Post({params} :{
//     params: { postId: string }
// }) {
//     const post: Post = (fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)).
//     then((p) => p.json());
//     console.log(post);
     
//     return (
//         <div className="h-screen p-40">
//             <h1>{post.title}</h1>
//             <p>{post.content}</p>
//         </div>
//     );
// }