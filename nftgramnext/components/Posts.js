import Post from "./Post";

const posts = [
  {
    id: '123', 
    username: 'chris_rappa',
    userImg: 'https://res.cloudinary.com/djrbfvpit/image/upload/v1634601289/vrdevfulllogo_k7kbp4.png',
    img: 'https://res.cloudinary.com/djrbfvpit/image/upload/v1634601289/vrdevfulllogo_k7kbp4.png',
    caption: "Subscribe and Like",
  },
  {
    id: '123', 
    username: 'chris_rappa',
    userImg: 'https://res.cloudinary.com/djrbfvpit/image/upload/v1634601289/vrdevfulllogo_k7kbp4.png',
    img: 'https://res.cloudinary.com/djrbfvpit/image/upload/v1634601289/vrdevfulllogo_k7kbp4.png',
    caption: "Subscribe and Like",
  }
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post 
        key = {post.id} 
        id = {post.id}
        username = {post.username}
        userImg = {post.userImg}
        img = {post.img}
        caption = {post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
