import movieCollab from '../assets/moviecollab.jpg'

export default function Contact() {
  return (
    <div className="main_body">
      <h1>Contact Us</h1>
      <p>
        Do YOU have a question about our movies? 
      </p>
      <p>
        We usually respond pretty quickly within 24 hours. If this is super urgent matters,
        please say that. 
      </p>

      <img
        src={movieCollab}
        alt="Team collaborating on a project"
        className="w-full rounded-lg shadow-md mb-8 object-cover h-64"
      />

      <form
        className="group"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Billy bob"
          />
        </div>

        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="billybob@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us more..."
          />
        </div>

        <button
          type="submit"
          className='mt-5'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
