# EToH Lock

A community list of blacklisted players in the obby community. The site displays locked accounts, their lock levels, and the evidence behind each decision.

**Lock levels:**
- `LL3` - Severe. Banned from all servers regardless of tier.
- `LL2` - Moderate. Banned from tier 2 and tier 3 servers.
- `LL1` - Low. Banned from tier 3 servers only.

## Contributing Evidence

Evidence files are in the `static/evidence/` folder. Each file is named after the player exactly as they appear in the spreadsheet (case-sensitive) and written in Markdown (`PlayerName.md`).

### Adding or updating an evidence file
If you have new Discord IDs that need to be added, let a staff member know.

1. Fork the repository and create a branch named `evidence/PlayerName`.
2. Create or edit `static/evidence/PlayerName.md` based on new or existing evidence.
3. All assets (images, videos, etc) should be uploaded to `static/assets/evidence-files/` with the following naming convention: `PlayerName-001.png`, `PlayerName-002.mp4`, etc.
5. Open a pull request with a short description of what you're adding or changing.

### Guidelines

- **NSFW, GORE, CSAM, AND OTHER SHOCK CONTENT SHOULD BE CENSORED!** Everything else should be uploaded as-is if possible.
- Be factual. Stick to what can be verified with the linked evidence.
- Describe what happened, not how you feel about it.
- Screenshots should be unedited, and video evidence is preferred for behavioral incidents.

## Running Locally

1. Install dependencies:
```
   pip install flask google-auth google-api-python-client markdown python-dotenv
```

2. Create a `.env` file in the project root with your Google service account credentials:
```
   GOOGLE_CREDENTIALS={"type":"service_account", ...}
```

3. Run the app:
```
   python app.py
```

The site will be available at `http://localhost:5000`.