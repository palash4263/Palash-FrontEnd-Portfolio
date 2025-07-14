import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading"><span className="emoji">📬</span> Let's Get In Touch</h1>

      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p className="contact-note">
        Or drop me an email at <strong>palashmishra47@gmail.com</strong>
      </p>
    </div>
  );
}
