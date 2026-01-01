// V1 Documentation URL Mappings and Configuration
// TODO: Update these mappings as V1 documentation is added

export const V1_BASE_URL = 'https://model-hq-docs.vercel.app';
export const V1_BASE_IMAGE_URL = 'https://model-hq-docs.vercel.app/v1';

// Exact path mappings for V1 documentation
// TODO: Add V1-specific documentation paths as they become available
export const V1_EXACT_MAPPINGS: Record<string, string> = {
  // Code Documentation - V1 (TODO: Add V1 API documentation paths)
  'model-hq-code-documentation/v1/api-reference/API.md': '/v1/api-reference',
  'model-hq-code-documentation/v1/getting-started-with-SDK/GETTING_STARTED.md': '/v1/getting-started-with-model-hq-sdk',
  'model-hq-code-documentation/v1/hello-world/HELLO_WORD.md': '/v1/hello-world',
  
  // System & Setup (in start-here folder)
  'systemConfiguration/': '/start-here/system-configuration',
  'gettingStarted/': '/start-here/getting-started',
  'gettingStarted/README.md': '/start-here/getting-started',
  
  // Supported Models (shared - not in v1 folder)
  'supported-models/INTEL_MODELS.md': '/supported-models/intel',
  'supported-models/QUALCOMM_MODELS.md': '/supported-models/qualcomm',
  'models/intel/': '/supported-models/intel',
  'models/qualcomm/': '/supported-models/qualcomm',
  
  // Learning Resources (in resources folder)
  'video-tutorials/': '/resources/video-tutorials',
  'blogs-and-partner-solutions/': '/resources/blogs-and-partner-solutions',
  
  // Chat - V1 (TODO: Add V1 chat documentation)
  'chat/v1/': '/v1/chat',
  'chat/v1/README.md': '/v1/chat',
  'chat/v1/changing-chat-model': '/v1/chat/changing-chat-model',
  'chat/v1/error-handling': '/v1/chat/error-handling',
  
  // Agents - V1 (TODO: Add V1 agent documentation)
  'agent/v1/': '/v1/agent',
  'agent/v1/README.md': '/v1/agent',
  'agent/v1/SERVICE.md': '/v1/agent/create-new-agent#service-table',
  'agent/v1/create-new-agent': '/v1/agent/create-new-agent',
  'agent/v1/agent-builder-menu': '/v1/agent/agent-builder-menu',
  'agent/v1/edit-agent': '/v1/agent/edit-agent',
  'agent/v1/multi-docs-agent': '/v1/agent/multi-docs-agent',
  'agent/v1/openAI-and-anthropic': '/v1/agent/openAI-and-anthropic',
  
  // Bots - V1 (TODO: Add V1 bots documentation)
  'bots/v1/': '/v1/bots',
  
  // RAG - V1 (TODO: Add V1 RAG documentation)
  'rag/v1/': '/v1/rag',
  'rag/v1/PARSING.md': '/v1/rag/rag-parsing',
  'rag/v1/rag-parsing': '/v1/rag/rag-parsing',
  'rag/v1/document-parsing-issues': '/v1/rag/document-parsing-issues',
  'rag/v1/error-handling': '/v1/rag/error-handling',
  
  // Models & Testing - V1 (TODO: Add V1 models documentation)
  'models/v1/': '/v1/models',
  'test/v1/': '/v1/testing-models',
  
  // Configs & Tools - V1 (TODO: Add V1 configs documentation)
  'tools/v1/': '/v1/tools',
  'configure/v1/': '/v1/configs',
  
  // Share & Shutdown - V1 (TODO: Add V1 share/shutdown documentation)
  'share/v1/': '/v1/share-your-app',
  'shutdown/v1/': '/v1/shutdown',
  
  // Cookbooks V1 (TODO: Add V1 cookbooks)
  'cookbooks/v1/personalized-bot': '/cookbooks/v1/personalized-bot',
  'cookbooks/v1/rag-bot': '/cookbooks/v1/rag-bot',
  'cookbooks/v1/document-review-and-analysis-tool': '/cookbooks/v1/document-review-and-analysis-tool',
  'cookbooks/v1/hybrid-inferencing': '/cookbooks/v1/hybrid-inferencing',
  'cookbooks/v1/photo-to-email-automation': '/cookbooks/v1/photo-to-email-automation',
  'cookbooks/v1/clinical-trial-screening-autmation': '/cookbooks/v1/clinical-trial-screening-autmation',
  
  // About / Home
  'about/': '/',
};

// Folder mappings for V1 documentation
export const V1_FOLDER_MAPPINGS: Record<string, string> = {
  'gettingStarted': '/start-here/getting-started',
  'agent': '/v1/agent',
  'bots': '/v1/bots',
  'chat': '/v1/chat',
  'configure': '/v1/configs',
  'models': '/v1/models',
  'rag': '/v1/rag',
  'share': '/v1/share-your-app',
  'shutdown': '/v1/shutdown',
  'systemConfiguration': '/start-here/system-configuration',
  'test': '/v1/testing-models',
  'tools': '/v1/tools',
  'cookbooks': '/cookbooks',
  'video-tutorials': '/resources/video-tutorials',
  'blogs-and-partner-solutions': '/resources/blogs-and-partner-solutions',
  'about': '/',
};

// Available documentation pages for V1
// TODO: Update these URLs as V1 documentation is added
export const V1_AVAILABLE_PAGES = `
About & Overview:
- About Model HQ (What is Model HQ, Features, Overview): ${V1_BASE_URL}/
- Getting Started: ${V1_BASE_URL}/start-here/getting-started

Code & API Documentation (V1):
- API Reference (Complete API documentation with all endpoints): ${V1_BASE_URL}/v1/api-reference
- Getting Started with SDK (Backend setup, configuration, code examples): ${V1_BASE_URL}/v1/getting-started-with-model-hq-sdk
- Hello World (Basic inference and stream examples): ${V1_BASE_URL}/v1/hello-world

System & Setup:
- System Configuration: ${V1_BASE_URL}/start-here/system-configuration

Supported Models:
- Intel Supported Models: ${V1_BASE_URL}/supported-models/intel
- Qualcomm Supported Models: ${V1_BASE_URL}/supported-models/qualcomm

Learning Resources:
- Video Tutorials: ${V1_BASE_URL}/resources/video-tutorials
- Blogs & Partner Solutions: ${V1_BASE_URL}/resources/blogs-and-partner-solutions

Chat (V1):
- Chat Overview: ${V1_BASE_URL}/v1/chat
- Changing Chat Models: ${V1_BASE_URL}/v1/chat/changing-chat-model
- Chat Error Handling: ${V1_BASE_URL}/v1/chat/error-handling

Agents (V1):
- Agents Overview (includes list of all available services): ${V1_BASE_URL}/v1/agent
- Available Services List: ${V1_BASE_URL}/v1/agent/create-new-agent#service-table
- Create New Agent: ${V1_BASE_URL}/v1/agent/create-new-agent
- Agent Builder Menu: ${V1_BASE_URL}/v1/agent/agent-builder-menu
- Edit Agents: ${V1_BASE_URL}/v1/agent/edit-agent
- Batch Run (Multi-Docs): ${V1_BASE_URL}/v1/agent/multi-docs-agent
- OpenAI/Anthropic Models: ${V1_BASE_URL}/v1/agent/openAI-and-anthropic

Bots (V1):
- Bots: ${V1_BASE_URL}/v1/bots

RAG (V1):
- RAG Overview: ${V1_BASE_URL}/v1/rag
- RAG Parsing: ${V1_BASE_URL}/v1/rag/rag-parsing
- Document Parsing Issues: ${V1_BASE_URL}/v1/rag/document-parsing-issues
- RAG Error Handling: ${V1_BASE_URL}/v1/rag/error-handling

Models & Testing (V1):
- Models: ${V1_BASE_URL}/v1/models
- Testing Models: ${V1_BASE_URL}/v1/testing-models

Configs & Tools (V1):
- Tools: ${V1_BASE_URL}/v1/tools
- Configs: ${V1_BASE_URL}/v1/configs

Share & Shutdown (V1):
- Share Your App: ${V1_BASE_URL}/v1/share-your-app
- Shutdown: ${V1_BASE_URL}/v1/shutdown

Cookbooks (V1):
- Personalized Bot: ${V1_BASE_URL}/cookbooks/v1/personalized-bot
- RAG Bot: ${V1_BASE_URL}/cookbooks/v1/rag-bot
- Document Review Tool: ${V1_BASE_URL}/cookbooks/v1/document-review-and-analysis-tool
- Hybrid Inferencing: ${V1_BASE_URL}/cookbooks/v1/hybrid-inferencing
- Photo to Email Automation: ${V1_BASE_URL}/cookbooks/v1/photo-to-email-automation
- Clinical Trial Screening: ${V1_BASE_URL}/cookbooks/v1/clinical-trial-screening-autmation
`;

// Image mappings for V1
export const V1_AVAILABLE_IMAGES = `
Main Interface:
- Main Menu: ![Main Menu](${V1_BASE_IMAGE_URL}/main_menu.png)
- Landing Interface or setup options or entry page or getting started: ![Landing Interface](${V1_BASE_IMAGE_URL}/getting-started/landing_interface.png)
- System Config: ![Laptop Config](${V1_BASE_IMAGE_URL}/laptop_config.png)

Agents (V1):
- Agent Builder: ![Agent Builder](${V1_BASE_IMAGE_URL}/agent/v1/agentBuilder.png)
- Agent Interface: ![Agent Interface](${V1_BASE_IMAGE_URL}/agent/v1/agentInterface.png)
- Create New Agent: ![New Agent](${V1_BASE_IMAGE_URL}/agent/v1/agentNew.png)
- Agent Process: ![Agent Process](${V1_BASE_IMAGE_URL}/agent/v1/agentProcess.png)
- Service Examples: ![Service 1](${V1_BASE_IMAGE_URL}/agent/v1/service1.png)

Chat (V1):
- Chat Interface: ![Chat Interface](${V1_BASE_IMAGE_URL}/chat/v1/chatInterface.png)
- Change Models: ![Change Models](${V1_BASE_IMAGE_URL}/chat/v1/changeModels.png)
- Model Config: ![Model Config](${V1_BASE_IMAGE_URL}/chat/v1/modelConfig.png)

Bots (V1):
- Bots Interface: ![Bots](${V1_BASE_IMAGE_URL}/bots/v1.png)

RAG (V1):
- RAG Interface: ![RAG](${V1_BASE_IMAGE_URL}/rag/v1.png)
- PDF Parsing: ![PDF Parsing](${V1_BASE_IMAGE_URL}/chat/v1/pdfParsing.png)
- OCR: ![OCR](${V1_BASE_IMAGE_URL}/chat/v1/ocr.png)

Models (V1):
- Models Interface: ![Models](${V1_BASE_IMAGE_URL}/models/v1.png)

Shutdown (V1):
- Shutdown: ![Shutdown](${V1_BASE_IMAGE_URL}/shutdown/v1.png)

Model HQ SDK Or Code Documentation or Getting Started with SDK (V1):
- ![Tools Location](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/menu.png)
- ![Tools Interface](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/tools.png)
- ![Initiate Backend](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/backend.png)
- ![Launching Backend](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/launch.png)
- ![Backend Configure](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/backend.png)
- ![Download SDK](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/download.png)
- ![Inside Downloaded SDK Files](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/files.png)
- ![Closing Backend](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/close.png)
`;
