import Button from "../components/Button";
import { login } from "../lib/api/user";
import { useState } from "react";

export default function Write() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <style jsx>{`
        .writing {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          font-family: Wanted Sans, Inter, sans-serif;
        }

        .writing > p {
          width: calc(50% + 3rem);
          font-weight: bold;
          font-size: 1.2rem;
        }

        .container {
          width: 50%;
          padding: 1.5rem 1.25rem;

          border: 1px solid #000;
          border-radius: 0.75rem;
        }

        .container > button {
          background-color: #000;
          color: #fff;

          width: 100%;

          display: flex;
          justify-content: center;

          margin-top: 4rem;
        }

        .container > div {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .container > div > input {
          padding: 0.75rem 1rem;
          border: 1px solid #ebebeb;
          border-radius: 0.25rem;
          font-size: 1rem;
        }

        .container > div > span {
          margin-bottom: 0.5rem;
        }

        #content {
          font-family: Wanted Sans, Inter, sans-serif;
          font-size: 1rem;
          height: 20vh;
          resize: none;
          border-radius: 0.25rem;
          padding: 0.75rem 1rem;
        }
      `}</style>
      <section className="writing">
        <p>글 작성</p>
        <div className="container">
          <div>
            <span>제목</span>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="유저이름을 입력해주세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <span>내용</span>
            <textarea
              rows="20"
              name="content"
              id="content"
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <Button
            name="등록하기"
            onClick={() => {}}
            iconSvg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M18.3335 10.5001C18.3335 10.579 18.3111 10.6563 18.2689 10.723C18.2266 10.7897 18.1663 10.843 18.095 10.8768L3.09498 17.9601C3.02006 17.9964 2.93595 18.0094 2.85357 17.9973C2.7712 17.9851 2.69437 17.9485 2.63308 17.8922C2.57179 17.8358 2.52886 17.7624 2.50988 17.6813C2.4909 17.6002 2.49674 17.5153 2.52665 17.4376L4.89498 11.0818C5.03471 10.7066 5.03471 10.2936 4.89498 9.91845L2.52581 3.56261C2.49576 3.48481 2.48984 3.39976 2.50883 3.31855C2.52782 3.23734 2.57084 3.16373 2.63228 3.10733C2.69372 3.05093 2.77072 3.01435 2.85326 3.00236C2.9358 2.99037 3.02003 3.00352 3.09498 3.04011L18.095 10.1234C18.1663 10.1572 18.2266 10.2105 18.2689 10.2772C18.3111 10.3439 18.3335 10.4212 18.3335 10.5001ZM18.3335 10.5001H4.99998"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
      </section>
    </>
  );
}
