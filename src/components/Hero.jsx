function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Find your breath. Find your balance.</h1>
          <p>Welcome to ZenFlow, a modern yoga studio offering calming flows, energizing vinyasa, and restorative sessions for all levels.</p>
          <div className="actions">
            <a href="#classes" className="btn btn-primary">View Classes</a>
            <a href="#pricing" className="btn btn-ghost">See Pricing</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
      </div>
    </section>
  )
}

export default Hero
