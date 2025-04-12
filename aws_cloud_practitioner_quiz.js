
// QUESTIONS
// QUESTIONS
const questions = [
  {
    question: "Which AWS service is used to run code without provisioning or managing servers?",
    options: ["EC2", "Lambda", "ECS", "Lightsail"],
    answer: "Lambda"
  },
  {
    question: "What is Amazon S3 used for?",
    options: ["Compute", "Object storage", "Database", "Monitoring"],
    answer: "Object storage"
  },
  {
    question: "Which pricing model allows you to save money by committing to a consistent amount of usage?",
    options: ["On-Demand", "Reserved Instances", "Spot Instances", "Free Tier"],
    answer: "Reserved Instances"
  },
  {
    question: "Which AWS service provides a virtual server?",
    options: ["Lambda", "EC2", "S3", "RDS"],
    answer: "EC2"
  },
  {
    question: "What is the main benefit of using AWS CloudTrail?",
    options: ["Data analytics", "Monitoring performance", "Auditing API calls", "Scaling applications"],
    answer: "Auditing API calls"
  },
  {
    question: "Which AWS service is a NoSQL database?",
    options: ["RDS", "Redshift", "DynamoDB", "Aurora"],
    answer: "DynamoDB"
  },
  {
    question: "What is the AWS global infrastructure composed of?",
    options: ["Regions, Availability Zones, and Edge Locations", "Regions and VPCs", "AZs and Buckets", "CloudFront and S3"],
    answer: "Regions, Availability Zones, and Edge Locations"
  },
  {
    question: "Which tool helps you estimate your AWS monthly bill?",
    options: ["Cost Explorer", "AWS Billing Dashboard", "Pricing Calculator", "AWS Budgets"],
    answer: "Pricing Calculator"
  },
  {
    question: "Which AWS service helps you monitor your resources and applications in real-time?",
    options: ["CloudTrail", "CloudWatch", "IAM", "VPC"],
    answer: "CloudWatch"
  },
  {
    question: "What does the AWS Shared Responsibility Model state?",
    options: ["AWS is responsible for all security", "You are responsible for everything", "Security is shared between AWS and the customer", "Security is managed only by customers"],
    answer: "Security is shared between AWS and the customer"
  },
  {
    question: "Which AWS service is used for content delivery?",
    options: ["CloudFront", "S3", "EC2", "Route 53"],
    answer: "CloudFront"
  },
  {
    question: "Which AWS service provides relational database functionality?",
    options: ["DynamoDB", "RDS", "Redshift", "Aurora"],
    answer: "RDS"
  },
  {
    question: "What is AWS IAM used for?",
    options: ["Data analytics", "Identity and access management", "Storage management", "Compute"],
    answer: "Identity and access management"
  },
  {
    question: "Which AWS service can scale up or down based on load?",
    options: ["EC2", "S3", "Lambda", "VPC"],
    answer: "EC2"
  },
  {
    question: "What type of storage is Amazon EBS?",
    options: ["Block storage", "Object storage", "File storage", "Database storage"],
    answer: "Block storage"
  },
  {
    question: "Which AWS service helps with DDoS attacks?",
    options: ["WAF", "Shield", "CloudFront", "IAM"],
    answer: "Shield"
  },
  {
    question: "Which of the following is a fully managed database service?",
    options: ["RDS", "DynamoDB", "Redshift", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which service helps you automate the deployment of applications?",
    options: ["Elastic Beanstalk", "EC2", "Lambda", "RDS"],
    answer: "Elastic Beanstalk"
  },
  {
    question: "Which AWS service helps you to deploy containerized applications?",
    options: ["ECS", "Lambda", "EC2", "Elastic Beanstalk"],
    answer: "ECS"
  },
  {
    question: "What does AWS CloudFormation provide?",
    options: ["Infrastructure as Code", "Database as a Service", "Managed Network", "Data Analytics"],
    answer: "Infrastructure as Code"
  },
  {
    question: "Which AWS service is used for network monitoring?",
    options: ["VPC", "CloudTrail", "CloudWatch", "Route 53"],
    answer: "CloudWatch"
  },
  {
    question: "What does Amazon Route 53 provide?",
    options: ["DNS service", "Database service", "File storage", "Networking service"],
    answer: "DNS service"
  },
  {
    question: "Which AWS service is used for managed Kubernetes clusters?",
    options: ["EKS", "EC2", "Lambda", "ECS"],
    answer: "EKS"
  },
  {
    question: "What is AWS Elastic Load Balancing (ELB) used for?",
    options: ["To manage DNS", "To distribute incoming traffic to multiple targets", "To monitor network performance", "To manage database connections"],
    answer: "To distribute incoming traffic to multiple targets"
  },
  {
    question: "Which AWS service provides a content delivery network?",
    options: ["S3", "CloudFront", "Route 53", "EC2"],
    answer: "CloudFront"
  },
  {
    question: "Which AWS service is primarily used for automating infrastructure provisioning?",
    options: ["AWS Lambda", "AWS CloudFormation", "Amazon EC2", "Amazon RDS"],
    answer: "AWS CloudFormation"
  },
  {
    question: "Which AWS service is best for monitoring AWS resources and applications?",
    options: ["AWS CloudTrail", "AWS CloudWatch", "AWS Lambda", "Amazon S3"],
    answer: "AWS CloudWatch"
  },
  {
    question: "Which of the following services is used to store large amounts of unstructured data?",
    options: ["S3", "RDS", "DynamoDB", "EBS"],
    answer: "S3"
  },
  {
    question: "Which of the following services is used to scale applications automatically?",
    options: ["AWS Lambda", "Elastic Load Balancer", "Auto Scaling", "EC2"],
    answer: "Auto Scaling"
  },
  {
    question: "Which AWS service enables you to run virtual desktops in the cloud?",
    options: ["Amazon WorkSpaces", "Amazon RDS", "Amazon S3", "AWS Lambda"],
    answer: "Amazon WorkSpaces"
  },
  {
    question: "Which AWS service is used for real-time messaging between distributed applications?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon Kinesis", "Amazon CloudFront"],
    answer: "Amazon SNS"
  },
  {
    question: "What is the default maximum number of availability zones per AWS region?",
    options: ["1", "3", "5", "6"],
    answer: "3"
  },
  {
    question: "What does AWS Auto Scaling do?",
    options: ["Provisions EC2 instances", "Helps scale EC2 instances based on load", "Deploys Lambda functions", "Stores data in S3"],
    answer: "Helps scale EC2 instances based on load"
  },
  {
    question: "Which AWS service is designed for distributed caching?",
    options: ["ElastiCache", "RDS", "EFS", "DynamoDB"],
    answer: "ElastiCache"
  },
  {
    question: "Which AWS service is used to monitor application health and availability?",
    options: ["CloudWatch", "CloudTrail", "Route 53", "VPC"],
    answer: "CloudWatch"
  },
  {
    question: "What is the primary purpose of Amazon CloudFront?",
    options: ["Data analytics", "Content delivery", "DNS management", "Compute scaling"],
    answer: "Content delivery"
  },
  {
    question: "What is the AWS shared responsibility model?",
    options: ["AWS handles all security", "The customer handles security only", "Security is shared between AWS and the customer", "AWS doesn't handle security"],
    answer: "Security is shared between AWS and the customer"
  },
  {
    question: "What is an AWS Availability Zone?",
    options: ["A specific server within a data center", "A global service endpoint", "A logical partition of a region", "A physical data center in a region"],
    answer: "A physical data center in a region"
  },
  {
    question: "Which of the following is an AWS compute service?",
    options: ["EC2", "RDS", "S3", "VPC"],
    answer: "EC2"
  },
  {
    question: "Which AWS service is used to deploy machine learning models?",
    options: ["SageMaker", "Redshift", "DynamoDB", "CloudFormation"],
    answer: "SageMaker"
  },
  {
    question: "What is AWS Direct Connect used for?",
    options: ["Direct connection between AWS and on-premises data centers", "Connecting S3 to CloudFront", "Establishing a VPN connection", "Managing DNS records"],
    answer: "Direct connection between AWS and on-premises data centers"
  },
  {
    question: "Which AWS service allows you to host a static website?",
    options: ["EC2", "S3", "RDS", "Lambda"],
    answer: "S3"
  },
  {
    question: "What is AWS Global Accelerator?",
    options: ["Global DNS service", "Global content delivery network", "Global load balancing", "Global security service"],
    answer: "Global load balancing"
  },
  {
    question: "Which AWS service is used for data warehousing?",
    options: ["Redshift", "RDS", "S3", "DynamoDB"],
    answer: "Redshift"
  },
  {
    question: "Which AWS service allows you to run SQL queries on data stored in Amazon S3?",
    options: ["Athena", "Redshift", "EC2", "RDS"],
    answer: "Athena"
  },
  {
    question: "Which of the following is NOT an AWS storage service?",
    options: ["EBS", "S3", "VPC", "EFS"],
    answer: "VPC"
  },
  {
    question: "Which AWS service is used to enable machine learning in your applications?",
    options: ["SageMaker", "Lambda", "Redshift", "RDS"],
    answer: "SageMaker"
  }
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("nextBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const resultDiv = document.getElementById("result");
const progressFill = document.getElementById("progressFill");

function showQuestion(index) {
  const q = questions[index];

  let html = `<div class="question">
      <p>${index + 1}. ${q.question}</p>
      <div class="options">`;

  q.options.forEach((opt) => {
    html += `<label>
      <input type="radio" name="option" value="${opt}"> ${opt}
    </label>`;
  });

  html += `</div></div>`;
  questionContainer.innerHTML = html;

  updateProgressBar();
}

function getSelectedOption() {
  const selected = document.querySelector('input[name="option"]:checked');
  return selected ? selected.value : null;
}

function updateProgressBar() {
  const percent = ((currentQuestion) / questions.length) * 100;
  progressFill.style.width = `${percent}%`;
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  resultDiv.textContent = "";
  nextBtn.style.display = "inline-block";
  tryAgainBtn.style.display = "none";
  showQuestion(currentQuestion);
}

nextBtn.addEventListener("click", () => {
  const selected = getSelectedOption();

  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    questionContainer.innerHTML = "";
    nextBtn.style.display = "none";
    tryAgainBtn.style.display = "inline-block";
    progressFill.style.width = `100%`;
    resultDiv.textContent = `You scored ${score} out of ${questions.length}`;
  }
});

tryAgainBtn.addEventListener("click", resetQuiz);

// Load first question
showQuestion(currentQuestion);
