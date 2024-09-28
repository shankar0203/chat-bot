from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from model.your_model import process_document

app = Flask(__name__)
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    # Process the uploaded document
    response = process_document(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return jsonify({'response': response})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
