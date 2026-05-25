import { useState, useEffect } from 'react'
import SubdomainCard from './components/SubdomainCard'

export default function App() {
  const [subdomains, setSubdomains] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/sub-domain.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => setSubdomains(data.subdomains ?? []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">
          <span>mario</span>lino.uk
        </h1>
        <p className="header-subtitle">personal services</p>
      </header>

      <main className="main">
        {loading && (
          <div className="state-center">
            <span>Loading...</span>
          </div>
        )}

        {error && (
          <div className="state-center error">
            <span>Failed to load services</span>
            <small>{error}</small>
          </div>
        )}

        {!loading && !error && subdomains.length === 0 && (
          <div className="state-center">
            <span>No services configured yet.</span>
            <small>Edit public/sub-domain.json to add entries.</small>
          </div>
        )}

        {!loading && !error && subdomains.length > 0 && (
          <div className="grid">
            {subdomains.map((s, i) => (
              <SubdomainCard
                key={i}
                title={s.title}
                description={s.description}
                url={s.url}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        mariolino.uk &mdash; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
