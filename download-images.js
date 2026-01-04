const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f70504504?w=600&h=600&fit=crop&q=80',
    name: 'hero-students.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1427504494785-cdba58dadff6?w=600&h=400&fit=crop',
    name: 'admission.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
    name: 'accommodation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    name: 'family.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    name: 'career.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop',
    name: 'about.jpg'
  }
];

const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

images.forEach(({ url, name }) => {
  const filePath = path.join(publicDir, name);
  https.get(url, (response) => {
    response.pipe(fs.createWriteStream(filePath));
    console.log(`Downloaded ${name}`);
  });
});
