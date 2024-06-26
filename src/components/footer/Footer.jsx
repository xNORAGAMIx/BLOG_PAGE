import { useContext } from "react";
import myContext from "../../context/data/myContext";
import imgLogo from "../../assets/logo.png";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <footer
      className="body-font"
      style={{ background: mode === "dark" ? "#464866" : "#d6536d" }}
    >
      {/* Left Content  */}
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/* Blog Logo  */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* logo  */}
          <img className="w-10" src={imgLogo} alt="logo" />
          {/* logo text  */}
          <span className="ml-3 text-xl text-white">Dreamscape Diaries</span>
        </div>

        {/* items  */}
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Created By—
          <a
            href="https://www.linkedin.com/in/manas-d-552168146/"
            className="text-white ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @noragami
          </a>
        </p>

        {/* Right item  */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Icon 1  */}
          <a
            href="https://www.facebook.com/people/Eashan/pfbid02KPokr7uVTKyZVhqUHZSpTLkoHRMA1tG5eV2d1C6pMgZd8XpTP5RJcem75i1hVropl/?mibextid=ZbWKwL"
            className="text-gray-100"
            target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          {/* Icon 2  */}
          <a
            href="https://x.com/eashan_das?t=8YeQQ1KQJU3ZZKHWkvtZ3g&s=09"
            className="ml-3 text-gray-100"
            target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          {/* Icon 3  */}
          <a
            href="https://www.instagram.com/a.y.a.s.h.i.m.o.n?igsh=MTU1b3lneDF1YmtyZw=="
            target="_blank"
            className="ml-3 text-gray-100"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>

          {/* Icon 4  */}
          <a
            href="https://www.linkedin.com/in/manas-d-552168146/"
            className="ml-3 text-gray-100"
            target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
