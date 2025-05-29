export default function Switch({ onChange }) {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <style jsx>{`
        .switch {
          background-color: #000;
          color: #fff;

          padding: 0.3rem 0;
          border-radius: 0.5rem;

          max-width: 20rem;
          font-family: Wanted Sans, Inter, sans-serif;

          display: flex;
          justify-content: space-around;
        }

        .switch > input[type="radio"] {
          display: none;
        }

        .switch > input[type="radio"]:checked + label {
          background-color: #565656;
          border-radius: 0.5rem;
        }

        .switch > label {
          margin: 0 0.25rem;
          padding: 0.25vh 0;
          cursor: pointer;
          width: 50%;
          text-align: center;
        }
      `}</style>
      <div className="switch">
        <input
          type="radio"
          name="posts-type"
          id="all-posts"
          defaultChecked
          onChange={() => handleChange("all")}
        />
        <label htmlFor="all-posts">전체</label>
        <input
          type="radio"
          name="posts-type"
          id="my-posts"
          onChange={() => handleChange("my")}
        />
        <label htmlFor="my-posts">나의 글</label>
      </div>
    </>
  );
}
