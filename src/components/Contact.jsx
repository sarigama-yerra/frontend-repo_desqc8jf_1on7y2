function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="contact-copy">
          <h2 className="section-title">Visit Our Studio</h2>
          <p className="muted">123 Serenity Lane, Suite 2 • Mon–Sun 7am–9pm</p>
          <p className="muted">hello@zenflow.yoga • (555) 123‑4567</p>
        </div>
        <form className="contact-form">
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your full name" required/>
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" required/>
          </label>
          <label className="full">
            <span>Message</span>
            <textarea rows="4" placeholder="Tell us what you need" />
          </label>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
