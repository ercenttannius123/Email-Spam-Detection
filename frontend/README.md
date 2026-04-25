# Email Spam Detector Frontend

React frontend untuk Email Spam Detection menggunakan Flask API.

## Setup

### Prerequisites
- Node.js (v14 atau lebih tinggi)
- npm atau yarn

### Installation

1. Navigate ke folder frontend:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

### Running

1. Pastikan Flask API berjalan di `http://localhost:5000`:
```bash
# Di folder project utama
python app.py
```

2. Jalankan React dev server:
```bash
npm start
```

3. Buka browser dan kunjungi `http://localhost:3000`

## Features

- ✨ Input email text untuk dianalisis
- 🤖 Predict spam/not spam menggunakan AI model
- 📊 Real-time result display
- 🎨 Modern UI dengan gradien background
- ⚡ Loading state dan error handling
- 📱 Responsive design untuk mobile

## Build untuk Production

```bash
npm run build
```

Output akan tersimpan di folder `build/`.

## File Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main component
│   ├── App.css         # Styling
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## API Integration

Frontend menghubung ke Flask API di endpoint:
- **POST** `http://localhost:5000/predict`
- Request: `{ "text": "email content" }`
- Response: `{ "email": "content", "prediction": "SPAM" | "NOT SPAM" }`
