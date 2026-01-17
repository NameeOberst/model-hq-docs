## 5. Creating a dataset source
To create a dataset source, the source creation process should be started again. This time, two options will be visible: load existing and build new, as mentioned earlier.

When `build new` is selected, a similar interface will be presented. The name of the source can be entered, the encryption type can be chosen, and in the source type field, dataset can be selected before clicking next.

![source](source/09_datasetSource.png)

### 5.1 Adding a dataset
Once the above form is completed, a file upload prompt will be presented. This file should have a well-defined row-column structure and will be used as the source of the dataset. Supported types: `.csv`, `.json`.

![source](source/10_datasetSourceUploadDocs.png)

### 5.1.1 Master schema
If any previous dataset source exists, that dataset can be used to set a master schema for the current dataset being created.

![source](source/10_datasetSourceMaster.png)

### 5.2 Mapping
Once a file is added, the schema will be auto-fetched and mapping will be performed automatically. However, the mapping can be cross-checked for more precision and updated as needed.

![source](source/11_datasetSourceMapping.png)

### 5.3 Confirm the dataset schema
In this window, confirmation of the dataset schema will be requested. Dataset details (including dataset analysis and instructions to set up the dataset) created so far will be provided.

![source](source/12_datasetSourceConfirm.png)

### 5.4 Dataset configuration setup
This is a 3-step process in which three configuration questions will be presented. One or multiple fields from the provided dataset should be selected for each step.

**Step 1: RAG/Retrieval Columns**
"Which columns have the text to be used for RAG/Retrieval processes?"

<ai to explain>

**Step 2: ID Column**
"Which column(s), if any, represent a unique identifier for each row, e.g., reference number?"

<ai to explain>

**Step 3: KPI Definition**
"Define the main performance indicators for the dataset"

<ai to explain>

Once these steps are completed, confirmation of the dataset configuration will be requested again.

![source](source/13_datasetSourceConfirmConfig.png)

### 5.5.0 RAG Builder

![source](source/14_datasetSourceOptions.png)

### 5.6 Search
The search functionality for dataset sources operates identically to the standard source search described in section [4.2]().

### 5.7 Configure
This option allows the Dataset Configuration setup to be reconfigured.

### 5.8 Train (BETA)
The **Train** option allows a target variable to be defined that can be predicted or fitted using a machine learning model.

![source](source/15_datasetSourceTrain.png)

In this step, the **train variable** (for example, a `y` column) that represents the output the model should learn to predict can be specified.

* **Train Variable**
  The name of the column to be used as the training target should be entered.

  * If the column already exists in the dataset, it will be used directly.
  * If the column name does not exist, it will be added to the schema.
  * If the field is left blank, the training configuration will be ignored.

After clicking next, confirmation will be requested again to configure and train an ML model on this dataset.

### 5.9 Predict
The **Predict** option is used to define the features and objective used during model prediction and feature analysis.

![source](source/16_datasetSourcePredict.png)

This screen allows the intended prediction objective to be described and features that should participate in training to be selected.

* **Describe Model Objective**
  A high-level description of the model and its primary prediction goal can optionally be provided. This helps document the intent of the model and improves clarity during review and collaboration.

* **Numerical Features**
  Numerical columns that should be included as training features can be selected.

  * Enabling a feature marks it as usable during model training and prediction.
  * Only selected features will be considered during feature analysis and model execution.

Once the required features are selected, the **Next ( > )** button can be clicked to continue, or the **Home** button can be used to exit the flow.

## 6. Load existing source
This option allows RAG functionality to be quickly accessed for sources that have been previously created.

Sources can be configured and deleted as needed from this interface.

