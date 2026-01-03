The AI-Based Resume Screening System is a web application designed to automate the resume shortlisting process for HR teams. The system analyzes resumes using Natural Language Processing (NLP) techniques and ranks candidates based on their similarity to a given job description. This reduces manual effort, saves time, and improves hiring accuracy.
1️⃣ Importing Required Libraries 📦
import os
import fitz
import spacy
from flask import Flask, render_template, request
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

Explanation:

📁 os – Handles file and folder operations

📄 fitz (PyMuPDF) – Extracts text from PDF resumes

🧠 spacy – NLP library for text processing

🌐 Flask – Creates the web application

📊 TfidfVectorizer – Converts text into numerical format

🔍 cosine_similarity – Calculates similarity between resumes and job description

2️⃣ Flask App Initialization 🚀
app = Flask(__name__)

Explanation:

🌐 Initializes the Flask application

__name__ helps Flask locate resources and templates

3️⃣ Resume Upload Folder Creation 📂
UPLOAD_FOLDER = "resumes"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

Explanation:

📁 Creates a folder named resumes

exist_ok=True prevents errors if the folder already exists

4️⃣ Loading NLP Model 🧠
nlp = spacy.load("en_core_web_sm")

Explanation:

🧠 Loads spaCy’s English NLP model

Used for text understanding and processing

5️⃣ PDF Text Extraction Function 📄
def extract_text_from_pdf(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        text += page.get_text()
    return text

Explanation:

📄 Opens the uploaded PDF file

🔄 Reads each page and extracts text

📝 Returns complete resume text as a string

6️⃣ Resume Ranking Function 📊
def rank_resumes(job_desc, resumes):
    documents = [job_desc] + resumes
    vectorizer = TfidfVectorizer(stop_words="english")
    vectors = vectorizer.fit_transform(documents)
    scores = cosine_similarity(vectors[0:1], vectors[1:]).flatten()
    return scores

Explanation:

📋 Combines job description and resumes into one list

📊 Converts text into TF-IDF vectors

🔍 Calculates cosine similarity between job description and resumes

🏆 Returns similarity scores for ranking

7️⃣ Main Route for Upload & Processing 🌐
@app.route("/", methods=["GET", "POST"])
def index():

Explanation:

🌐 Handles both page display (GET) and form submission (POST)

8️⃣ Handling Resume Uploads 📥
files = request.files.getlist("resumes")

Explanation:

📂 Collects multiple uploaded resume files from the form

9️⃣ Saving & Processing Resumes 🛠
for file in files:
    path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(path)
    text = extract_text_from_pdf(path)

Explanation:

💾 Saves each resume in the server

📄 Extracts text from each PDF

🧠 Stores extracted text for analysis

🔟 Ranking & Sorting Candidates 🏆
rankings = sorted(
    zip(resume_names, scores),
    key=lambda x: x[1],
    reverse=True
)

Explanation:

🔗 Links resume names with similarity scores

📊 Sorts candidates from highest to lowest score

🏆 Best-matched candidate appears first

1️⃣1️⃣ Displaying Results in UI 🖥
return render_template("index.html", rankings=rankings)

Explanation:

🌐 Sends ranked results to HTML page

📋 Displays candidate ranking to HR user

1️⃣2️⃣ Running the Application ▶️
if __name__ == "__main__":
    app.run(debug=True)

Explanation:

▶️ Starts the Flask server

🐞 debug=True helps identify errors during development
