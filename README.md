1. 🌟 Famofc WhatsApp Bot

![Node.js](https://img.shields.io/badge/Node.js-v14.x+-green?logo=node.js)![License](https://img.shields.io/badge/License-MIT-blue)![Baileys](https://img.shields.io/badge/Baileys-WhatsApp%20API-orange)![Maintained](https://img.shields.io/badge/Maintained-Yes-brightgreen)A **feature-rich WhatsApp bot** built with **Node.js** and the **Baileys library**, designed to provide media processing, group management, and automated responses for an enhanced WhatsApp experience. 🚀

---

## 🎯 Features

- 🖼️ **Media Processing**: Convert images/videos to stickers, upload images, and generate fake TikTok profiles.
- 👥 **Group Management**: Open/close groups, kick members, hide tags, and manage anti-link settings.
- 🤖 **Automation**: Auto-respond to messages, greet owners with custom messages, and handle group events.
- 💻 **Custom Commands**: Includes `.brat`, `.jpm`, `.listgc`, `.addown`, `.sticker`, and more!
- 📊 **Database Integration**: Stores user and group data with periodic saving.
- 🛡️ **Error Handling**: Robust handling for connection issues and command execution.

---

## 📋 Prerequisites

Before you begin, ensure you have the following:

- **Node.js**: Version 14.x or higher
- **WhatsApp Account**: For pairing via phone number or QR code
- **FFmpeg**: Required for video/sticker processing
- **Dependencies**: Listed in `package.json`

---

## 🛠️ Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/famofc/famofc-bot.git
   cd famofc-bot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment**:

   - Create `./data` directory with `reseller.json`, `owner.json`, `list.json`, and `whitelistid.json`.
   - Add `fam.jpg` to the `./media` directory for specific commands.
   - Create a `./session` directory for WhatsApp authentication credentials.

4. **Install FFmpeg**:

   - **Ubuntu**: `sudo apt-get install ffmpeg`
   - **Windows/Mac**: Download from FFmpeg Official Site

---

## 🚀 Usage

1. **Start the Bot**:

   ```bash
   npm start
   ```

2. **Pairing**:

   - Enter your WhatsApp number when prompted to receive a pairing code, or scan the QR code if `usePairingCode` is set to `false` in `index.js`.

3. **Popular Commands**:

   - `.sticker` or `.s`: Convert images/videos to stickers.
   - `.jpm <text>`: Broadcast messages (with optional images) to all groups.
   - `.listgc`: List all groups the bot is in.
   - `.addown <number>`: Add a new owner.
   - `.kick <@tag>`: Remove a user from a group.
   - `.brat <text>`: Create an animated sticker with custom text.
   - `.public` / `.self`: Toggle between public and private bot modes.

   Explore more commands in the `famofc.js` file or by interacting with the bot!

---

## ⚙️ Configuration

- **Global Variables**: Set `global.owner`, `global.packname`, `global.author`, etc., in `./system/global.js`.
- **Database**: Uses `./system/database.js` for managing group and user data.
- **Anti-Link**: Enable/disable via `db.groups[m.chat].antilink` in the database.

---

## 📂 File Structure

```
famofc-bot/
├── data/                  # JSON files (reseller.json, owner.json, etc.)
├── media/                 # Media files (e.g., fam.jpg)
├── session/               # WhatsApp authentication credentials
├── system/                # Utility functions and database modules
├── famofc.js              # Core command logic
├── index.js               # Main entry point
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 📦 Dependencies

Key dependencies include:

- `@hapi/boom`: Error handling
- `baileys`: WhatsApp Web API (custom fork: `famofc/famofcbaileys`)
- `canvas`, `fluent-ffmpeg`, `jimp`: Media processing
- `axios`, `node-fetch`, `cheerio`: Web scraping and API calls
- `pino`: Logging

Check `package.json` for the full list.

---

## 🔍 Notes

- **Public vs. Private Mode**: Toggle with `.public` or `.self` commands (`famofc.public` in `index.js`/`famofc.js`).
- **Owner-Only Commands**: Restricted to numbers in `owner.json` or `global.owner`.
- **Connection Stability**: Ensure a stable internet to avoid `DisconnectReason.connectionLost`.
- **Auto-Restart**: Handles errors like `DisconnectReason.restartRequired` automatically.

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Report bugs or suggest features via GitHub Issues.

---

## 🙌 Credits

- **Base Code**: YASSxOFC
- **Recoded By**: famofc
- **Developer**: Faheem

---

## 📜 License

This project is licensed under the **MIT License**. See `package.json` for details.

---

**Made with ❤️ for WhatsApp automation enthusiasts!**
