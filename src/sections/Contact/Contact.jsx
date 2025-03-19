import style from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={style.container}>
      <h1 className="section-title">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"/>
      </form>
    </section>
  );
}

export default Contact;
