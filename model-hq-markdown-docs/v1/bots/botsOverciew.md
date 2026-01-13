# Exploring Bots in Model HQ
After completing the initial setup, users will be directed to the **Main Menu**. This document describes the Bots feature, which allows users to create custom Chat and RAG bots for either AI PC/edge device use cases (for either standalone or bots to be incorporated into an agent workflow) or via API deployment (Model HQ API Server Biz Bot).

## 1. Launching the bots interface
The Bots interface can be accessed by clicking the **Bots** button from the main menu.

![bots](botsOverview/01_bots.png)

## 2. Bots interface overview
After selecting Bots, an interface similar to the one shown below will be presented.

![bots](botsOverview/02_botsInterface.png)

The interface provides multiple control options. The following subsections describe each control and recommended usage.

Available options:
1. Options — choose whether to create a new bot or load an existing one.
   - Build new: Create a new bot from scratch.
   - Load Existing: Load a previously created or existing bot.
2. Next or `>` — proceed to the next step.
3. Edit — modify an existing bot configuration.
4. Share — export and share bot configurations.
5. Upload — import a bot from a shared file.
6. Delete — remove a bot from the interface.

> [!NOTE]
> By default, the **Load Existing** option is selected, which allows pre-existing bots to be run immediately.

### 2.1 Building a new bot
To build a bot, `build new` can be selected and then the `>` button clicked.

For detailed instructions, see [Building a Bot](https://github.com/BloksAdmin/model-hq-docs/blob/master/v1/bots/buildBot).

### 2.2 Loading an existing bot

To load an existing bot, `load existing` can be selected (if not already selected) and then the `>` button clicked.

A window will be presented displaying Bot Info. If this is the desired bot, the `>` button can be clicked again to proceed.

[screenshot]

<details><summary>Bot Info example</summary>

**Launching Bot: Demo Bot Example**

Once the bot is selected, user is able to get a description of the Bot as well as other details such as whether a source such as a document is appended to the bot for queries. In this example, the bot has an example Employment Agreement that is attached so the user can query the document without having to separately upload it.

**Demo Mode**

Bots that have been created with a demo will be able to be pre-viewed with a Demo Mode. In the Demo Bot example, when the user selects Demo Mode, the Demo Bot will automatically launch the conversation turns that the creator pre-set, as shown in the Description section. In addition, if there is a YouTube video of the bot in action or a related tutorial by LLMWare, the Video section will link to the specific video.

[screenshot of description ]




**Bot with Agents**
Author: llmware
Created Date: 2025-07-06_135720
Capabilities: ['File Upload', 'Library Connection', 'Tables', 'Images', 'Sources', 'Wikipedia']

</details>

The bot interface will then be presented. The Bots interface is similar to the Chat interface, but with specialized capabilities.

![bots](botsOverview/04_runningBotInterface.png)

> [!IMPORTANT]
> If the model used in the bot is not pre-downloaded, it will be downloaded automatically. This typically takes 1-2 minutes depending on internet connectivity.

The bot interface includes standard chat options:
1. Model
2. Source
3. Prompts
4. Web Search (requires internet)

Other useful controls:
- Configure — adjust generation and retrieval parameters.
- Info — inspect the active model and session settings.
- Save / Download — export the session transcript.

Featured bot-specific options:
- Cloud API Agent
- Summarize Website

#### 2.2.1 Cloud API agent
<INTRO- NAMEE TO FILL> -> AI SHOULD NOT TOUCH THIS

![bots](botsOverview/05_cloudAPI.png)

> [!NOTE]
> You can enable/disable this feature while editing a bot, read more [here]()

DESCRIPTION- NAMEE TO FILL

#### 2.2.2 Summarize website
INTRO- NAMEE TO FILL

![bots](botsOverview/06_summarizeWebsite.png)

> [!NOTE]
> This feature can be enabled or disabled while editing a bot. See [Editing a Bot](https://github.com/BloksAdmin/model-hq-docs/blob/master/v1/bots/editBot) for details.

DESCRIPTION- NAMEE TO FILL

### 2.3 Edit
The Edit control allows existing bots to be modified. The editing process for a bot is the same as creating a new bot.

![bots](botsOverview/07_editBot.png)

For a complete editing overview, see [Editing a Bot](https://github.com/BloksAdmin/model-hq-docs/blob/master/v1/bots/editBot).

### 2.4 Share

The Share control allows bots to be exported and shared with others. When the Share button is clicked, a downloadable zip file will be created. The bot configuration can then be imported by others using the Upload feature.

![bots](botsOverview/08_share.png)

### 2.5 Upload

The Upload control allows bots to be imported from a zip file. The zip file should be one that was previously shared using the Share feature.

## Conclusion
