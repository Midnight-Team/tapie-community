export default function Button({ name, onClick }) {
  return (
    <>
      <style jsx>
        {`
          .button {
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: 1rem;
          }

          .button:hover {
            background-color: #005bb5;
          }
        `}
      </style>
      <button className="button" onClick={onClick}>
        {name}
      </button>
    </>
  );
}
