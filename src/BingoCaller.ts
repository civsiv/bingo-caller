import { BingoNumber, GameState, BingoCall } from './types';
import { bingoCalls } from './bingoCalls';

export class BingoCaller {
    private gameState: GameState;

    constructor() {
        this.gameState = {
            numbers: this.initializeNumbers(),
            currentNumber: null
        };
    }

    private initializeNumbers(): BingoNumber[] {
        return Array.from({ length: 75 }, (_, index) => ({
            number: index + 1,
            called: false
        }));
    }

    public callNumber(): BingoCall {
        const number = this.getNextNumber();
        return {
            number,
            phrase: this.getCallPhrase(number)
        };
    }

    private getNextNumber(): number {
        const uncalledNumbers = this.gameState.numbers.filter(n => !n.called);
        
        if (uncalledNumbers.length === 0) {
            throw new Error('All numbers have been called!');
        }

        const randomIndex = Math.floor(Math.random() * uncalledNumbers.length);
        const selectedNumber = uncalledNumbers[randomIndex];
        
        // Mark the number as called
        const numberIndex = this.gameState.numbers.findIndex(n => n.number === selectedNumber.number);
        this.gameState.numbers[numberIndex].called = true;
        this.gameState.currentNumber = selectedNumber.number;

        return selectedNumber.number;
    }

    private getCallPhrase(number: number): string {
        const calls = bingoCalls.get(number);
        if (!calls) {
            return `Number ${number}`;
        }

        // Combine primary and alternates into one array
        const allPhrases = [calls.primary, ...calls.alternates];
        
        // Pick a random phrase
        const randomIndex = Math.floor(Math.random() * allPhrases.length);
        return allPhrases[randomIndex];
    }

    public getCurrentNumber(): number | null {
        return this.gameState.currentNumber;
    }

    public getCalledNumbers(): number[] {
        return this.gameState.numbers
            .filter(n => n.called)
            .map(n => n.number);
    }

    public resetGame(): void {
        this.gameState = {
            numbers: this.initializeNumbers(),
            currentNumber: null
        };
    }
} 