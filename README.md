# Claryxa

> AI-powered personal learning workspace that transforms study materials into interactive learning tools.

Claryxa is an intelligent study platform that combines document management, AI-assisted learning, and productivity tracking into a single workspace. Users can upload notes, PDFs, presentations, and study material, then interact with them through AI-powered chat, summaries, quizzes, flashcards, and concept explanations.

The goal of Claryxa is simple:

**Upload → Understand → Learn**

---

# Features

## AI Learning Assistant
- Ask questions directly from uploaded documents
- Context-aware responses using RAG pipelines
- Beginner-friendly concept simplification
- AI-generated explanations based on study material

## Smart Study Tools
- Automatic summaries
- Flashcard generation
- Quiz & MCQ generation
- Key point extraction
- Revision-focused workflows

## Document Workspace
- Upload and manage:
  - PDF
  - DOCX
  - PPTX
  - TXT
- Folder & subfolder organization
- Search and filtering
- File management system

## RAG-Based AI System
- Text extraction
- Chunking & embeddings
- Vector similarity search
- Retrieval-Augmented Generation (RAG)
- Context-grounded AI responses

## Productivity & Analytics
- Study session tracking
- Learning streaks
- Weekly study analytics
- Progress visualization
- Daily goals

## Tasks & Calendar
- Task management
- Calendar integration
- Study scheduling

---

# Tech Stack

## Frontend
- React
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Vite

## Backend
- FastAPI
- Python

## AI & RAG
- Google Gemini / OpenAI
- LangChain
- ChromaDB
- Embeddings
- Retrieval-Augmented Generation

## Document Processing
- LibreOffice (headless conversion)
- PyMuPDF
- python-docx
- python-pptx

## Database & Storage
- Supabase
- PostgreSQL
- Supabase Storage

---

# Architecture

```txt
Frontend (React + Tailwind)
        ↓
Backend API (FastAPI)
        ↓
Document Processing Pipeline
        ↓
RAG System (Chunking + Embeddings)
        ↓
Vector Database (ChromaDB)
        ↓
AI Model (Gemini / OpenAI)
        ↓
Analytics & Storage (Supabase)
```

---

# AI Workflow

```txt
User uploads document
        ↓
Text extraction
        ↓
Chunking (~500 token chunks)
        ↓
Embedding generation
        ↓
Store in ChromaDB
        ↓
User asks question
        ↓
Similarity search
        ↓
Relevant chunks retrieved
        ↓
Prompt built
        ↓
AI generates contextual response
```

---

# File Processing Pipeline

All uploaded documents are normalized into PDF format for consistent rendering and AI processing.

```txt
DOCX / PPTX / TXT
        ↓
LibreOffice Conversion
        ↓
PDF
        ↓
Text Extraction
        ↓
AI Processing
```

---

# Security Measures

- JWT Authentication
- Row Level Security (RLS)
- Signed URLs for document access
- API rate limiting
- File type validation
- Input sanitization
- Prompt injection protection

---

# Project Status

Claryxa is a completed full-stack AI learning platform prototype focused on:
- AI-assisted studying
- Document intelligence
- Productivity-driven learning
- Modern educational workflows

---

# Future Improvements

- OCR support for scanned PDFs
- Multi-document AI querying
- Smart AI-curated folders
- Collaborative workspaces
- Advanced analytics
- Offline/local AI models
- Mobile application support

---

# Inspiration

Claryxa was designed as a blend of:
- Cloud document management
- AI-assisted learning
- Personalized study systems
- Productivity analytics

Think of it as:

> Google Drive + ChatGPT + Smart Study Assistant

---

# Development Notes

This project was designed and developed as a solo-developer AI platform architecture experiment focused on scalable educational workflows and modern AI integration patterns.

---

# License

This project is intended for educational and portfolio purposes.

---

# References

Project architecture and development planning were based on the internal Claryxa documentation and development guides.
