import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <p>Can't find what you're looking for, sorry!</p>
      <p>
        <Link to="/">Go to Home Page</Link>
      </p>
    </>
  );
}
export default NotFoundPage;