# mariolino.uk — Home

Personal launchpad for all services running under `mariolino.uk`. Cards are rendered dynamically from a JSON file — no rebuild needed to add or remove entries.

## Project structure

```
home/
├── public/
│   └── sub-domain.json   # subdomain data — edit this to add services
├── src/
│   ├── App.jsx
│   ├── components/
│   │   └── SubdomainCard.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── nginx.conf
├── Dockerfile
└── docker-compose.yml
```

## Adding a subdomain

Open `public/sub-domain.json` and add an entry to the `subdomains` array:

```json
{
  "subdomains": [
    {
      "title": "Blog",
      "description": "Personal writing and notes.",
      "url": "https://blog.mariolino.uk"
    },
    {
      "title": "Tools",
      "description": "Small utilities and scripts.",
      "url": "https://tools.mariolino.uk"
    }
  ]
}
```

When running via Docker Compose the JSON is bind-mounted into the container, so changes take effect immediately on the next browser refresh — **no rebuild required**.

## Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Docker

### Build & run

```bash
docker compose up --build
```

The app is served on `http://localhost:4000`.

### Update services without rebuild

Edit `public/sub-domain.json` and refresh the browser. The file is mounted as a read-only volume directly into the running container.

### Stop

```bash
docker compose down
```
