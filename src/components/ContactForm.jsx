import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 3000);
    }).catch((error) => {
      console.error('FAILED:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
      <input type="text" name="name" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400" required />
      <input type="email" name="time" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400" required />
      <textarea name="message" rows="4" placeholder="Your Message" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400" required></textarea>
      <button type="submit" disabled={status === 'sending'} className="w-full bg-cyan-500 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition disabled:opacity-50">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-400 text-center">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-400 text-center">Failed to send. Please try again.</p>}
    </form>
  );
}