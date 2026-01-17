import type { SearchResult } from "./search-result";

export const v1SearchData: SearchResult[] = [
  // ==================== CHAT SECTION ====================
  // V1 Chat Documentation - Pages
  {
    title: "Chat (v1)",
    url: "/v1/chat",
    type: "page",
    description: "Explore chat functionality and model interactions in Model HQ v1",
  },
  {
    title: "Chat Configuration (v1)",
    url: "/v1/chat/chat-configuration",
    type: "page",
    description: "Configure chat settings and parameters in v1",
  },
  {
    title: "Error Handling in Chat (v1)",
    url: "/v1/chat/error-handling",
    type: "page",
    description: "Troubleshoot chat-related issues in v1",
  },
  {
    title: "Document Parsing Issues (v1)",
    url: "/v1/chat/document-parsing-issues",
    type: "page",
    description: "Troubleshooting document parsing and limitations in v1",
  },
  
  // V1 Chat - Headings
  {
    title: "Launching the Chat Interface (v1)",
    url: "/v1/chat#1-launching-the-chat-interface",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Chat Interface Overview (v1)",
    url: "/v1/chat#2-chat-interface-overview",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Model Selector (v1)",
    url: "/v1/chat#21-model-selector",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Sources - RAG / Document Chat (v1)",
    url: "/v1/chat#22-sources-rag-document-chat",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Containers as Sources (v1)",
    url: "/v1/chat#221-containers-as-sources",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Prompts (v1)",
    url: "/v1/chat#23-prompts",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Web Search (v1)",
    url: "/v1/chat#24-web-search",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Configure Chat (v1)",
    url: "/v1/chat#25-configure",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Chat Info (v1)",
    url: "/v1/chat#26-info",
    type: "heading",
    parentPage: "Chat (v1)",
  },
  {
    title: "Save / Export Chat (v1)",
    url: "/v1/chat#27-save-export-chat",
    type: "heading",
    parentPage: "Chat (v1)",
  },

  // V1 Chat Configuration - Headings
  {
    title: "Opening Configuration Panel (v1)",
    url: "/v1/chat/chat-configuration#1-opening-the-configuration-panel",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Configuration Options (v1)",
    url: "/v1/chat/chat-configuration#2-configuration-options",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Configuration Parameters Overview (v1)",
    url: "/v1/chat/chat-configuration#3-configuration-parameters-overview",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Use Memory in Chat (v1)",
    url: "/v1/chat/chat-configuration#31-use-memory-in-chat",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Memory Apply Rule (v1)",
    url: "/v1/chat/chat-configuration#32-memory-apply-rule",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Memory Apply Role (v1)",
    url: "/v1/chat/chat-configuration#33-memory-apply-role",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "context_top_n (v1)",
    url: "/v1/chat/chat-configuration#34-context_top_n",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "context_target_size (v1)",
    url: "/v1/chat/chat-configuration#35-context_target_size",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "max_output (v1)",
    url: "/v1/chat/chat-configuration#36-max_output",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "temperature (v1)",
    url: "/v1/chat/chat-configuration#37-temperature",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Query Strategy (v1)",
    url: "/v1/chat/chat-configuration#38-query-strategy",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Sample in Generation (v1)",
    url: "/v1/chat/chat-configuration#39-sample-in-generation",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Table Only Mode (v1)",
    url: "/v1/chat/chat-configuration#310-table-only-mode",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Interpret CSV as DB Table (v1)",
    url: "/v1/chat/chat-configuration#311-interpret-csv-as-db-table",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "PDF Parsing Options (v1)",
    url: "/v1/chat/chat-configuration#312-pdf-parsing-options",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Show Search Results and Context (v1)",
    url: "/v1/chat/chat-configuration#313-show-search-results-and-context",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Recommended Configurations by Use Case (v1)",
    url: "/v1/chat/chat-configuration#4-recommended-configurations-by-use-case",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Factual Q&A Configuration (v1)",
    url: "/v1/chat/chat-configuration#41-factual-qa-high-accuracy",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Creative Writing Configuration (v1)",
    url: "/v1/chat/chat-configuration#42-creative-writing-assistance",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Data Analysis Configuration (v1)",
    url: "/v1/chat/chat-configuration#43-data-analysis-with-csv",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },
  {
    title: "Exploratory Research Configuration (v1)",
    url: "/v1/chat/chat-configuration#44-exploratory-research",
    type: "heading",
    parentPage: "Chat Configuration (v1)",
  },

  // V1 Chat Error Handling - Headings
  {
    title: "Possible Errors During Model Download (v1)",
    url: "/v1/chat/error-handling#possible-errors-during-model-download",
    type: "heading",
    parentPage: "Error Handling in Chat (v1)",
  },

  // V1 Chat Document Parsing Issues - Headings
  {
    title: "Handling Documents That Cannot Be Natively Parsed (v1)",
    url: "/v1/chat/document-parsing-issues#1-handling-documents-that-cannot-be-natively-parsed",
    type: "heading",
    parentPage: "Document Parsing Issues (v1)",
  },
  {
    title: "In Chat (v1)",
    url: "/v1/chat/document-parsing-issues#11-in-chat",
    type: "heading",
    parentPage: "Document Parsing Issues (v1)",
  },
  {
    title: "In Agents (v1)",
    url: "/v1/chat/document-parsing-issues#12-in-agents",
    type: "heading",
    parentPage: "Document Parsing Issues (v1)",
  },
  {
    title: "Fallback Solution (v1)",
    url: "/v1/chat/document-parsing-issues#2-fallback-solution",
    type: "heading",
    parentPage: "Document Parsing Issues (v1)",
  },
  {
    title: "How to Activate OCR (v1)",
    url: "/v1/chat/document-parsing-issues#21-how-to-activate-ocr",
    type: "heading",
    parentPage: "Document Parsing Issues (v1)",
  },
  
  // ==================== MODELS SECTION ====================
  // V1 Models Documentation - Pages
  {
    title: "Models (v1)",
    url: "/v1/models",
    type: "page",
    description: "Explore and manage models in Model HQ v1",
  },
  {
    title: "Model Configuration (v1)",
    url: "/v1/models/model-configuration",
    type: "page",
    description: "Configure model settings and orchestration in v1",
  },
  {
    title: "Custom Test (v1)",
    url: "/v1/models/custom-test",
    type: "page",
    description: "Create and run custom tests for model inferencing in v1",
  },

  // V1 Models - Headings
  {
    title: "Launching the Models Interface (v1)",
    url: "/v1/models#1-launching-the-models-interface",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Models Interface Overview (v1)",
    url: "/v1/models#2-models-interface-overview",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Model Card (v1)",
    url: "/v1/models#21-model-card-",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Download Models (v1)",
    url: "/v1/models#22-download",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Test Models (v1)",
    url: "/v1/models#23-test",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Test Type (v1)",
    url: "/v1/models#test-type",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "My Models (v1)",
    url: "/v1/models#24-my-models",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "All Models (v1)",
    url: "/v1/models#25-all",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Refresh Models (v1)",
    url: "/v1/models#26-refresh",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Models Config (v1)",
    url: "/v1/models#27-models-config-",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Troubleshoot Models (v1)",
    url: "/v1/models#28-troubleshoot",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Delete Models (v1)",
    url: "/v1/models#29-delete",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Models Info (v1)",
    url: "/v1/models#210-info",
    type: "heading",
    parentPage: "Models (v1)",
  },
  {
    title: "Models Interface Controls Summary (v1)",
    url: "/v1/models#3-models-interface-controls-summary",
    type: "heading",
    parentPage: "Models (v1)",
  },

  // V1 Model Configuration - Headings
  {
    title: "Opening Model Configuration Panel (v1)",
    url: "/v1/models/model-configuration#1-opening-the-configuration-panel",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Configuration Parameters Overview (v1)",
    url: "/v1/models/model-configuration#2-configuration-parameters-overview",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Model Visibility and Discovery (v1)",
    url: "/v1/models/model-configuration#3-model-visibility-and-discovery",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Show Cached Models Only (v1)",
    url: "/v1/models/model-configuration#31-show-cached-models-only",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Show Model Types (v1)",
    url: "/v1/models/model-configuration#32-show-model-types",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Show NPU Models First (v1)",
    url: "/v1/models/model-configuration#33-show-npu-models-first-if-available",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Model Naming and Catalog Size (v1)",
    url: "/v1/models/model-configuration#4-model-naming-and-catalog-size",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Model Naming Convention (v1)",
    url: "/v1/models/model-configuration#41-model-naming-convention",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Model Choices (v1)",
    url: "/v1/models/model-configuration#42-model-choices",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Model Display Sorting (v1)",
    url: "/v1/models/model-configuration#43-model-display-sorting",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Default Model Assignment by Size (v1)",
    url: "/v1/models/model-configuration#5-default-model-assignment-by-size",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Small Model Default (v1)",
    url: "/v1/models/model-configuration#51-small-model-default",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Medium Model Default (v1)",
    url: "/v1/models/model-configuration#52-medium-model-default",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Large Model Default (v1)",
    url: "/v1/models/model-configuration#53-large-model-default",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Generation Defaults (v1)",
    url: "/v1/models/model-configuration#6-generation-defaults",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "max_output Configuration (v1)",
    url: "/v1/models/model-configuration#61-max_output",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "temperature Configuration (v1)",
    url: "/v1/models/model-configuration#62-temperature",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Sample in Generation Configuration (v1)",
    url: "/v1/models/model-configuration#63-sample-in-generation",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Task-Specific Default Models (v1)",
    url: "/v1/models/model-configuration#7-task-specific-default-models",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Chat Model Default (v1)",
    url: "/v1/models/model-configuration#71-chat-model",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "RAG Model Default (v1)",
    url: "/v1/models/model-configuration#72-rag-model",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Vision Model Default (v1)",
    url: "/v1/models/model-configuration#73-vision-model",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Table Reading Model Default (v1)",
    url: "/v1/models/model-configuration#74-table-reading-model",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Summarizer Model Default (v1)",
    url: "/v1/models/model-configuration#75-summarizer-model",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Text2SQL Model Default (v1)",
    url: "/v1/models/model-configuration#76-text2sql-model",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Overall Default Model (v1)",
    url: "/v1/models/model-configuration#77-overall-default",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Dataset Analyzer Model Default (v1)",
    url: "/v1/models/model-configuration#78-dataset-analyzer-model",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Automation and Hardware Controls (v1)",
    url: "/v1/models/model-configuration#8-automation-and-hardware-controls",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Auto Select Models (v1)",
    url: "/v1/models/model-configuration#81-auto-select-models",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Enable NPU Optimized Models (v1)",
    url: "/v1/models/model-configuration#82-enable-npu-optimized-models",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "CPU Only Mode (v1)",
    url: "/v1/models/model-configuration#83-cpu-only-mode",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Provider-Specific Defaults (v1)",
    url: "/v1/models/model-configuration#9-provider-specific-defaults",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "OpenAI Default (v1)",
    url: "/v1/models/model-configuration#91-openai-default",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Anthropic Default (v1)",
    url: "/v1/models/model-configuration#92-anthropic-default",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Gemini Default (v1)",
    url: "/v1/models/model-configuration#93-gemini-default",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Resource Limits (v1)",
    url: "/v1/models/model-configuration#10-resource-limits",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Max Model Size (v1)",
    url: "/v1/models/model-configuration#101-max-model-size",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },
  {
    title: "Max Model Local Cache Size (v1)",
    url: "/v1/models/model-configuration#102-max-model-local-cache-size",
    type: "heading",
    parentPage: "Model Configuration (v1)",
  },

  // V1 Custom Test - Headings
  {
    title: "Custom Test Overview (v1)",
    url: "/v1/models/custom-test#1-overview",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Test Types (v1)",
    url: "/v1/models/custom-test#11-test-types",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "File Upload (v1)",
    url: "/v1/models/custom-test#12-file-upload",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Action Buttons (v1)",
    url: "/v1/models/custom-test#13-action-buttons",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Run Test (v1)",
    url: "/v1/models/custom-test#131-run-test-",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Generate Sample (v1)",
    url: "/v1/models/custom-test#132-generate-sample",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Mapper (v1)",
    url: "/v1/models/custom-test#133-mapper",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Creating a Custom Test (v1)",
    url: "/v1/models/custom-test#2-creating-a-custom-test",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Generating Custom Test Samples (v1)",
    url: "/v1/models/custom-test#21-generating-custom-test-samples",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Using Existing Datasets with Custom Mapper (v1)",
    url: "/v1/models/custom-test#22-using-existing-datasets-with-custom-mapper",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Example Workflow (v1)",
    url: "/v1/models/custom-test#221-example-workflow",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "Stopping a Model Test (v1)",
    url: "/v1/models/custom-test#23-stopping-a-model-test",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },
  {
    title: "File Upload Requirements (v1)",
    url: "/v1/models/custom-test#24-file-upload-requirements",
    type: "heading",
    parentPage: "Custom Test (v1)",
  },

  // ==================== BOTS SECTION ====================
  // V1 Bots Documentation - Pages
  {
    title: "Bots (v1)",
    url: "/v1/bots",
    type: "page",
    description: "Create and manage custom chat and RAG bots in Model HQ v1",
  },
  {
    title: "Build Bot (v1)",
    url: "/v1/bots/build-bot",
    type: "page",
    description: "Step-by-step guide to building custom bots in v1",
  },
  {
    title: "Edit Bot (v1)",
    url: "/v1/bots/edit-bot",
    type: "page",
    description: "Configure and customize bot settings in v1",
  },

  // V1 Bots - Headings
  {
    title: "Launching the Bots Interface (v1)",
    url: "/v1/bots#1-launching-the-bots-interface",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Bots Interface Overview (v1)",
    url: "/v1/bots#2-bots-interface-overview",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Building a New Bot (v1)",
    url: "/v1/bots#21-building-a-new-bot",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Loading an Existing Bot (v1)",
    url: "/v1/bots#22-loading-an-existing-bot",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Launching Bot: Demo Bot Example (v1)",
    url: "/v1/bots#221-launching-bot-demo-bot-example",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Demo Mode (v1)",
    url: "/v1/bots#222-demo-mode",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Bot with Agents (v1)",
    url: "/v1/bots#223-bot-with-agents",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Edit Bot (v1)",
    url: "/v1/bots#23-edit",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Share Bot (v1)",
    url: "/v1/bots#24-share",
    type: "heading",
    parentPage: "Bots (v1)",
  },
  {
    title: "Upload Bot (v1)",
    url: "/v1/bots#25-upload",
    type: "heading",
    parentPage: "Bots (v1)",
  },

  // V1 Build Bot - Headings
  {
    title: "Building a Custom Bot (v1)",
    url: "/v1/bots/build-bot#1-building-a-custom-bot",
    type: "heading",
    parentPage: "Build Bot (v1)",
  },
  {
    title: "Configuring a Custom Bot (v1)",
    url: "/v1/bots/build-bot#2-configuring-a-custom-bot",
    type: "heading",
    parentPage: "Build Bot (v1)",
  },
  {
    title: "Instructions to Build a Custom Bot (v1)",
    url: "/v1/bots/build-bot#instructions-to-build-a-custom-bot",
    type: "heading",
    parentPage: "Build Bot (v1)",
  },
  {
    title: "Instructions to Add a Demo Feature (v1)",
    url: "/v1/bots/build-bot#instructions-to-add-a-demo-feature-to-a-custom-bot",
    type: "heading",
    parentPage: "Build Bot (v1)",
  },
  {
    title: "Checking Bot's JSON Schema (v1)",
    url: "/v1/bots/build-bot#checking-bots-json-schema",
    type: "heading",
    parentPage: "Build Bot (v1)",
  },
  {
    title: "Hands On: Create a Custom Bot (v1)",
    url: "/v1/bots/build-bot#hands-on-create-a-custom-bot-with-us",
    type: "heading",
    parentPage: "Build Bot (v1)",
  },

  // V1 Edit Bot - Headings
  {
    title: "Configuring a Bot (v1)",
    url: "/v1/bots/edit-bot#1-configuring-a-bot",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Models Configuration (v1)",
    url: "/v1/bots/edit-bot#11-models",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Files Configuration (v1)",
    url: "/v1/bots/edit-bot#12-files",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Agents Configuration (v1)",
    url: "/v1/bots/edit-bot#13-agents",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Prompts Configuration (v1)",
    url: "/v1/bots/edit-bot#14-prompts",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "RAG Configuration (v1)",
    url: "/v1/bots/edit-bot#15-rag",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Other Optional Configuration Options (v1)",
    url: "/v1/bots/edit-bot#other-optional-configuration-options",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "UI Configuration (v1)",
    url: "/v1/bots/edit-bot#16-ui",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Controls Configuration (v1)",
    url: "/v1/bots/edit-bot#17-controls",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Additional Configuration Options (v1)",
    url: "/v1/bots/edit-bot#additional-configuration-options",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "JSON Editor (v1)",
    url: "/v1/bots/edit-bot#18-json-editor",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Demo Configuration (v1)",
    url: "/v1/bots/edit-bot#19-demo",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Meta Configuration (v1)",
    url: "/v1/bots/edit-bot#110-meta",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Run Bot (v1)",
    url: "/v1/bots/edit-bot#111-run",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },
  {
    title: "Delete Bot (v1)",
    url: "/v1/bots/edit-bot#112-delete",
    type: "heading",
    parentPage: "Edit Bot (v1)",
  },

  // ==================== SOURCE SECTION ====================
  // V1 Source Documentation - Pages
  {
    title: "Source (v1)",
    url: "/v1/source",
    type: "page",
    description: "Create and manage RAG sources and knowledge bases in Model HQ v1",
  },
  {
    title: "Parsing in Source (v1)",
    url: "/v1/source/parsing-in-source",
    type: "page",
    description: "Document parsing configuration for RAG sources in v1",
  },
  {
    title: "Source Error Handling (v1)",
    url: "/v1/source/error-handling",
    type: "page",
    description: "Troubleshoot source-related issues in v1",
  },

  // V1 Source - Headings
  {
    title: "Launching the Source Interface (v1)",
    url: "/v1/source#1-launching-the-source-interface",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Understanding the Source Interface (v1)",
    url: "/v1/source#2-understanding-the-source-interface",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Creating a Source (v1)",
    url: "/v1/source#3-creating-a-source",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Source Configuration (v1)",
    url: "/v1/source#31-source-configuration",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Creating a Standard Source (v1)",
    url: "/v1/source#4-creating-a-standard-source",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "RAG Builder (v1)",
    url: "/v1/source#40-rag-builder",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Uploading Documents (v1)",
    url: "/v1/source#41-uploading-documents",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Parsing Configuration (v1)",
    url: "/v1/source#411-parsing-configuration",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Search in Source (v1)",
    url: "/v1/source#42-search",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Test Source (v1)",
    url: "/v1/source#43-test",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Other Options (v1)",
    url: "/v1/source#44-other-options",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Library (v1)",
    url: "/v1/source#441-library",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Download Source (v1)",
    url: "/v1/source#442-download",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Links (v1)",
    url: "/v1/source#443-links",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Delete Source (v1)",
    url: "/v1/source#444-delete",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Creating a Dataset Source (v1)",
    url: "/v1/source#5-creating-a-dataset-source",
    type: "heading",
    parentPage: "Source (v1)",
  },
  {
    title: "Load Existing Source (v1)",
    url: "/v1/source#6-load-existing-source",
    type: "heading",
    parentPage: "Source (v1)",
  },

  // V1 Parsing in Source - Headings
  {
    title: "Document Parsing Options (v1)",
    url: "/v1/source/parsing-in-source#1-document-parsing-options",
    type: "heading",
    parentPage: "Parsing in Source (v1)",
  },
  {
    title: "How to Select Parsing Options for RAG (v1)",
    url: "/v1/source/parsing-in-source#2-how-to-select-parsing-options-for-rag-use-cases-for-chat-interfaces",
    type: "heading",
    parentPage: "Parsing in Source (v1)",
  },

  // ==================== SHUTDOWN SECTION ====================
  // V1 Shutdown Documentation - Page
  {
    title: "Shutdown (v1)",
    url: "/v1/shutdown",
    type: "page",
    description: "Properly shut down Model HQ to prevent background processes in v1",
  },

  // V1 Shutdown - Headings
  {
    title: "How to Shut Down (v1)",
    url: "/v1/shutdown#how-to-shut-down",
    type: "heading",
    parentPage: "Shutdown (v1)",
  },
  {
    title: "Why Proper Shutdown Matters (v1)",
    url: "/v1/shutdown#why-proper-shutdown-matters",
    type: "heading",
    parentPage: "Shutdown (v1)",
  },
  {
    title: "Unintended Shutdown (v1)",
    url: "/v1/shutdown#unintended-shutdown",
    type: "heading",
    parentPage: "Shutdown (v1)",
  },

  // ==================== COOKBOOKS ====================
  // Cookbooks V1 (placeholder for future content)
  {
    title: "V1 Cookbooks",
    url: "/cookbooks/v1",
    type: "page",
    description: "Cookbooks for Model HQ v1 (Coming soon)",
  },
];
