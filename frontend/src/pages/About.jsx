import naomiPhoto from '../assets/NaomiBioPhoto.jpg'
const team = [
  {
    name: 'Naomi Vazquez',
    role: 'Full Stack Developer',
    photo: naomiPhoto,
    bio: 'Software Engineering student in my senior year. I love building things and learning new technologies. In my free time, I enjoy trail running, golfing, and snowboarding',
  },
  {
    name: '',
    role: '',
    photo: '',
    bio: '',
  },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About the Team</h1>
      <p className="text-lg text-gray-700 mb-4">
        We're of two building a simple sample application for stackonmics that
        explores the React, FastAPI, and PostgreSQL stack from end to end. Each
        of us brings a different background and perspective to the project.
      </p>
      <p className="text-lg text-gray-700 mb-10">
        Below you can meet the people behind the project below. Click around the site to see
        what we've built so far, and reach out via the Contact page if you'd
        like to chat or have any questons.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-100"
            />
            <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
            <p className="text-sm font-medium text-indigo-600 mb-3">{member.role}</p>
            <p className="text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
