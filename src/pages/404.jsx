import { Link } from "react-router-dom";
export default function Error404() {
  return (
    <main className="error-page">
      <style jsx>
        {`
          .error-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 50vh;
            text-align: center;
          }
          .error-page_image {
            width: 600px;
            height: auto;
          }
          .error-page_title {
            margin-top: 20px;
            font-size: 24px;
            color: #343a40;
          }
          .error-page_link {
            margin-top: 15px;
            color: #007bff;
            text-decoration: none;
          }
        `}
      </style>
      <img src="/public/404.png" alt="404" className="error-page_image" />
      <h1 className="error-page_title">
        존재하지 않는 페이지로 접근하셨습니다 ㅇ0ㅇ
      </h1>
      <Link to="/" className="error-page_link">
        메인 페이지로 돌아가기
      </Link>
    </main>
  );
}
