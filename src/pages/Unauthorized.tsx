import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div>
      <h1> You are not Authorized</h1>
      <Link to="/">Home</Link>
    </div>
  );
}