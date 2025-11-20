const schedule = [
  { day: 'Mon', time: '7:00 AM', name: 'Sunrise Flow', level: 'All Levels' },
  { day: 'Tue', time: '6:00 PM', name: 'Vinyasa Power', level: 'Intermediate' },
  { day: 'Wed', time: '12:00 PM', name: 'Lunchtime Stretch', level: 'Beginner' },
  { day: 'Thu', time: '7:30 PM', name: 'Yin & Restore', level: 'All Levels' },
  { day: 'Fri', time: '5:30 PM', name: 'Slow Flow', level: 'All Levels' },
  { day: 'Sat', time: '9:00 AM', name: 'Weekend Vinyasa', level: 'Intermediate' },
  { day: 'Sun', time: '10:00 AM', name: 'Gentle Flow', level: 'Beginner' },
]

function Classes() {
  return (
    <section id="classes" className="section">
      <div className="container">
        <h2 className="section-title">Weekly Classes</h2>
        <div className="grid schedule">
          {schedule.map((c, i) => (
            <div key={i} className="card">
              <div className="row between">
                <span className="day">{c.day}</span>
                <span className="time">{c.time}</span>
              </div>
              <h3 className="class-name">{c.name}</h3>
              <p className="level">{c.level}</p>
              <button className="btn btn-outline w-full">Book</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
