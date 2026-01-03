import os
import fitz  # PyMuPDF
import spacy
from flask import Flask, render_template, request
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

UPLOAD_FOLDER = "resumes"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

nlp = spacy.load("en_core_web_sm")


def extract_text_from_pdf(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        text += page.get_text()
    return text


def rank_resumes(job_desc, resumes):
    documents = [job_desc] + resumes
    vectorizer = TfidfVectorizer(stop_words="english")
    vectors = vectorizer.fit_transform(documents)
    scores = cosine_similarity(vectors[0:1], vectors[1:]).flatten()
    return scores


@app.route("/", methods=["GET", "POST"])
def index():
    rankings = []

    if request.method == "POST":
        job_desc = request.form["job_description"]
        files = request.files.getlist("resumes")

        resume_texts = []
        resume_names = []

        for file in files:
            path = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(path)
            text = extract_text_from_pdf(path)
            resume_texts.append(text)
            resume_names.append(file.filename)

        scores = rank_resumes(job_desc, resume_texts)

        rankings = sorted(
            zip(resume_names, scores),
            key=lambda x: x[1],
            reverse=True
        )

    return render_template("index.html", rankings=rankings)


if __name__ == "__main__":
    app.run(debug=True)
