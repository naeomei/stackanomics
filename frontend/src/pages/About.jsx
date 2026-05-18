import naomiPhoto from '../assets/NaomiBioPhoto.jpg'
import morleyPhoto from '../assets/MorleyBioPhoto.jpg'
const team = [
  {
    name: 'Naomi Vazquez',
    role: 'Full Stack Developer',
    photo: naomiPhoto,
    bio: 'Software Engineering student in my senior year. I love building things and learning new technologies. In my free time, I enjoy trail running, golfing, and snowboarding',
  },
  {
    name: 'Alyssa Morley',
    role: 'Full Stack Developer',
    photo: morleyPhoto,
    bio: 'SE student in my senior year. I like the problem-solving aspects of this industry. My hobbies include gaming, drawing, and staring at bugs',
  },
]

export default function About() {
  return (
    <div className="main_body">
      <h1 >About the Team</h1>
      <p>
        We're of two building a simple sample application for stackonmics that
        explores the React, FastAPI, and PostgreSQL stack from end to end. Each
        of us brings a different background and perspective to the project.
      </p>
      <p>
        Below you can meet the people behind the project below. Click around the site to see
        what we've built so far, and reach out via the Contact page if you'd
        like to chat or have any questons.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {team.map((member) => (
          <div
            key={member.name}
            className="group center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-white"
            />
            <h2>{member.name}</h2>
            <label>{member.role}</label>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
