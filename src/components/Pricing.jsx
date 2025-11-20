const tiers = [
  {
    name: 'Drop-in',
    price: '$18',
    desc: 'One class, any time',
    perks: ['Access to any class', 'Mat included', 'Tea after class']
  },
  {
    name: 'Monthly',
    price: '$79',
    desc: 'Unlimited classes',
    perks: ['Unlimited sessions', 'Priority booking', 'Guest pass (1/mo)']
  },
  {
    name: 'Annual',
    price: '$799',
    desc: 'Best value for regulars',
    perks: ['Unlimited sessions', 'Workshop discounts', 'Free mat + blocks']
  }
]

function Pricing() {
  return (
    <section id="pricing" className="section alt">
      <div className="container">
        <h2 className="section-title">Simple Pricing</h2>
        <div className="grid pricing">
          {tiers.map((t) => (
            <div key={t.name} className="card pricing-card">
              <h3>{t.name}</h3>
              <p className="price">{t.price}<span className="unit">/mo</span></p>
              <p className="muted">{t.desc}</p>
              <ul className="perks">
                {t.perks.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <button className="btn btn-primary w-full">Choose</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
