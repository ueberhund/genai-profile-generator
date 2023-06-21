# genai-profile-generator
A sample application that can generate a profile photo via stable diffusion v2.1. This application includes photos of everyone's favorite CTO, Dr. Werner Vogels. By running the application, it will train a stable diffusion  model on Dr. Vogel's photo and deploy an Amazon SageMaker endpoint. Using the included HTML file, you can issue prompts to the endpoint and get photos back. You can modify this solution with photos of yourself and generate a new profile picture via generative AI.

## Setup

1. Deploy the [stable-diffusion.yml](stable-diffusion.yml) file via CloudFormation in your AWS account. The solution is currently configured to run in us-east-1.
2. Go to the Amazon S3 bucket that is created, and add photos of yourself under the `input/images/` folder. Update the `dataset_info.json` file with a description of what is included in your photos. Note: your photos **must** be 512x512 or the model training job will fail.
3. Go to the step function that was created and click the **Start execution** button. A new model will be trained and deployed. This process takes about 40 minutes to complete. Once complete, you should receive an email saying that the process was successful. 
4. Open the [js/variables.js](js/variables.js) file and modify line 1 to include your API endpoint. This value can be found under the `ApiEndpoint` label on the **Outputs** tab of the CloudFormation stack that you deployed.
5. Open the  [index.html](index.html) file and begin issuing prompts! Each request will take about 15 seconds to return.


