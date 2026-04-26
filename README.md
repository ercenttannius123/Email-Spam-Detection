# 📧 Email Spam Detection

Aplikasi web untuk mendeteksi email spam menggunakan machine learning. Sistem ini menggunakan TF-IDF vectorization dan klasifikasi machine learning untuk mengidentifikasi apakah sebuah email adalah spam atau bukan.

## 🌟 Fitur

- **Machine Learning Classification**: Menggunakan model pre-trained untuk deteksi spam email
- **REST API Backend**: Flask API untuk prediksi real-time
- **User-Friendly Frontend**: Interface React yang intuitif dan responsif
- **TF-IDF Vectorization**: Preprocessing teks canggih untuk akurasi tinggi
- **CORS Enabled**: Mendukung cross-origin requests

## 🛠️ Teknologi yang Digunakan

### Backend
- **Python 3.x**
- **Flask** - Web framework untuk REST API
- **scikit-learn** - Machine learning library untuk TF-IDF dan model
- **joblib** - Serialisasi model dan vectorizer
- **Flask-CORS** - Middleware untuk cross-origin requests

### Frontend
- **React 18.2.0** - UI library
- **Axios** - HTTP client untuk API calls
- **CSS3** - Styling

### Data & Model Training
- **Jupyter Notebook** - Untuk model development dan training
- **Pandas** - Data manipulation
- **NumPy** - Numerical computing
- **Matplotlib & Seaborn** - Data visualization

## 📁 Struktur Proyek

```
Project/
├── app.py                 # Flask API backend
├── AOL.ipynb             # Jupyter notebook untuk training model
├── spam_model.pkl        # Pre-trained ML model
├── tfidf_vectorizer.pkl  # TF-IDF vectorizer
├── README.md             # Dokumentasi proyek
├── Dataset/
│   └── email.csv         # Dataset training email
└── frontend/             # React frontend aplikasi
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js        # Main component
        ├── App.css       # Styling
        ├── index.js      # Entry point
        └── index.css
```

## 🚀 Instalasi dan Setup

### Prerequisites
- Python 3.7 atau lebih tinggi
- Node.js dan npm
- Git

### Backend Setup

1. **Clone repository dan navigate ke project folder**
```bash
cd Project
```

2. **Buat virtual environment (opsional tapi recommended)**
```bash
python -m venv venv
source venv/bin/activate  # Untuk Linux/Mac
# atau
venv\Scripts\activate     # Untuk Windows
```

3. **Install dependencies**
```bash
pip install flask flask-cors scikit-learn joblib pandas numpy matplotlib seaborn jupyter
```

4. **Pastikan model files ada**
- Pastikan file `spam_model.pkl` dan `tfidf_vectorizer.pkl` sudah ada di folder Project
- Jika belum, jalankan `AOL.ipynb` untuk generate model files

5. **Jalankan Flask server**
```bash
python app.py
```
Server akan berjalan di `http://localhost:5000`

### Frontend Setup

1. **Navigate ke frontend folder**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Jalankan React development server**
```bash
npm start
```
Aplikasi akan membuka di `http://localhost:3000`

## 📖 Penggunaan

### Melalui Frontend
1. Buka aplikasi di `http://localhost:3000`
2. Masukkan teks email di text area
3. Klik tombol "Detect Spam" untuk mendapatkan prediksi
4. Hasil akan menampilkan apakah email termasuk **SPAM** atau **NOT SPAM**

### Melalui API (REST)

**Endpoint**: `POST /predict`

**Request**:
```json
{
  "text": "Your email content here"
}
```

**Response**:
```json
{
  "email": "Your email content here",
  "prediction": "SPAM" | "NOT SPAM"
}
```

**Example dengan curl**:
```bash
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{"text": "Click here to win free money!"}'
```

**Example dengan Python**:
```python
import requests

api_url = "http://localhost:5000/predict"
data = {"text": "Click here to win free money!"}

response = requests.post(api_url, json=data)
print(response.json())
```

## 🔬 Model Training

Untuk melatih ulang model atau modifikasi:

1. Buka `AOL.ipynb` di Jupyter Notebook
```bash
jupyter notebook AOL.ipynb
```

2. Notebook mencakup:
   - Data loading dan exploratory analysis
   - Data preprocessing dan cleaning
   - Feature extraction dengan TF-IDF
   - Model training
   - Model evaluation
   - Model serialisasi

3. Run semua cells untuk generate model files baru:
   - `spam_model.pkl`
   - `tfidf_vectorizer.pkl`

## 📊 Dataset

Dataset yang digunakan:
- **File**: `Dataset/email.csv`
- **Format**: CSV dengan encoding latin-1
- **Kolom utama**: 
  - Text content: Isi email
  - Category: Label (SPAM/NOT SPAM)

## ⚙️ Konfigurasi

### Frontend API URL
Ubah URL backend di `frontend/src/App.js`:
```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

Atau set environment variable:
```bash
set REACT_APP_API_URL=http://your-api-url:5000  # Windows
export REACT_APP_API_URL=http://your-api-url:5000  # Linux/Mac
```

### Backend Port
Ubah port di `app.py`:
```python
if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Ubah port di sini
```

## 🐛 Troubleshooting

**Error: "spam_model.pkl not found"**
- Jalankan `AOL.ipynb` untuk generate model files

**Error: "Cannot connect to API"**
- Pastikan Flask server berjalan
- Check CORS settings di `app.py`
- Verify API URL di frontend

**CORS Error**
- Pastikan `flask_cors` sudah terinstall
- Verify CORS configuration di `app.py`

## 📝 Dokumentasi Model

### Algoritma
- **Vectorization**: TF-IDF (Term Frequency-Inverse Document Frequency)
- **Classification**: Support Vector Machine atau algoritma ML lainnya
- **Preprocessing**: Text cleaning, tokenization, normalization

### Performance Metrics
Lihat `AOL.ipynb` untuk:
- Accuracy score
- Precision, Recall, F1-score
- Confusion matrix
- ROC-AUC curve


## 📄 License

Proyek ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail.


## 📚 Referensi

- [scikit-learn Documentation](https://scikit-learn.org/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://react.dev/)
- [TF-IDF Vectorization](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)

## 💡 Future Improvements

- [ ] Tambahkan real-time model update
- [ ] Implement user authentication
- [ ] Add email attachment detection
- [ ] Tambahkan multi-language support
- [ ] Deploy ke cloud platform
- [ ] Add unit tests dan integration tests
- [ ] Implement logging system
- [ ] Add model performance monitoring

---

