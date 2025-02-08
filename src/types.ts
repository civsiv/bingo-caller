export interface BingoNumber {
    number: number;
    called: boolean;
}

export interface GameState {
    numbers: BingoNumber[];
    currentNumber: number | null;
}

export interface BingoCall {
    number: number;
    phrase: string;
} 