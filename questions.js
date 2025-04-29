// QUESTIONS
const questions = [
    {
      question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    "options": [
      {
        "text": "AWS CLI",
        "explanation": "The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services from a command line."
      },
      {
        "text": "AWS API",
        "explanation": "The AWS Application Programming Interface (API) provides programmatic access to AWS services."
      },
      {
        "text": "AWS SDK",
        "explanation": "The AWS Software Development Kits (SDKs) enable you to use AWS services with your applications in various programming languages."
      },
      {
        "text": "AWS Management Console",
        "explanation": "The AWS Management Console is a web-based user interface for managing and accessing AWS services."
      }
    ],
      answer: "AWS Management Console"
    },
    {
      question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
      options: [
        "Replacing an existing EC2 instance with a larger, more powerful one.",
        "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
        "Adding more RAM capacity to an EC2 instance.",
        "Adding more EC2 instances of the same size to handle an increase in traffic."
      ],
      answer: "Adding more EC2 instances of the same size to handle an increase in traffic."
    },
    {
      question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
      options: [
        "Amazon Inspector",
        "AWS CloudTrail",
        "AWS Trusted Advisor",
        "EC2 Instance Usage Report"
      ],
      answer: "AWS CloudTrail"
    },
    {
      question: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
      options: [
        "Applying the principle of least privilege to all AWS resources.",
        "Automatically provisioning new resources to meet demand.",
        "All AWS services are considered Global Services, and this design helps customers serve their international users.",
        "Providing compensation to customers if issues occur.",
        "Ability to recover quickly from failures."
      ],
      answer: "Automatically provisioning new resources to meet demand, Ability to recover quickly from failures"
    },
    {
      question: "Which statement is true regarding the AWS Shared Responsibility Model?",
      options: [
        "Responsibilities vary depending on the services used.",
        "Security of the IaaS services is the responsibility of AWS.",
        "Patching the guest OS is always the responsibility of AWS.",
        "Security of the managed services is the responsibility of the customer."
      ],
      answer: "Responsibilities vary depending on the services used."
    },
    {
      question: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
      options: [
        "The Reserved Instance discounts can only be shared with the master account.",
        "All accounts can receive the hourly cost benefit of the Reserved Instances.",
        "The purchased instances will have better performance than On-demand instances.",
        "There are no cost benefits from using consolidated billing; It is for informational purposes only."
      ],
      answer: "All accounts can receive the hourly cost benefit of the Reserved Instances."
    },
    {
      question: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
      options: [
        "Deploy the application across multiple Availability Zones and Edge locations.",
        "Deploy the application across multiple Availability Zones and subnets.",
        "Deploy the application across multiple Regions and Availability Zones.",
        "Deploy the application across multiple VPC’s and subnets."
      ],
      answer: "Deploy the application across multiple Regions and Availability Zones."
    },
    {
      question: "What does AWS Snowball provide? (Choose TWO)",
      options: [
        "Built-in computing capabilities that allow customers to process data locally.",
        "A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
        "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
        "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
        "Secure transfer of large amounts of data into and out of the AWS."
      ],
      answer: "Built-in computing capabilities that allow customers to process data locally, Secure transfer of large amounts of data into and out of the AWS."
    },
    {
      question: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
      options: [
        "AWS Health Dashboard",
        "AWS Support Concierge",
        "AWS Customer Service",
        "AWS Operations Support"
      ],
      answer: "AWS Support Concierge"
    },
    {
      question: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
      options: [
        "Applying the Amazon Connect latency-based routing policy.",
        "Registering a new US domain name to serve the users in the US.",
        "Building a new data center in the US and implementing a hybrid model.",
        "Deploying new Amazon EC2 instances in a Region located in the US."
      ],
      answer: "Deploying new Amazon EC2 instances in a Region located in the US."
    },
    {
      question: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
      options: [
        "IAM roles",
        "IAM users",
        "IAM user groups",
        "AWS Organizations"
      ],
      answer: "IAM user groups"
    },
    {
      question: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
      options: [
        "AWS OpsWorks",
        "AWS Database Migration Service",
        "AWS Server Migration Service",
        "AWS Application Discovery Service"
      ],
      answer: "AWS Database Migration Service"
    },
    {
      question: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
      options: [
        "Build security in every layer.",
        "Parallelize tasks.",
        "Implement elasticity.",
        "Adopt monolithic architecture."
      ],
      answer: "Implement elasticity."
    },
    {
      question: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
      options: [
        "Increasing speed and agility.",
        "There is no need to worry about security.",
        "Gaining complete control over the physical infrastructure.",
        "Operating applications on behalf of customers.",
        "All of the physical security and most of the data/network security are taken care of for you."
      ],
      answer: "Increasing speed and agility, All of the physical security and most of the data/network security are taken care of for you."
    },
    {
      question: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
      options: [
        "Allows treating an application as a single, cohesive unit.",
        "Reduces inter-dependencies so that failures do not impact other components of the application.",
        "Allows updates of any monolithic application quickly and easily.",
        "Allows tracking of any API call made to any AWS service."
      ],
      answer: "Reduces inter-dependencies so that failures do not impact other components of the application."
    },
    {
      question: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
      options: [
        "AWS Budgets",
        "AWS Pricing Calculator",
        "AWS Systems Manager",
        "AWS Cost & Usage Reports"
      ],
      answer: "AWS Cost & Usage Reports"
    },
    {
      question: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
      options: [
        "AWS services’ costs will be reduced to half the original price.",
        "The consolidated billing feature is just for organizational purpose.",
        "Each AWS account gets volume discounts.",
        "Each AWS account gets five times the free-tier services capacity."
      ],
      answer: "Each AWS account gets volume discounts."
    },
    {
      question: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
      options: [
        "Regularly update firmware on EBS devices.",
        "Create EBS snapshots.",
        "Ensure that EBS data is encrypted at rest.",
        "Store a backup daily in an external drive.",
        "Prevent any unauthorized access to AWS data centers."
      ],
      answer: "Create EBS snapshots, Ensure that EBS data is encrypted at rest."
    },
  
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