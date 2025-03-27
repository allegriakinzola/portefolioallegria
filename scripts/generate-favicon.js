const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Créer un canvas carré pour le favicon
const size = 32;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Définir le fond
ctx.fillStyle = '#4F46E5';
ctx.fillRect(0, 0, size, size);

// Configurer le texte
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 20px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Dessiner le texte
ctx.fillText('AK', size / 2, size / 2);

// Sauvegarder l'image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), buffer);
