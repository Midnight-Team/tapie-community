export default function Post({ title, content, username, timestamp }) {
  return (
    <>
      <style jsx>
        {`
          .post {
            width: 20vw;

            border: 1px solid #ccc;
            border-radius: 0.5rem;
            padding: 0 1.5vw;
          }

          .post-title {
            font-size: 1.5rem;
            font-weight: bold;
          }

          .post-username {
            color: #919191;
          }

          .post-timestamp {
            color: #919191;
          }

          .post-content {
            width: 100%;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            word-break: break-word;
            white-space: normal;
          }
        `}
      </style>
      <div className="post">
        <p className="post-title">{title}</p>

        <span className="post-username">
          {username} {" · "}
        </span>
        <span className="post-timestamp">{timestamp}</span>

        <p className="post-content">{content}</p>
      </div>
    </>
  );
}
