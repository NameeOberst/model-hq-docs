# What is parsing?

Parsing is the process of **taking apart a document and turning it into structured information that a computer can understand.**

When a file is uploaded—such as a PDF, Word document, or even a scanned image—the raw content is not always in a form that an AI model can easily read. For example, text in a PDF might be stored in fragments, out of order, or even as part of an image.
Parsing is the step that:

- **Extracts the text** from the document
- **Identifies structure** such as paragraphs, headings, tables, and lists
- **Organizes the content** so it can be searched, analyzed, or fed into an AI model

Parsing can be thought of as **translating a messy document into a clean, machine-readable format.** Without it, the AI might miss key information, read text in the wrong order, or ignore data entirely.

In short: *Parsing is how Model HQ ensures documents are cleanly understood before any AI tasks—like answering questions, summarizing, or running analysis—are applied.*  

## Document parsing options

Model HQ provides multiple parsing modes to ensure accuracy and speed across different types of documents.

- **Native Parser (Default)**
  The **native parser** is the fastest option and works extremely well for the majority of text-based documents. It is optimized for performance and should be used as the primary method whenever possible.

- **OCR Parsing**
  Some documents may be **image-based** (such as scanned PDFs or files with embedded text as images). In these cases, Optical Character Recognition (OCR) parsing is required to accurately extract text.

- **Vision Model Parsing**
  For documents that include **many images, complex layouts, or require multimodal understanding**, a Vision model can be used. This option leverages advanced AI vision capabilities to interpret both text and visual content.


## How to select parsing options for RAG use cases for chat interfaces
1. In Chat or Bot: The ⚙ icon below the chat box can be clicked.
2. In the **RAG + Generation Config Options**, selection can be made between:
   - **Native Parser** (default, fastest)
   - **OCR** (for image-based documents)
   - **Vision Model** (for documents rich in images or requiring visual context)

## Conclusion

This document described what parsing is and how Model HQ uses different parsing methods to extract and structure information from uploaded documents. Parsing is the critical first step that transforms raw document content into machine-readable format, enabling AI models to accurately search, analyze, and answer questions about the content. Model HQ provides three parsing options—Native Parser for standard text-based documents, OCR for image-based or scanned documents, and Vision Model for complex layouts with multimodal content. The appropriate parsing method can be selected based on document type and content complexity to ensure optimal accuracy and performance.  
