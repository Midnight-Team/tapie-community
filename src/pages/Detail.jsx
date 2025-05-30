import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../lib/api/post";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("게시글 ID가 없습니다.");
      setLoading(false);
      return;
    }

    getPost(id)
      .then(setPost)
      .catch((err) =>
        setError(err.message || "게시글을 불러오는데 실패했습니다.")
      )
      .finally(() => setLoading(false));
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) return <div className="message">게시글을 불러오는 중...</div>;
  if (error) return <div className="message error">{error}</div>;
  if (!post)
    return <div className="message error">게시글을 찾을 수 없습니다.</div>;

  return (
    <>
      <style jsx>{`
        .message {
          text-align: center;
          padding: 4vh 0;
          font-family: Wanted Sans, Inter, sans-serif;
        }
        .error {
          color: red;
        }
        // .post-detail-wrapper {
        //   background-color: #ffffff;
        //   min-height: 100vh;
        //   border: 1px solid #ebebeb;
        // }
        .post-detail-container {
          background-color: #ffffff;
          max-height: 100vh;
          min-height: 75vh;
          border: 1px solid #ebebeb;
          max-width: 800px;
          margin: 0 auto;
          padding: 1.5vh 2vw;
          font-family: Wanted Sans, Inter, sans-serif;
        }
        .post-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2vh;
          line-height: 1.4;
        }
        .post-meta {
          display: flex;
          align-items: center;
          margin-bottom: 2vh;
          color: #666;
        }
        .post-meta p {
          margin: 0;
          padding: 0;
          margin-left: 0.2vw;
          margin-right: 0.2vw;
          max-width: 10px;
        }
        .post-author {
          font-weight: 500;
        }
        .post-date {
          color: #999;
        }
        .post-content {
          line-height: 1.8;
          font-size: 1rem;
          white-space: pre-wrap;
        }
      `}</style>

      <div className="post-detail-container">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span className="post-author">{post.author?.nickname}</span>
          <p> · </p>
          <span className="post-date">{formatDate(post.createdAt)}</span>
        </div>
        <div className="post-content">{post.content}</div>
      </div>
    </>
  );
}
