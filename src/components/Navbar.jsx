import Button from "./Button";

export default function Navbar({}) {
  // TODO: props로 또는 기타 방식으로 받아오기
  const logined = true;
  const username = "User123";
  return (
    <>
      <nav className="navbar">
        <a href="/">TAPIE Board</a>

        <div className="navbar-right">
          {logined ? (
            <>
              <span>{username}</span>

              <Button name={`로그아웃`} />
            </>
          ) : (
            <>
              <Button name={`로그인`} />
              <Button name={`로그아웃`} />
            </>
          )}
        </div>
      </nav>
    </>
  );
}
