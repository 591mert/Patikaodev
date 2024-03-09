import axios from "axios";
export default async function getUserWithPosts(userId) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  user.posts = posts;
  return user;
}
const user = await getUserWithPosts(1);
console.log(user);
