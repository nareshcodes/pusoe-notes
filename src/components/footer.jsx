function Footer() {
  return (
    <footer className="container-fluid mx-auto bg-footer px-40">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <p>PUSOENOTES</p>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-center">
            Copyright &copy;{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
