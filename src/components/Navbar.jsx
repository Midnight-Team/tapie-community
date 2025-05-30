import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMe, logout } from "@/lib/api/user";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({ nickname: "아무거나" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getMe();
        setUser(userData);
      } catch (error) {
        console.error("사용자 정보 로딩 실패:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      //navigate("/");
      window.location.href = "/";
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return (
    <>
      <style jsx>
        {`
          .navbar {
            font-family: Wanted Sans, Inter, sans-serif;
          }

          .user-info button {
            background-color: #ffa4a4;
          }
        `}
      </style>
      <nav className="navbar">
        <span onClick={() => navigate("/")}>TAPIE Board</span>

        <div className="navbar-right">
          {user ? (
            <div className="user-info">
              <span>{user.nickname || user.username}</span>
              <Button
                className="logout-button"
                name="로그아웃"
                onClick={handleLogout}
                iconSvg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          ) : (
            <>
              <Button
                name="로그인"
                onClick={() => {
                  window.location.href = "/login"; //새로고침이 안됨 고칠것
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
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
              <Button
                name={`회원가입`}
                onClick={() => navigate("/signup")}
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
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
}
