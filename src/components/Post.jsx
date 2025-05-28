export default function Post({ title, content, username, timestamp }) {
  return (
    <>
      <style jsx>
        {`
          .post {
            width: 20vw;
            height: 35vh;

            border: 1px solid #ccc;
            border-radius: 0.5rem;
            padding: 1.5vw;
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
            word-wrap: break-word;

            // FIX IT
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: keep-all;
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
