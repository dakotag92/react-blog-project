import { Container } from "react-bootstrap";

export default function Posts() {
  const posts = [
    {
      id: 1,
      text: "post 1",
      timestamp: "a minute ago",
      author: {
        username: "user1",
      },
    },
    {
      id: 2,
      text: "post 2",
      timestamp: "2 minutes ago",
      author: {
        username: "user2",
      },
    },
  ];

  return (
    <Container fluid className="App">
      {posts.length === 0 ? (
        <p>There are no blog posts</p>
      ) : (
        posts.map((post) => {
          return (
            <p key={post.id}>
              <b>{post.author.username}</b>&mdash;
              {post.timestamp}
              <br />
              {post.text}
            </p>
          );
        })
      )}
    </Container>
  );
}
