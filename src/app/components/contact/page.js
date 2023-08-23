
const Contact = () => {
  return (
    <div>
       <>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know.
          </p>
          <form className="space-y-8">
          <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium"
              >
                Your name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="wesite"
                className="block mb-2 text-sm font-medium"
              >
                Your website url
              </label>
              <input
                type="url"
                id="website"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                placeholder="http://localhost:3000/components/contact"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white bg-red-500 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
    </div>
  );
}

export default Contact;
