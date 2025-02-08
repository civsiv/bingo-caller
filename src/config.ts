export const CONFIG = {
    CALL_INTERVAL: Number(process.env.BINGO_CALL_INTERVAL) || 3000,
    VOICE: process.env.BINGO_VOICE || 'Kate' // Default voice (use 'Microsoft Zira' on Windows)
}; 