
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2">
      404 Not Found
      <br />
      <Link to="/">Home From Link</Link>
    </div>
  );
}

export default NotFoundPage;
