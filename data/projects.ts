export interface ProjectLink {
  title: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  categories: ("machine-learning" | "deep-learning" | "visualization" | "applications" | "team-project")[]
  date: string // Month, Year format
  fullDescription: string // Supports markdown
  background: string // Supports markdown
  objectives: string[] 
  tools: string[]
  dataSource: string 
  dataSourceUrl?: string
  methodology: string // Supports markdown
  links: ProjectLink[]
  conclusion: string // Supports markdown
  //assets: string[]
  assetsContent?: string // Markdown-based assets content
}

export const projects: Project[] = [
  // JKN Mobile Project
  {
    id: "jkn-mobile-sentiment",
    title: "Understanding JKN Mobile User Experiences",
    description:
      "A Sentiment Analysis and Topic Modeling Approach to analyze user feedback and improve the JKN Mobile application.",
    image: "/projects/mixed-jknm/cover-jknmobile.jpg?height=400&width=600",
    tags: ["NLP", "Sentiment Analysis", "Topic Modeling", "Python"],
    categories: ["deep-learning", "visualization"],
    date: "October 2024",
    fullDescription: `
## Overview

Analyzed 27,000+ JKN Mobile user feedback, identifying key sentiments and concerns using Python and NLP (LDA), achieving 80% sentiment classification accuracy, uncovering 3 key user concerns, and driving actionable product enhancements.

### Key Achievements
- **3 Key User Concerns Identified**: Discovered the most pressing issues affecting user experience
- **Actionable Insights**: Provided specific recommendations that led to product improvements

The analysis involved processing large volumes of text data from app store reviews and applying NLP techniques to extract meaningful patterns.
    `,
    background: `
The JKN Mobile app is a digital platform designed to facilitate access to National Health Insurance (BPJS Kesehatan) services. It offers various features, including checking insurance status, finding healthcare providers, and managing claims.

Despite the JKN Mobile app's 4.3 rating on the Play Store, there are anecdotal reports of user dissatisfaction and challenges, such as difficulties in creating accounts and receiving OTP codes. This project seeks to systematically investigate these issues and identify areas for improvement.

### Problem Statement

1. The application had received thousands of reviews across multiple platforms
2. Manual analysis was time-consuming and potentially biased
3. There was no clear prioritization of which issues to address first

This project aimed to solve these challenges by applying NLP techniques to objectively analyze user feedback at scale.
    `,
    objectives: [
      "Analyze user sentiments towards the JKN Mobile application",
      "Identify key topics and concerns from user feedback",
      "Provide actionable insights for application improvement",
    ],
    tools: ["Python", "NLTK", "Scikit-learn", "LDA", "Pandas"],
    dataSource: "27,000+ user reviews from Google Play Store and App Store",
    dataSourceUrl: "https://play.google.com/store/apps/details?id=app.bpjs.mobile",
    methodology: `
1. Data Collection: Scraping user reviews from Google Playstore using 'google-play-scraper' library.
2. Data Cleaning: Remove duplicate reviews, handle missing value.
3. Text Cleansing: Remove punctuations, emoji, stopwords, handle slang words, ensuring the text is clean to proceed further.
4. Exploratory Data Analysis: The data was thoroughly examined to understand its characteristics and identify potential patterns.
5. Sentiment Analysis Labeling: Labeling the reviews using the [Indonesia-bert-sentiment-classification](https://huggingface.co/mdhugol/indonesia-bert-sentiment-classification) model available in Hugging Face.
6. Text Analysis: Drawing bigrams, trigrams, word clouds from each sentiment category to unleash pattern.
7. Topic Modeling: Employing LDA to identify the main themes and topics discussed in the reviews.
8. Dashboard creation: For interactive visualization and easy customization, Streamlit was used to create dashboard.
9. Create narrative report: Present the findings and comprehensive analysis in a narrative format, published in medium.
`,
    links: [
      { title: "View Code", url: "https://github.com/roissyahf/JKN-Mobile-2024" },
      { title: "Project Report", url: "https://medium.com/@roissyahfernanda/understanding-jkn-mobile-user-experiences-a-sentiment-analysis-and-topic-modeling-approach-9f0b6d9f8177"},
      { title: "Interactive Dashboard", url: "https://jkn-mobile-reviews-2024.streamlit.app/" },
    ],
    conclusion: `
## Results & Insights

The most frequently discussed topic among JKN Mobile users was the difficulty of registering and logging in due to OTP code errors. This issue was prevalent in negative reviews, indicating a poor user experience. Bigrams and trigrams also supported this finding, with users mentioning the challenges of waiting for OTP codes and attempting multiple registrations without success.

Neutral and negative sentiments were evenly balanced, with 37.5% of users expressing neutral feelings and 37.4% expressing negative sentiments. The word cloud analysis of neutral sentiment revealed that users often discussed registration, login, OTP codes, and verification processes, suggesting a need for assistance or improvements in these areas.

Users expressed frustration with three main functionalities:
- Registration and login: Difficulties with OTP codes, long wait times, and multiple failed attempts were common complaints.
- Captcha errors: Some users encountered issues with the captcha code during registration and login.
- Health facility registration: Users found it challenging to register for a health facility.

On the positive side, users appreciated the app’s ability to access JKN services and its ease of switching health services. The following areas require improvement:
- Registration and login function: Investigate the reasons for difficulties with OTP codes, captcha errors, and multiple failed attempts and implement solutions to address these issues.
- Online registration feature: Investigate the reason for the difficulties in registering for a health facility.

## Recommendations
To enhance user satisfaction and address the identified issues, the following recommendations are proposed:
- **Streamline the registration and login process**: Simplify the verification process, reduce wait times for OTP codes, and implement more robust error-handling mechanisms.
- **Improve OTP delivery reliability**: Explore alternative methods for OTP delivery, such as email, or in-app notifications, to ensure timely and reliable receipt.
- **Enhance captcha functionality**: Implement a more user-friendly and accurate captcha system to reduce errors and improve the login experience.
- **Provide clear instructions and guidance**: Offer detailed instructions and guidance on the registration and login process, including troubleshooting tips and FAQs.
- **Consider implementing biometric authentication**: Explore the use of biometric features (e.g., fingerprint, facial recognition) as an additional or alternative authentication method to improve security and convenience.
    `,
  },


  // Congestion Forecasting Project
  {
    id: "congestion-forecasting",
    title: "Leveraging Machine Learning for Congestion Level Forecasting",
    description:
      "Built a traffic congestion forecasting model for 10 AI-powered ITCS intersections using clustering, regression, and classification algorithms.",
    image: "/projects/mixed-trafficc/cover-trafficcongestion.jpg?height=400&width=600",
    tags: ["Machine Learning", "Clustering", "Regression", "Classification", "Streamlit"],
    categories: ["machine-learning", "team-project", "applications"],
    date: "August 2023",
    fullDescription: `
## Project Summary

Built a traffic congestion forecasting model using clustering, regression, and classification algorithms on 1600+ traffic data points from HERE Maps API, achieving 94% prediction accuracy and enabling proactive congestion management through a user-accessible Streamlit app.
    `,
    background: `
Since May 2023, Jakarta has consistently featured among the top 10 most polluted cities globally according to the Air Quality Index, even peaking at number one in August.

In response to chronic traffic congestion, the Jakarta Provincial Government has implemented several initiatives, the most recent being an AI-driven Intelligent Traffic Control System (ITCS) developed in collaboration with Google under the Greenlight project. This system adjusts traffic light durations dynamically based on real-time traffic volume at intersections.
    `,
    objectives: [
      "Building upon ITCS, we propose enhancing the ITCS by constructing a machine-learning model that empowers road users at ITCS-equipped intersections to predict future traffic congestion",
      "As a pilot phase, we will focus on 10 of the 20 initially equipped intersections, leveraging a case clustering, regression, and classification approach on traffic data acquired via the Here Maps API"
    ],
    tools: ["Python", "Scikit-learn", "Streamlit", "HERE Maps API"],
    dataSource: "1600+ traffic data points collected from HERE Maps API",
    dataSourceUrl: "https://www.here.com/platform/map-data",
    methodology: `
## Methodology
1. Scrap data from HERE MAPS API
2. Data Preprocessing
3. Exploratory Data Analysis
4. Feature Engineering
5. KMeans clustering for making label classification
6. Random Forest and XGBoost Regressor to predict travel time seconds
7. Random Forest and XGBoost Classifier to classify congestion level
8. Model Tuning and Evaluation
9. Streamlit for deployment
    `,
    links: [
      { title: "View Code", url: "https://github.com/roissyahf/RISTEK-DATATHON-2023" },
      { title: "View Streamlit App", url: "https://predict-cluster-lalu-lintas-h4xargbrrbqhfuugi9tebb.streamlit.app/" },
    ],
    conclusion: `
## Conclusion
KMeans clustering with a silhouette score of 0.596 effectively categorizes travel times into four groups. Furthermore, XGBoost Regressor Tuning yielded the lowest SMAPE score at 1.714, while XGBoost Classifier Tuning delivered the best performance in congestion level prediction with a precision score of 95.66%.

The most important features in regression and classification models are normal speed, base duration, intersections, and sin hours. The Streamlit app provided an accessible interface for users to access predictions.
    `,
  },

  // Project to be added
]
