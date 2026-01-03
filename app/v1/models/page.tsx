import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { references } from "./references"

export default function ExploringModelsInModelHqPage() {
  return (
    <DocPageLayout references={references}>
      <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Exploring Models in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Models in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          After completing the initial setup, users will be directed to the <strong>Main Menu</strong>. This document describes the <strong>Models</strong> functionality, which provides a comprehensive interface for exploring, managing, and testing models within Model HQ.
        </p>

        <p>
          The Models section enables users to:
        </p>

        <ul>
          <li>Discover and download models from the catalog</li>
          <li>Manage locally stored models</li>
          <li>Run benchmark tests and validation</li>
          <li>Configure model selection preferences</li>
          <li>Troubleshoot model-related issues</li>
        </ul>

        <h2 id="1-launching-the-models-interface">1. Launching the Models interface</h2>

        <p>
          To begin, the <strong>Models</strong> button can be selected from the main menu sidebar or the first screen interface.
        </p>

        <img src="/v1/models/01_models.png" alt="models" />

        <h2 id="2-models-interface-overview">2. Models interface overview</h2>

        <p>
          After launching the Models section, the interface will present a comprehensive set of tools for model management:
        </p>

        <img src="/v1/models/02_modelsInterface.png" alt="models" />

        <p>
          The interface includes the following key controls:
        </p>

        <p>
          Primary actions:
        </p>

        <ul>
          <li><strong>Model Card (&gt;)</strong> — View detailed information about a selected model</li>
          <li><strong>Download</strong> — Retrieve models from the catalog to local storage</li>
          <li><strong>Test</strong> — Run validation and benchmark tests on models</li>
          <li><strong>My Models</strong> — Display all locally downloaded models</li>
          <li><strong>All</strong> — Show the complete model catalog with quantization types</li>
        </ul>

        <p>
          Configuration and maintenance:
        </p>

        <ul>
          <li><strong>Refresh</strong> — Update the model catalog to reflect recent changes</li>
          <li><strong>Models Config (⚙️)</strong> — Configure model selection preferences and orchestration</li>
          <li><strong>Troubleshoot</strong> — Diagnose and resolve model-related issues</li>
          <li><strong>Delete</strong> — Remove models from local storage</li>
          <li><strong>Info</strong> — View storage usage and model statistics</li>
        </ul>

        <p>
          The following subsections describe each control in detail.
        </p>

        <h3 id="21-model-card-">2.1 Model Card (&gt;)</h3>

        <p>
          The Model Card provides detailed information about a selected model, including its description, capabilities, and specifications.
        </p>

        <p>
          To view a model card:
        </p>

        <ol>
          <li>Select a model from the dropdown menu</li>
          <li>Click the <code>&gt;</code> button to expand the model card</li>
        </ol>

        <p>
          The model card appears as a collapsible section that, when expanded, displays comprehensive information about the selected model.
        </p>

        <img src="/v1/models/03_modelCard.png" alt="models" />

        <p>
          Model cards typically include:
        </p>

        <ul>
          <li>Model architecture and parameter count</li>
          <li>Recommended use cases and capabilities</li>
          <li>Performance characteristics</li>
          <li>Licensing and attribution information</li>
        </ul>

        <p>
          This feature is useful for evaluating models before download or understanding the capabilities of already-downloaded models.
        </p>

        <p>
          This feature is useful for evaluating models before download or understanding the capabilities of already-downloaded models.
        </p>

        <h3 id="22-download">2.2 Download</h3>

        <p>
          The Download button enables retrieval of models from the catalog to local storage.
        </p>

        <p>
          To download a model:
        </p>

        <ol>
          <li>Select a model from the dropdown menu</li>
          <li>Click the <strong>Download</strong> button</li>
        </ol>

        <img src="/v1/models/04_downloadModel.png" alt="models" />

        <p>
          The download process will begin, and progress will be displayed. Download time varies based on model size and network speed. Once complete, the model will be available for use in Chat, Agents, and other Model HQ features.
        </p>

        <blockquote data-type="note">
            <p>Downloaded models are stored locally and can be managed through the <strong>My Models</strong> view.</p>
        </blockquote>

        <h3 id="test">2.3 Test</h3>

        <p>
          Test allows you to test a model either pre-dowloaded or a new model.
        </p>

        <blockquote data-type="note">
            <p>If you try to test a model that is not already downloaded, then it will download first.</p>
        </blockquote>

        <img src="/v1/models/04_test.png" alt="models" />

        <p>
          The test interface consists of several components that control how testing is performed:
        </p>

        <h4 id="test-type">Test Type</h4>

        <p>
          Defines the testing mode to be used.
        </p>

        <ol>
          <li>Sandbox</li>
          <li>Standard</li>
          <li>Custom</li>
        </ol>

        <details>
          <summary>Find the explanation of each section here</summary>
          <div className="mt-4 space-y-4">
            <div>
              <p><strong>1. Sandbox</strong></p>
              <p>Runs an interactive test session.</p>
              <ul>
                <li>Best for quick experimentation</li>
                <li>Allows manual prompts and real time inspection</li>
                <li>Default option for exploratory testing</li>
              </ul>
            </div>

            <div>
              <p><strong>2. Standard</strong></p>
              <p>Runs a predefined, system controlled test.</p>
              <ul>
                <li>Useful for repeatable validation checks</li>
                <li>Requires no custom input files</li>
                <li>Suitable for baseline validation</li>
              </ul>
            </div>

            <div>
              <p><strong>3. Custom</strong></p>
              <p>Runs tests using user provided data.</p>
              <ul>
                <li>Enables batch evaluation</li>
                <li>Requires uploading a JSON or CSV file</li>
                <li>Designed for structured testing and benchmarking</li>
              </ul>
            </div>
          </div>
        </details>

        <h4 id="file-upload">File Upload</h4>

        <h4 id="choose-file-browse">Choose file / Browse</h4>

        <p>
          Used only when <strong>Custom</strong> test type is selected.
        </p>

        <ul>
          <li>Upload a JSON or CSV file</li>
          <li>CSV must include headers: <code>query</code>, <code>context</code>, <code>answer</code></li>
          <li>JSON must contain entries with keys: <code>query</code>, <code>context</code>, <code>answer</code></li>
          <li>Each row or entry represents one test case</li>
        </ul>

        <h4 id="action-buttons">Action Buttons</h4>

        <p>
          <strong>Run Test (&gt;)</strong>  
          <br />
          Initiates the selected test type using the current configuration.
        </p>

        <ul>
          <li>Executes sandbox, standard, or custom test</li>
          <li>Uses uploaded file if custom mode is selected</li>
        </ul>

        <p>
          <strong>Generate Sample</strong>
          <br />
          Automatically creates a sample test file.
        </p>

        <ul>
          <li>Helps users understand the expected file format</li>
          <li>Useful as a starting template for custom tests</li>
        </ul>

        <p>
          <strong>Mapper</strong>  
          <br />
          Opens the field mapping interface for custom test files.
        </p>

        <ul>
          <li>Allows mapping of uploaded file columns to required fields</li>
          <li>Useful when column names do not exactly match expected keys (<code>query</code>, <code>answer</code>, <code>context</code>)</li>
          <li>Prevents schema-related test failures</li>
          <li>Enables use of existing datasets without reformatting</li>
        </ul>

        <p>
          Default mapping values:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{`{
 "query": "query",
 "answer": "answer",
 "context": "context"
}`}
</code>
        </pre>

        <blockquote data-type="important">
            <p>When using a custom dataset, the schema should be mapped to the expected fields: <code>query</code>, <code>answer</code>, and <code>context</code>. Note: <code>query</code> input is required, while <code>answer</code> and <code>context</code> are optional.</p>
        </blockquote>

        <h3 id="24-my-models">2.4 My Models</h3>

        <p>
          The <strong>My Models</strong> view displays all models that have been downloaded and are currently stored locally.
        </p>

        <img src="/v1/models/05_myModels.png" alt="models" />

        <h3 id="all">2.5 All</h3>

        <p>
          This button will show all the models present in the model catalog along with their quantization/model type.
        </p>

        <img src="/v1/models/06_allModels.png" alt="models" />

        <p>
          This comprehensive view shows:
        </p>

        <ul>
          <li>All models available in the catalog</li>
          <li>Different quantization types for each model</li>
          <li>Model sizes and parameter counts</li>
        </ul>

        <h3 id="26-refresh">2.6 Refresh</h3>

        <p>
          The <strong>Refresh</strong> button updates the model catalog to reflect any recent additions or changes.
        </p>

        <p>
          This function should be used when:
        </p>

        <ul>
          <li>New models have been added to the catalog</li>
          <li>Model metadata has been updated</li>
          <li>The catalog appears out of sync with the latest available models</li>
        </ul>

        <p>
          Refreshing ensures that the displayed information is current and accurate.
        </p>

        <p>
          Refreshing ensures that the displayed information is current and accurate.
        </p>

        <h3 id="27-models-config-">2.7 Models Config (⚙️)</h3>

        <p>
          The Models Configuration panel provides access to the model orchestration layer, which controls model selection, visibility, and behavior across different workloads.
        </p>

        <p>
          This configuration system serves several critical functions:
        </p>

        <ul>
          <li>Determines which models are visible and selectable in various interfaces</li>
          <li>Defines default model selections by task type (chat, RAG, vision, analytics)</li>
          <li>Manages model behavior under different hardware constraints</li>
          <li>Configures provider integrations and model routing</li>
          <li>Supports separation of defaults by task type and model size</li>
        </ul>

        <p>
          By providing both automated intelligence and fine-grained manual control, these settings ensure consistent behavior across Chat, RAG, vision, analytics, and structured data workflows. The configuration can be optimized for performance, cost, or quality depending on deployment needs.
        </p>

        <p>
          For comprehensive configuration options and detailed guidance, please refer to the <a href="/models/modelconfiguration">Model Configuration</a> documentation.
        </p>

        <h3 id="28-troubleshoot">2.8 Troubleshoot</h3>

        <p>
          The Troubleshoot function provides diagnostic tools and guidance for resolving model-related issues.
        </p>

        <img src="/v1/models/08_troubleshoot.png" alt="models" />

        <p>
          When troubleshooting is initiated, the system performs diagnostic checks and identifies potential issues. If problems are detected, several resolution options are available:
        </p>

        <ul>
          <li><strong>Confirm</strong>: Apply the suggested solution</li>
          <li><strong>Delete</strong>: Remove the diagnostic log file</li>
          <li><strong>Repair</strong>: Reinstall the model (equivalent to delete + download)</li>
          <li><strong>No action</strong>: Return to the main menu without making changes</li>
        </ul>

        <blockquote data-type="note">
            <p>Troubleshooting logs can be downloaded for further analysis. If issues persist after troubleshooting, support can be contacted at <code>support@aibloks.com</code> and the logs can be shared for assistance.</p>
        </blockquote>

        <p>
          Common issues that troubleshooting can address:
        </p>

        <ul>
          <li>Model loading failures</li>
          <li>Corrupted model files</li>
          <li>Configuration inconsistencies</li>
          <li>Memory or resource allocation problems</li>
        </ul>

        <h3 id="29-delete">2.9 Delete</h3>

        <p>
          The Delete function removes models from local storage to free up disk space.
        </p>

        <p>
          This action:
        </p>

        <ul>
          <li>Permanently removes the selected model from local storage</li>
          <li>Frees up the disk space occupied by the model</li>
          <li>Does not affect the model's availability in the catalog for future download</li>
        </ul>

        <blockquote data-type="important">
            <p>Deleted models must be re-downloaded if they are needed again. Ensure that models are no longer required before deletion.</p>
        </blockquote>

        <h3 id="210-info">2.10 Info</h3>

        <p>
          The Info panel displays storage statistics and usage information for locally stored models.
        </p>

        <img src="/v1/models/09_info.png" alt="models" />

        <p>
          Information provided includes:
        </p>

        <ul>
          <li>Total number of models currently downloaded</li>
          <li>Total storage space occupied by all models</li>
          <li>Breakdown of storage usage by individual models</li>
          <li>Available storage space on the device</li>
        </ul>

        <h2 id="3-models-interface-controls-summary">3. Models interface controls summary</h2>

        <p>
          The table below provides a quick reference of all available controls in the Models interface:
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Control</th>
              <th className="border border-border px-4 py-2 text-left">Purpose</th>
              <th className="border border-border px-4 py-2 text-left">Key Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Model Card (&gt;)</strong></td>
              <td className="border border-border px-4 py-2">View detailed model information</td>
              <td className="border border-border px-4 py-2">Architecture details, capabilities, use cases, licensing</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Download</strong></td>
              <td className="border border-border px-4 py-2">Retrieve models from catalog</td>
              <td className="border border-border px-4 py-2">Downloads models to local storage for offline use</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Test</strong></td>
              <td className="border border-border px-4 py-2">Validate and benchmark models</td>
              <td className="border border-border px-4 py-2">Three modes: Sandbox, Standard, Custom; supports file upload</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>My Models</strong></td>
              <td className="border border-border px-4 py-2">Display downloaded models</td>
              <td className="border border-border px-4 py-2">Shows locally stored models and storage usage</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>All</strong></td>
              <td className="border border-border px-4 py-2">Show complete catalog</td>
              <td className="border border-border px-4 py-2">Displays all available models with quantization options</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Refresh</strong></td>
              <td className="border border-border px-4 py-2">Update catalog</td>
              <td className="border border-border px-4 py-2">Syncs catalog with latest model additions and changes</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Models Config (⚙️)</strong></td>
              <td className="border border-border px-4 py-2">Configure orchestration</td>
              <td className="border border-border px-4 py-2">Controls model selection, defaults, and behavior by task type</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Troubleshoot</strong></td>
              <td className="border border-border px-4 py-2">Diagnose issues</td>
              <td className="border border-border px-4 py-2">Provides diagnostic tools and repair options</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Delete</strong></td>
              <td className="border border-border px-4 py-2">Remove models</td>
              <td className="border border-border px-4 py-2">Frees storage space by removing local models</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Info</strong></td>
              <td className="border border-border px-4 py-2">View statistics</td>
              <td className="border border-border px-4 py-2">Displays storage usage and model count information</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Model Card (&gt;)</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">View detailed model information</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Architecture details, capabilities, use cases, licensing</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Download</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Retrieve models from catalog</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Downloads models to local storage for offline use</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Test</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Validate and benchmark models</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Three modes: Sandbox, Standard, Custom; supports file upload</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>My Models</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Display downloaded models</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Shows locally stored models and storage usage</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>All</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Show complete catalog</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Displays all available models with quantization options</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Refresh</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Update catalog</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Syncs catalog with latest model additions and changes</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Models Config (⚙️)</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Configure orchestration</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Controls model selection, defaults, and behavior by task type</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Troubleshoot</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Diagnose issues</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Provides diagnostic tools and repair options</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Delete</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Remove models</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Frees storage space by removing local models</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Control</h5>
                <p className="text-sm mt-1 break-words"><strong>Info</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">View statistics</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features</h5>
                <p className="text-sm mt-1 break-words">Displays storage usage and model count information</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          The Models interface in Model HQ provides comprehensive tools for discovering, managing, and validating models. Users can explore the full catalog, download models for local use, run tests to validate performance, and configure model selection preferences to optimize for their specific use cases.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            For further assistance or to share feedback, please contact us at{' '}
            <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@aibloks.com
            </a>
          </p>
        </div>
      </div>
    </div>
    </DocPageLayout>
  )
}