function Navbar({ page, setpage }) {
  console.log(page);
  return (
    <header className="bg-none">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between font-menu text-3xl">
          <div className="flex-1 md :flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <h1 className=" text-menucolor">Pusoe Notes</h1>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-menu">
                <li onClick={() => setpage("home")}>
                  <a
                    className="text-menucolor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li onClick={() => setpage("notes")}>
                  <a
                    className=" text-menucolor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Notes{" "}
                  </a>
                </li>

                <li onClick={() => setpage("syllabus")}>
                  <a
                    className=" text-menucolor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Syllabus{" "}
                  </a>
                </li>

                <li onClick={() => setpage("books")}>
                  <a
                    className=" text-menucolor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Books{" "}
                  </a>
                </li>

                <li onClick={() => setpage("questions")}>
                  <a
                    className=" text-menucolor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Questions{" "}
                  </a>
                </li>

                <li onClick={() => setpage("contact")}>
                  <a
                    className=" text-menucolor transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </a>
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
