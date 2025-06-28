function Navbar(){
    return <header class="bg-none">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between font-menu text-3xl">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <a class="block text-teal-600" href="#">
          <span class="sr-only">Home</span>
          <h1 className=" text-menucolor">Pusoe Notes</h1>
        </a>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-menu">
            <li>
              <a class=" text-menucolor transition hover:text-gray-500/75" href="#"> Home </a>
            </li>

            <li>
              <a class=" text-menucolor transition hover:text-gray-500/75" href="#"> Notes </a>
            </li>

            <li>
              <a class=" text-menucolor transition hover:text-gray-500/75" href="#"> Syllabus </a>
            </li>

            <li>
              <a class=" text-menucolor transition hover:text-gray-500/75" href="#"> Books </a>
            </li>

            <li>
              <a class=" text-menucolor transition hover:text-gray-500/75" href="#"> Questions </a>
            </li>

            <li>
              <a class=" text-menucolor transition hover:text-gray-500/75" href="#"> Contact </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="block md:hidden">
            <button
              class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
}
export default Navbar;