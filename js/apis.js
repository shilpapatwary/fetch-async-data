export async function getUserComments () {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userResponse.json();
    const userCommentsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const comments = await userCommentsResponse.json();
    if (userResponse.errors || userCommentsResponse.errors) throw Error('error');
    return {
        user, comments
    };
} 