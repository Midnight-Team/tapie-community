import Post from "./components/Post";

function App() {
  return (
    <>
      <Post
        title={`Title1`}
        content={`asdfasdfasdfasdfasdfasdfkjsasdfljkafsdjklsdakljfjkldsajklasljksdjklfadskljasfdkljasdfjilafsdjilasdfljfasdjlfasdjljafilsdajlksfdjiafdsljkfasdjlkasfdljksadfjlfasdjklasdfjkllasfjkjklasfdjlkasfdjklasdfjklasfdjklasdfljkdafkljasdkljlkdsjfasdjfklajsdlfjaklsdjf`}
        username={`username1`}
        timestamp={`2022-10-10`}
      />
    </>
  );
}

export default App;
