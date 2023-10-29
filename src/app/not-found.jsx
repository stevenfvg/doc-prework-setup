import { Link, Button } from '@nextui-org/react';

export const metadata = {
  title: '404 Error page',
};

export default function NotFound() {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <div className="flex mb-4">
        <h1 className="font-extrabold text-9xl text-slate-50 animate-bounce">
          404
        </h1>
      </div>
      <div className="flex flex-col items-center mt-4 mb-4">
        <h2 className="font-extrabold text-3xl text-slate-100 mb-4">
          Opps! Page Not Found
        </h2>
        <p className="mb-4">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
      </div>
      <div className="mt-4">
        <Button href="/" as={Link} variant="flat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <g clipPath="url(#clip0_9_2121)">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_2121">
                <path d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>
          Return Home
        </Button>
      </div>
    </div>
  );
}
