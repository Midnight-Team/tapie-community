import { useNavigate } from "react-router-dom";

export default function Post({
  title,
  content,
  id,
  username,
  timestamp,
  isMe,
  displayIcons,
  onEdit,
  onDelete,
}) {
  const navigate = useNavigate();

  return (
    <>
      <style jsx>
        {`
          .post {
            width: 20vw;
            max-width: 15rem;
            border: 1px solid #ebebeb;
            border-radius: 0.5rem;
            padding: 0 1.5vw;
            min-height: 15rem;

            font-family: Wanted Sans, Inter, sans-serif;
          }

          .post-title {
            margin: 0.5rem 0;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .post-title:hover {
            color: #0064ff;
            cursor: pointer;
            text-decoration: underline;
            transition: color 0.1s ease;
          }

          .post-username {
            color: #919191;
          }

          .post-timestamp {
            color: #919191;
          }

          .post-content {
            margin-top: 0.5rem;
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

          .modify-button {
            border-radius: 50%;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .edit-button {
            background-color: #5ce1ff;
          }

          .delete-button {
            background-color: #ff5c5c;
          }
        `}
      </style>
      <div className="post">
        <div
          style={{
            marginTop: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",

            gap: "0.5rem",
          }}
        >
          <p
            className="post-title"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/details/${id}`);
            }}
          >
            {title}
          </p>

          {isMe && displayIcons && (
            <div
              className="post-actions"
              style={{
                marginTop: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <button className="modify-button edit-button" onClick={onEdit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7 1.75001H2.91667C2.60725 1.75001 2.3105 1.87293 2.09171 2.09172C1.87292 2.31051 1.75 2.60726 1.75 2.91668V11.0833C1.75 11.3928 1.87292 11.6895 2.09171 11.9083C2.3105 12.1271 2.60725 12.25 2.91667 12.25H11.0833C11.3928 12.25 11.6895 12.1271 11.9083 11.9083C12.1271 11.6895 12.25 11.3928 12.25 11.0833V7.00001M10.7187 1.53126C10.9508 1.2992 11.2656 1.16882 11.5937 1.16882C11.9219 1.16882 12.2367 1.2992 12.4687 1.53126C12.7008 1.76332 12.8312 2.07807 12.8312 2.40626C12.8312 2.73445 12.7008 3.0492 12.4687 3.28126L7.21117 8.53943C7.07265 8.67782 6.90154 8.77913 6.71358 8.83401L5.03767 9.32401C4.98747 9.33865 4.93426 9.33953 4.88361 9.32655C4.83296 9.31357 4.78673 9.28722 4.74976 9.25025C4.71279 9.21328 4.68644 9.16705 4.67346 9.1164C4.66048 9.06575 4.66136 9.01254 4.676 8.96234L5.166 7.28643C5.22114 7.09862 5.32264 6.92771 5.46117 6.78943L10.7187 1.53126Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                className="modify-button delete-button"
                onClick={onDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.75 3.49996H12.25M11.0833 3.49996V11.6666C11.0833 12.25 10.5 12.8333 9.91667 12.8333H4.08333C3.5 12.8333 2.91667 12.25 2.91667 11.6666V3.49996M4.66667 3.49996V2.33329C4.66667 1.74996 5.25 1.16663 5.83333 1.16663H8.16667C8.75 1.16663 9.33333 1.74996 9.33333 2.33329V3.49996M5.83333 6.41663V9.91663M8.16667 6.41663V9.91663"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/details/${id}`);
          }}
        >
          <span className="post-username">
            {username} {" · "}
          </span>
          <span className="post-timestamp">
            {new Date(timestamp).toLocaleDateString()}
          </span>
        </div>
        <p
          className="post-content"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/details/${id}`);
          }}
        >
          {content}
        </p>
      </div>
    </>
  );
}
