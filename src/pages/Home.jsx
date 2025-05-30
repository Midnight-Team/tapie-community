import Post from "../components/Post";
import Button from "../components/Button";
import Switch from "../components/Switch";
import { useEffect, useState } from "react";
import { getMe } from "../lib/api/user";
import { getPosts } from "../lib/api/post";
import { useNavigate } from "react-router-dom";

class BoardPost {
  constructor(author, title, content, createdAt, updatedAt) {
    this.author = author;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default function Home() {
  const navigate = useNavigate();
  //const myName = "test"; // TODO: getMe 기능 구현 후 삭제

  const [postType, setPostType] = useState("all"); // "all" or "my"
  const [posts, setPosts] = useState([]);
  const [myName, setMyName] = useState("");
  useEffect(() => {
    getMe().then((res) => {
      setMyName(res.nickname);
    });
    getPosts().then((res) => {
      console.log("response:", res);
      setPosts(
        res.map(
          (post) =>
            new BoardPost(
              post.author,
              post.title,
              post.content,
              post.createdAt,
              post.updatedAt
            )
        )
      );
    });
  }, []);
  // TODO: 글 목록을 불러오는 로직 추가
  return (
    <>
      <style jsx>
        {`
          .posts {
            display: flex;
            flex-wrap: wrap;
            gap: 2vw;
            padding: 2vw 0;
          }

          .writing-post {
            display: flex;
            align-items: flex-end;
            gap: 2vw;

            font-family: Wanted Sans, Inter, sans-serif;
          }

          .switch {
            margin-top: 6vh;
            margin-bottom: 2vh;
          }

          .writing-post > button {
            background-color: #a2d4ff !important;
            border-color: #a2d4ff !important;
          }
        `}
      </style>
      <div className="writing-post">
        <Button
          name={"글 작성하기"}
          onClick={() => {
            navigate("/write");
          }}
          disabled={!myName}
          iconSvg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 16.6667H17.5M12.5 4.16669L15 6.66669M13.6467 3.01836C13.9784 2.68661 14.4283 2.50024 14.8975 2.50024C15.3667 2.50024 15.8166 2.68661 16.1483 3.01836C16.4801 3.3501 16.6664 3.80004 16.6664 4.26919C16.6664 4.73834 16.4801 5.18828 16.1483 5.52002L6.14 15.5292C5.94175 15.7274 5.69669 15.8725 5.4275 15.9509L3.03417 16.6492C2.96246 16.6701 2.88645 16.6714 2.81409 16.6528C2.74173 16.6343 2.67569 16.5966 2.62287 16.5438C2.57006 16.491 2.53241 16.425 2.51387 16.3526C2.49533 16.2802 2.49659 16.2042 2.5175 16.1325L3.21583 13.7392C3.29435 13.4703 3.43937 13.2255 3.6375 13.0275L13.6467 3.01836Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
        <span>전체 글 {posts.length}개 작성됨.</span>
      </div>
      <Switch onChange={setPostType} />
      <section className="posts">
        {posts
          .filter((post) =>
            postType === "my" ? post.author.nickname == myName : true
          )
          .map((post, index) => (
            <Post
              key={index}
              title={post.title}
              content={post.content}
              username={post.author.nickname}
              timestamp={post.createdAt}
              isMe={post.author.nickname === myName}
              displayIcons={postType === "my"}
              // TODO: getMe 기능 구현 후 수정
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
        {/* {new Array(10).fill(null).map((_, index) => (
          <Post
            key={index}
            title={`Title${index + 1}`}
            content={`asdfasdfasdfasdfasdfasdfkjsasdfljkafsdjklsdakljfjkldsajklasljksdjklfadskljasfdkljasdfjilafsdjilasdfljfasdjlfasdjljafilsdajlksfdjiafdsljkfasdjlkasfdljksadfjlfasdjklasdfjkllasfjkjklasfdjlkasfdjklasdfjklasfdjklasdfljkdafkljasdkljlkdsjfasdjfklajsdlfjaklsdjf`}
            username={`username${index + 1}`}
            timestamp={`2022-10-1${index % 10}`}
          />
        ))} */}
      </section>
    </>
  );
}
