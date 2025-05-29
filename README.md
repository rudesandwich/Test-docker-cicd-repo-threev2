# Test-docker-cicd-repo-threev2


# Containerized Node.js Hello World with CI/CD
A Node.js app serving a "Hello World" webpage, containerized with Docker, automated via GitHub Actions CI/CD with testing, built on a mobile device.
## Features
- Node.js/Express app with one endpoint.
- CI/CD pipeline with Jest tests.
- Pushes to `sandwich5230/my-node-api:latest`.
## How to Run
1. Clone: `git clone https://github.com/rudesandwich/Test-docker-cicd-repo-three.git`
2. Build: `docker build -t sandwich5230/my-node-api:latest .`
3. Run: `docker run -p 8080:3000 sandwich5230/my-node-api:latest`
4. Open `localhost:8080`.
## CI/CD Workflow
- Triggers on `main` branch pushes.
- Installs Node.js dependencies, runs Jest tests.
- Builds and pushes Docker image.
## Next Steps
- Deploy live on Oracle Cloud.
- Add more endpoints.