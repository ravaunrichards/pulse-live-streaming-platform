# Pulse Live — Independent Live-Streaming Platform

A responsive live-creator discovery and community starter built with Node.js and browser JavaScript. This is an original project inspired by live-streaming communities; it does not use Twitch branding or claim affiliation.

## Requirements
- Node.js 20+

## Run
```bash
npm test
npm start
```
Then visit `http://localhost:3000`.

## Included
- Responsive discovery page with channel cards and category filtering
- Account registration and login using Node `scrypt` password hashing
- Signed expiring bearer tokens (set `SESSION_SECRET` to a long random secret)
- Create channel records, switch them live/offline, and manage own channels
- Stream chat with polling, chat history and basic input validation
- Local JSON persistence in `data/db.json`
- Basic API tests with Node's built-in test runner

## Important limitations
The current version creates stream metadata and chat but does not ingest or broadcast real audio/video. The player is a placeholder. A real production streaming service requires broadcast ingestion (for example RTMP/WHIP), an HLS/WebRTC delivery pipeline, transcoding, TURN/SFU as needed, object storage/CDN, database, moderation, rate limiting, abuse prevention, account recovery, monitoring and production secrets. Local JSON storage is only for development. Do not expose this starter publicly with its default development secret.
