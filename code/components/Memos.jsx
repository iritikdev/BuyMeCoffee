import { useState, useEffect } from "react";

export default function Memos({ state }) {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  const getMemos = async () => {
    setMemos(await contract.getMemos());
  };

  useEffect(() => {
    contract && getMemos();
  }, [contract]);

  return (
    <div>
      <h1> Memos</h1>

      <table>
        <thead>
          <tr>
            <th>address</th>
            <th>Name</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        {memos.map((memo) => (
          <tr key={memo.timestamp}>
            <td>{memo.from}</td>
            <td>{memo.name}</td>
            <td>{memo.message}</td>
            <td>{memo.timestamp}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
