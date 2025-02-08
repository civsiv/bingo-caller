declare module 'say' {
    const say: {
        speak: (text: string, voice?: string, speed?: number, callback?: (err: Error) => void) => void;
        stop: () => void;
    };
    export = say;
} 