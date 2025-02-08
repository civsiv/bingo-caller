import { BingoCaller } from './BingoCaller';
import { CONFIG } from './config';
import say from 'say';

class BingoGame {
    private game: BingoCaller;
    private intervalId: NodeJS.Timeout | null = null;
    private readonly CALL_INTERVAL = CONFIG.CALL_INTERVAL;
    private isSpeaking = false;

    constructor() {
        this.game = new BingoCaller();
    }

    public start(): void {
        console.log('Starting new Bingo game!');
        console.log(`Numbers will be called every ${this.CALL_INTERVAL/1000} seconds. Press Ctrl+C to stop.`);
        console.log('----------------------------------------');

        // Call first number immediately
        this.callNumber();

        // Set up interval for subsequent calls
        this.intervalId = setInterval(() => {
            if (!this.isSpeaking) {
                this.callNumber();
            }
        }, this.CALL_INTERVAL);
    }

    private async callNumber(): Promise<void> {
        try {
            const call = this.game.callNumber();
            console.log(`${call.phrase} - ${call.number}`);
            
            this.isSpeaking = true;
            
            // Speak the phrase and number
            await this.speak(`${call.phrase}... ${call.number}`);
            
            this.isSpeaking = false;
        } catch (error) {
            if (error instanceof Error) {
                console.log('\nGame Over:', error.message);
                this.stop();
            }
        }
    }

    private speak(text: string): Promise<void> {
        return new Promise((resolve) => {
            say.speak(text, CONFIG.VOICE, 1.2, (err: any) => {
                if (err) {
                    console.error('TTS Error:', err);
                }
                resolve();
            });
        });
    }

    public stop(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        // Stop any ongoing speech
        say.stop();
        
        const calledNumbers = this.game.getCalledNumbers();
        console.log('\nGame Summary:');
        console.log(`Total numbers called: ${calledNumbers.length}`);
        console.log('----------------------------------------');
    }
}

// Start the game
const game = new BingoGame();
game.start();

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\nStopping game...');
    game.stop();
    process.exit(0);
}); 