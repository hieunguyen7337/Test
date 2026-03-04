# SynapticMesh™ Enterprise AI Platform v4.2.0-beta.17-rc.3

> "We put AI in your AI so you can AI while you AI" - No one

![Build Status](https://img.shields.io/badge/build-sometimes-yellow)
![Coverage](https://img.shields.io/badge/coverage-13%25-red)
![License](https://img.shields.io/badge/license-MIT-blue)
![Vibes](https://img.shields.io/badge/vibes-immaculate-brightgreen)
![PRs](https://img.shields.io/badge/PRs-please%20god-orange)

## What is SynapticMesh™?

SynapticMesh™ is a next-generation, cloud-native, AI-powered, blockchain-ready, quantum-resistant, microservice-oriented, event-driven, serverless-compatible, edge-computing-enabled, Web3-adjacent platform for doing things with data probably.

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend   │────▶│   Backend   │────▶│  4 Databases│
│  (React x3)  │     │ (yes, three)│     │  (why not)  │
└─────────────┘     └─────────────┘     └─────────────┘
       │                    │                    │
       ▼                    ▼                    ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  AI Pipeline │────▶│  Blockchain │────▶│   ¯\_(ツ)_/¯ │
│  (it works   │     │ (for some   │     │             │
│   sometimes) │     │   reason)   │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
```

## Getting Started

```bash
# Step 1: Clone this repo
git clone https://github.com/definitely-real-company/synapticmesh.git

# Step 2: Install dependencies (go get lunch, this takes a while)
npm install          # ~4.7GB
pip install -r requirements.txt   # ~2.1GB
cargo build          # just because

# Step 3: Set up databases
docker-compose up -d  # starts 23 containers

# Step 4: Configure environment
cp .env.example .env
# Then fill in the 847 environment variables

# Step 5: Run migrations
npm run migrate:postgres
npm run migrate:mongo     # yes mongo has migrations now
npm run migrate:redis     # don't ask

# Step 6: Seed the LLM
python ml/train.py --epochs=1000 --patience=none --hope=false

# Step 7: Start the app
npm run dev:frontend:main
npm run dev:frontend:admin
npm run dev:frontend:legacy-that-we-should-delete-but-wont
npm run dev:backend:api
npm run dev:backend:websocket
npm run dev:backend:graphql
npm run dev:backend:grpc-because-someone-insisted
python ml/serve.py
redis-server
mongod
postgres  # should already be running but who knows

# Step 8: Open http://localhost:3000
# If you see a white screen, that's normal. Wait 45 seconds.
# If you see an error, that's also normal. Refresh 3 times.
# If it works on the first try, something is wrong.
```

## Environment Variables

See `.env.example` for the full list. Here are the important ones:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Postgres connection string | Yes |
| `MONGO_URI` | MongoDB connection string | Also yes |
| `REDIS_URL` | Redis connection string | Unfortunately yes |
| `ELASTICSEARCH_URL` | We added this at 2am | Regrettably yes |
| `AI_MODEL_PATH` | Path to the 4GB model file | Sigh, yes |
| `BLOCKCHAIN_NODE_URL` | Why do we have this | No one knows |
| `JWT_SECRET` | Auth secret | Yes |
| `JWT_SECRET_2` | The other auth secret | It's complicated |
| `LEGACY_API_KEY` | For the old system | Don't touch this |
| `LEGACY_API_KEY_OLD` | For the older system | Seriously don't |
| `LEGACY_API_KEY_ANCIENT` | For the ancient system | ☠️ |
| `VIBE_CHECK` | Must be set to "immaculate" | Yes |

## Project Structure

```
├── frontend/          # React app (the new one)
├── frontend-v2/       # React app (the newer one)
├── frontend-legacy/   # jQuery app (we don't talk about this)
├── backend/           # Node.js API
├── backend-python/    # Python API (for the ML stuff)
├── ml/                # Machine learning pipeline
├── blockchain/        # Please don't look in here
├── infrastructure/    # 14 Dockerfiles and a prayer
├── node_modules/      # The real codebase
├── scripts/           # Bash scripts held together by hope
├── docs/              # Last updated 2 years ago
└── TODO.md            # 4,000 lines long
```

## Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature/add-more-databases`)
3. Write code (optional)
4. Write tests (lol)
5. Open a PR
6. Wait 6-8 months for review
7. Get asked to rebase
8. Mass-produce

## FAQ

**Q: Why are there three frontends?**
A: Each one was supposed to replace the last one. None of them did.

**Q: Why are there four databases?**
A: Redis is for caching. Postgres is for data. MongoDB is for... other data. Elasticsearch was added during an incident at 2am and now everything depends on it.

**Q: Does the blockchain actually do anything?**
A: It generates a hash of the current timestamp every 30 seconds and stores it. The investors love it.

**Q: What does the AI model do?**
A: It predicts things. What things? Depends on the day.

**Q: Is this production ready?**
A: Define "production." Define "ready."

**Q: How do I run the tests?**
A: Bold of you to assume there are tests.

## License

MIT License. Use at your own risk. We are not responsible for:
- Data loss
- Existential dread
- The blockchain thing
- Whatever is happening in `utils/helpers/misc/legacy/old/deprecated/DO_NOT_USE.js`

## Star History

If you star this repo, nothing happens. But it makes us feel nice.
