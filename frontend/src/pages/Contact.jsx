import movieCollab from '../assets/moviecollab.jpg'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-lg text-indigo-200 mb-2">
        Do YOU have a question about our movies? 
      </p>
      <p className="text-lg text-indigo-200 mb-8">
        We usually respond pretty quicklywithin 24 hours. If this is super urgent matters,
        please say that. 
      </p>

      <img
        src={movieCollab}
        alt="Team collaborating on a project"
        className="w-full rounded-lg shadow-md mb-8 object-cover h-64"
      />

      <form
        className="bg-mauve-700 shadow-sm border-4 border-indigo-400 rounded-lg p-8 space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Billy bob"
            className="bg-indigo-100 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="billybob@example.com"
            className="bg-indigo-100 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="How can we help?"
            className="bg-indigo-100 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us more..."
            className="bg-indigo-100 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
