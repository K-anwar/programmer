function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8">
          Let's build something amazing together.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="https://wa.me/62895384947265"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold"
          >
            WhatsApp
          </a>

          <a
            href="https://github.com/K-anwar"
            className="bg-gray-800 px-6 py-3 rounded-xl font-semibold"
          >
            GitHub
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact