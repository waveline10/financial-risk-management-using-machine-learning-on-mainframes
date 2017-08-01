# Overview on IBM Machine Learning for IBM z/OS

[IBM Machine Learning for z/OS] is an end-to-end enterprise machine learning platform that helps you create, train, and deploy machine learning models to extract value from your mission critical data on IBM z Systems, while keeping the data where it resides. Please watch [this video] to understand how IBM Machine Learning for z/OS helps Industries to resolve data value.

Machine Learning for z/OS integrates some powerful IBM machine learning capabilities, including [IBM z/OS Platform for Apache Spark]. It simplifies and automates the machine learning workflow and enables collaboration on machine learning projects across disciplines, including data scientists, data engineers, business analysts, and application developers. By keeping the data on your z Systems, Machine Learning for z/OS helps significantly reduce the cost, security risk, and time to create, evaluate, and deploy machine learning models.

As shown in the following figure, the z/OS Platform for Apache Spark cluster runs on z/OS and continuously ingests data into the Machine Learning for z/OS pipeline in real time. The application cluster runs on Linux or [Linux on z Systems] (Linux on z) and provides a web user interface for model training and management. Data scientists can use the user interface to select data sources for model building, training, and deployment. Application developers can see the list of saved models for deployment. Deployed models are used to make predictions. The models can be optimized as the data is pushed back into the machine learning workflow in a feedback loop.

![alt text](images/mlz_architecture.png "Architecture")


[IBM Machine Learning for z/OS]: https://www.ibm.com/ms-en/marketplace/machine-learning-for-zos
[IBM z/OS Platform for Apache Spark]: https://www.ibm.com/us-en/marketplace/real-time-analysis-on-z-systems
[Linux on z Systems]:https://www-03.ibm.com/systems/uk/z/os/linux/
