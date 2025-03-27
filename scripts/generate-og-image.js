const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Créer un canvas avec les dimensions souhaitées
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Définir le fond
ctx.fillStyle = '#1a1a1a';
ctx.fillRect(0, 0, width, height);

// Configurer le texte
ctx.fillStyle = '#4F46E5';
ctx.font = 'bold 200px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Dessiner le texte
ctx.fillText('AK', width / 2, height / 2);

// Sauvegarder l'image
const buffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync(path.join(__dirname, '../public/og-image.jpg'), buffer);
