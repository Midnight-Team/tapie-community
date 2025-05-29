import Post from "../components/Post";

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          .posts {
            display: flex;
            flex-wrap: wrap;
            gap: 2vw;
            padding: 2vw;
          }
        `}
      </style>
      <section className="posts">
        {new Array(10).fill(null).map((_, index) => (
          <Post
            key={index}
            title={`Title${index + 1}`}
            content={`asdfasdfasdfasdfasdfasdfkjsasdfljkafsdjklsdakljfjkldsajklasljksdjklfadskljasfdkljasdfjilafsdjilasdfljfasdjlfasdjljafilsdajlksfdjiafdsljkfasdjlkasfdljksadfjlfasdjklasdfjkllasfjkjklasfdjlkasfdjklasdfjklasfdjklasdfljkdafkljasdkljlkdsjfasdjfklajsdlfjaklsdjf`}
            username={`username${index + 1}`}
            timestamp={`2022-10-1${index % 10}`}
          />
        ))}
      </section>
    </>
  );
}
