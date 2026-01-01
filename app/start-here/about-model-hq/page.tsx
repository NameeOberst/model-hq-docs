import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Cpu, 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  MessageSquare, 
  Search, 
  Bot,
  CheckCircle,
  ExternalLink,
  Download,
  Mail
} from "lucide-react"

export default function AboutModelHQPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Model HQ</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A comprehensive AI platform that enables enterprises and developers to run AI workflows 
          securely, locally, and at scale.
        </p>
      </div>

      {/* What is Model HQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">What is Model HQ?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed">
            Model HQ is a comprehensive AI platform that enables enterprises and developers to <strong>run AI workflows 
            securely, locally, and at scale</strong>. It automatically optimizes AI model deployment for various hardware 
            platforms (including AI PCs), ensuring powerful AI capabilities remain private, efficient, and 
            cost-effective—all without relying on cloud services.
          </p>
          <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border">
            <p className="text-sm md:text-base font-medium">
              <strong>Core Philosophy:</strong> Run enterprise-grade AI directly on your device with zero internet 
              dependency, complete data privacy, and no per-token costs.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Features Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Key Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base mb-1">Simplified AI Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    All-in-one platform for creating and deploying AI applications with no-code tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Cpu className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base mb-1">Hardware Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically optimized for Intel AI PCs (OpenVINO) and Qualcomm Snapdragon AI PCs (QNN runtime).
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base mb-1">100% Private & Secure</h3>
                  <p className="text-sm text-muted-foreground">
                    Models run completely offline. No data leaves your device. Enterprise-grade data privacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base mb-1">Enterprise Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor and update models across thousands of endpoints with centralized management.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base mb-1">Built-in Safety Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Explainability features, PII filtering, toxicity monitoring, and hallucination detection.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Download className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base mb-1">Seamless Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    Push AI workflows directly to end-user PCs with lightweight client app (less than 100 MB).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model HQ Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Model HQ Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border">
              <p className="text-2xl font-bold text-primary">10 seconds</p>
              <p className="text-sm text-muted-foreground mt-1">Average download time</p>
            </div>
            <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border">
              <p className="text-2xl font-bold text-primary">&lt;30 minutes</p>
              <p className="text-sm text-muted-foreground mt-1">Download 24 AI models</p>
            </div>
            <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border">
              <p className="text-2xl font-bold text-primary">100+ models</p>
              <p className="text-sm text-muted-foreground mt-1">Optimized for AI PCs</p>
            </div>
            <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border">
              <p className="text-2xl font-bold text-primary">Up to 22B</p>
              <p className="text-sm text-muted-foreground mt-1">Max parameters on Intel</p>
            </div>
            <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border">
              <p className="text-2xl font-bold text-primary">$0 per-token</p>
              <p className="text-sm text-muted-foreground mt-1">No incremental billing</p>
            </div>
            <div className="bg-muted/50 dark:bg-muted/30 p-4 rounded-lg border">
              <p className="text-2xl font-bold text-primary">Up to 30x</p>
              <p className="text-sm text-muted-foreground mt-1">Faster on AI PCs</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Main Capabilities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 dark:bg-muted/30 border">
              <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-2">Chat Interface</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Interactive conversations with AI models for Q&A, brainstorming, and general assistance. 
                  Support for multiple models with easy switching.
                </p>
                <a 
                  href="/v0/chat" 
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 dark:bg-muted/30 border">
              <Search className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-2">RAG (Retrieval-Augmented Generation)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Upload documents and chat with your data. Perfect for document analysis, research, 
                  knowledge management, and enterprise knowledge bases.
                </p>
                <a 
                  href="/v0/rag" 
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 dark:bg-muted/30 border">
              <Bot className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-2">AI Agents</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Create custom AI agents for automated document processing workflows. Build multi-step 
                  processes without code. Process multiple documents in batch mode.
                </p>
                <a 
                  href="/v0/agent" 
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 dark:bg-muted/30 border">
              <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-2">Custom Bots</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Design personalized chatbots with custom personalities, system prompts, and RAG sources. 
                  Deploy domain-specific assistants.
                </p>
                <a 
                  href="/v0/bots" 
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 dark:bg-muted/30 border">
              <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-2">Model Testing & Evaluation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Test model performance with sandbox, standard, and custom testing options before deployment.
                </p>
                <a 
                  href="/v0/testing-models" 
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Model HQ */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Why Choose Model HQ?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-1">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your data never leaves your device. No cloud uploads, no external API calls, 
                  complete control over sensitive information.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-1">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive no-code interface designed for both developers and non-technical users. 
                  Create AI workflows in minutes, not days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-1">Cost-Effective</h3>
                <p className="text-sm text-muted-foreground">
                  Run powerful AI models locally without API costs. Pay once, use unlimited—no per-token billing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-1">Hardware Optimized</h3>
                <p className="text-sm text-muted-foreground">
                  Special optimizations for Intel (OpenVINO) and Qualcomm (QNN) processors deliver 
                  up to 30x faster inference.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-1">Developer-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  SDK available for programmatic access. Build custom applications on top of Model HQ infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base mb-1">Enterprise Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Deploy across thousands of endpoints with centralized management, monitoring, and updates.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">Document Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Extract information from PDFs, contracts, research papers, and legal documents 
                with AI-powered analysis.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">Customer Support</h3>
              <p className="text-sm text-muted-foreground">
                Build AI assistants for internal helpdesks or external customer support with 
                domain-specific knowledge.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">Research & Education</h3>
              <p className="text-sm text-muted-foreground">
                Analyze academic papers, generate summaries, and create study materials with 
                RAG-powered insights.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">Content Creation</h3>
              <p className="text-sm text-muted-foreground">
                Draft emails, articles, marketing copy, and documentation with AI assistance.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">Data Privacy & Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Process sensitive documents (HR, legal, financial) without cloud exposure—perfect 
                for regulated industries.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">Enterprise Workflows</h3>
              <p className="text-sm text-muted-foreground">
                Automate document processing, data extraction, report generation, and business 
                intelligence tasks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Getting Started</CardTitle>
          <CardDescription>
            Model HQ offers three setup options to match your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">1. Full Setup</h3>
              <p className="text-sm text-muted-foreground">
                Complete installation with all features, model catalog, and development tools.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">2. Fast Setup</h3>
              <p className="text-sm text-muted-foreground">
                Quick start with essential components—get running in minutes.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold text-base mb-2">3. No Setup (Portable)</h3>
              <p className="text-sm text-muted-foreground">
                Run directly without installation—perfect for testing or restricted environments.
              </p>
            </div>

            <a 
              href="/start-here/getting-started" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium mt-2"
            >
              Learn more about setup options <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Supported Hardware */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Supported Devices & Hardware</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              Intel AI PCs (Recommended)
            </h3>
            <ul className="space-y-2 ml-7 text-sm text-muted-foreground">
              <li>Arrow Lake, Meteor Lake, Lunar Lake processors</li>
              <li>Most Intel laptops/PCs less than 5 years old</li>
              <li>Intel Xeon processors for enterprise servers</li>
              <li>Intel Arc GPUs with hardware acceleration</li>
              <li>OpenVINO runtime optimization</li>
            </ul>
            <a 
              href="/supported-models/intel" 
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3 ml-7"
            >
              View Intel supported models <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" />
              Qualcomm Snapdragon AI PCs
            </h3>
            <ul className="space-y-2 ml-7 text-sm text-muted-foreground">
              <li>Snapdragon X series with NPU acceleration</li>
              <li>QNN (Qualcomm Neural Network) runtime</li>
              <li>CPU + NPU hybrid execution</li>
              <li>Optimized for edge devices</li>
            </ul>
            <a 
              href="/supported-models/qualcomm" 
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3 ml-7"
            >
              View Qualcomm supported models <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold text-base mb-3">System Requirements</h3>
            <ul className="space-y-2 ml-7 text-sm text-muted-foreground">
              <li><strong>Minimum:</strong> 16 GB RAM</li>
              <li><strong>Recommended:</strong> 32 GB RAM for larger models</li>
              <li><strong>Storage:</strong> SSD recommended for faster model loading</li>
            </ul>
            <a 
              href="/start-here/system-configuration" 
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3 ml-7"
            >
              View full requirements <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-base mb-3">Backend</h3>
              <p className="text-sm text-muted-foreground">Python-based inference server with FastAPI</p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Model Support</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>GGUF format (primary)</li>
                <li>HuggingFace models</li>
                <li>Custom model formats</li>
                <li>OpenAI/Anthropic API integration</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Hardware Acceleration</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Intel OpenVINO runtime</li>
                <li>Qualcomm QNN runtime</li>
                <li>CPU/GPU/NPU support</li>
                <li>Mixed precision inference</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">RAG Pipeline</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Built-in document parsing</li>
                <li>Vector search with embeddings</li>
                <li>Context-aware retrieval</li>
                <li>Semantic chunking</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <a 
              href="/v0/getting-started-with-model-hq-sdk" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              Explore Model HQ SDK <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Components */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold text-base mb-2">1. Developer Kit</h3>
            <p className="text-sm text-muted-foreground">
              No-code environment to create AI apps, agents, and RAG chatbots. Build document analysis 
              workflows and deploy directly to user PCs.
            </p>
          </div>

          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold text-base mb-2">2. User Client App</h3>
            <p className="text-sm text-muted-foreground">
              Lightweight app (less than 100 MB) to run models locally. Chat, deploy workflows, and run agents 
              offline. Supports models up to 32B parameters on modern AI PCs.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* License & Trial */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">License & Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Model HQ is available for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm">Individual developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm">Small teams</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm">Enterprise organizations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm">Educational institutions</span>
            </div>
          </div>

          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg border border-primary/20 mt-4">
            <h3 className="font-semibold text-base mb-2">Try Model HQ Free</h3>
            <p className="text-sm text-muted-foreground mb-3">
              90-day free trial
            </p>
            <a 
              href="https://llmware-modelhq.checkoutpage.com/model-hq-app-90-days-free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              Get the Trial <ExternalLink className="h-4 w-4" />
            </a>
            <p className="text-xs text-muted-foreground mt-2"><a href="/support" rel="noopener noreferrer" className="text-gray hover:underline">Request Free Trial Promo Code</a> • Terms and conditions apply • <a href="/license" rel="noopener noreferrer" className="text-gray hover:underline">Request Free Trial Promo Code</a></p>
          </div>
        </CardContent>
      </Card>

      {/* Important Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Important Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a 
              href="https://llmware.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Official Website
            </a>
            <a 
              href="https://github.com/llmware-ai/llmware" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub Repository
            </a>
            <a 
              href="https://www.youtube.com/@llmware/playlists" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              YouTube Channel
            </a>
            <a 
              href="https://discord.gg/quUZHRCV8n" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Discord Community
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Support & Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Support & Contact</CardTitle>
          <CardDescription>
            Need help? Our team is here to guide you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <a 
              href="mailto:support@aibloks.com"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">General Support</p>
                <p className="text-xs text-muted-foreground">support@aibloks.com</p>
              </div>
            </a>
            <a 
              href="mailto:rsharma@aibloks.com"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Developer Relations</p>
                <p className="text-xs text-muted-foreground">rsharma@aibloks.com</p>
              </div>
            </a>
            <a 
              href="/support"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Documentation Support</p>
                <p className="text-xs text-muted-foreground">Visit Support Page</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Company Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Model HQ is built on <a 
              href="https://llmware.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              LLMware
            </a>, an open-source framework for enterprise LLM applications. The platform democratizes 
            AI access while maintaining enterprise-grade security and performance standards.
          </p>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-primary/5 dark:bg-primary/10 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://llmware.ai/enterprise#developers-waitlist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Download Model HQ <ExternalLink className="h-4 w-4" />
              </a>
              <a 
                href="/start-here/getting-started"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted/50 transition-colors font-medium"
              >
                Read Documentation
              </a>
              <a 
                href="/resources/video-tutorials"
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted/50 transition-colors font-medium"
              >
                Watch Tutorials
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
