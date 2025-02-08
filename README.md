# Bingo Caller

A TypeScript-based bingo number caller that announces numbers with traditional British bingo calls. Features text-to-speech announcements and customizable call intervals.

## Features

- Traditional British bingo calls for numbers 1-75
- Text-to-speech announcements
- Multiple call variations for each number
- Configurable call intervals
- Clean shutdown with game summary
- Cross-platform support (Windows, macOS, Linux)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bingo_caller
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## Usage

### Basic Start
```bash
npm start
```

### Speed Options
- Fast mode (2-second intervals):
```bash
npm run start:fast
```

- Slow mode (10-second intervals):
```bash
npm run start:slow
```

### Custom Configuration

You can customize the caller using environment variables:

- Set custom call interval (in milliseconds):
```bash
BINGO_CALL_INTERVAL=3000 npm start
```

- Change the voice (depends on your operating system):
```bash
BINGO_CALL_INTERVAL=5000 BINGO_VOICE="Samantha" npm start
```

### Available Voices

#### macOS
- Alex
- Daniel (default)
- Samantha
- Victoria
- And more (check with `say -v ?`)

#### Windows
- Microsoft David Desktop
- Microsoft Zira Desktop
- And more (check Speech settings)

#### Linux
- Check available voices with `say -v ?`

## Controls

- **Start Game**: Run any of the start commands above
- **Stop Game**: Press `Ctrl+C`
- **Game Summary**: Displayed automatically when the game ends or is stopped

## Project Structure

```
bingo_caller/
├── src/
│   ├── index.ts         # Main game logic
│   ├── BingoCaller.ts   # Bingo caller class
│   ├── bingoCalls.ts    # Bingo call definitions
│   ├── config.ts        # Configuration
│   └── types.ts         # TypeScript types
├── package.json
└── tsconfig.json
```

## Development

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Building
```bash
npm run build
```

### Scripts
- `npm run build` - Builds the TypeScript code
- `npm start` - Builds and runs the game
- `npm run start:fast` - Runs with 2-second intervals
- `npm run start:slow` - Runs with 10-second intervals

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request