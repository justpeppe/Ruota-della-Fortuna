import { generateBoardMatrix } from './src/utils/boardLogic.js';

const phrases = [
    "IL CENONE DI CAPODANNO", // Original case
    "POPCORN",                // Short case
    "LA GIOCONDA",            // 2 words
    "SUPER CALIFRAGILISTIC ESPIALIDOCIOUS" // Long words (will test wrap)
];

phrases.forEach(phrase => {
    console.log(`--- Phrase: ${phrase} ---`);
    const matrix = generateBoardMatrix(phrase);
    console.log(`Rows: ${matrix.length}`);
    matrix.forEach((row, i) => {
        console.log(`Row ${i} length: ${row.length}`);
        const line = row.map(cell => {
            if (cell.isMissingSlot) return 'X';
            if (cell.char) return cell.char;
            return '.';
        }).join('');
        console.log(line);
    });
});
