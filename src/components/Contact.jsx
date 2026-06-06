import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-gray-400 mb-8">Let's build something amazing together.</p>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <a
            href="https://wa.me/62895384947265"
            className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/K-anwar"
            className="bg-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;