function Footer(){
return <footer class="bg-[#101828] px-40">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center text-teal-600 sm:justify-start">
        PUSOENOTES
      </div>

      <p class="mt-4 text-center w-full text-sm text-gray-500 lg:mt-0 lg:text-center">
        Copyright &copy;{new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  </div>
</footer>
}
export default Footer;