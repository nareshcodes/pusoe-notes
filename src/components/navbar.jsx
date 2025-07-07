import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-none">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between font-menu text-3xl">
          <div className="flex-1 md :flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to={"#"}>
              <span className="sr-only">Pusoe Notes</span>
              <h1 className=" text-menucolor">Pusoe Notes</h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-4">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-menu">
                <li>
                  <Link
                    className="text-menucolor transition hover:text-gray-500/75"
                    to={'/'}
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className=" text-menucolor transition hover:text-gray-500/75"
                    to={"/notes"}
                  >
                    {" "}
                    Notes{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className=" text-menucolor transition hover:text-gray-500/75"
                    to={"/syllabus"}
                  >
                    {" "}
                    Syllabus{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className=" text-menucolor transition hover:text-gray-500/75"
                    to={"/books"}
                  >
                    {" "}
                    Books{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className=" text-menucolor transition hover:text-gray-500/75"
                    to={"/questions"}
                  >
                    {" "}
                    Questions{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className=" text-menucolor transition hover:text-gray-500/75"
                    to={"/contact"}
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
