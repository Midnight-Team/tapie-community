import Button from "../components/Button";
import { login } from "../lib/api/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <style jsx>{`
        .signup {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          font-family: Wanted Sans, Inter, sans-serif;
        }

        .signup > p {
          width: calc(30% + 3rem);
          font-weight: bold;
          font-size: 1.2rem;
        }

        .container {
          width: 30%;
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
          margin-top: 0.5rem;
        }
      `}</style>
      <section className="signup">
        <p>로그인</p>
        <div className="container">
          <div>
            <span>유저이름</span>
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
            <span>비밀번호</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            name="로그인"
            onClick={() => {
              login({ username: username, password: password })
                .then((res) => {
                  navigate("/");
                  console.log(res);
                })
                .catch((err) => {
                  console.error("로그인 실패:", err);
                  alert("로그인에 실패했습니다. 다시 시도해주세요.");
                });
            }}
            iconSvg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333M12.5 10H2.5M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
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
