export default function SubdomainCard({ title, description, url }) {
  return (
    <a
      className="card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-url">{url}</div>
    </a>
  )
}
