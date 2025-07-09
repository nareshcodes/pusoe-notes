import Navbar from "./navbar";
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e9cbb226-de48-4d78-a05a-41026456d07d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return <>
    <div className="w-full overflow-hidden relative z-1000 bg-kprimary md:rounded-br-full md:px-24 md:py-5">
      <Navbar/>
    </div>

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/4 max-sm:w-full max-sm:h-50 md:w-1/2 md:mx-auto md:my-20 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" Border="0" title="map" Height="100%" overflow="hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.310640007973!2d87.27964399999999!3d26.477941199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7472f6a5a40d%3A0xb4639228159cf988!2sPurbanchal%20University%20School%20of%20Engineering%20-%20PUSOE!5e0!3m2!1sen!2snp!4v1752029641808!5m2!1sen!2snp" style={{grayscale:1, contrast:1.4, opacity:0.7}}></iframe>
      
    </div>
    <form onSubmit={onSubmit} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 mb-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Your Feedback motivates us to improve the website.</p>
      <div className=" mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
    </form>
  </div>
</section>
      </>
}
export default Contact;
