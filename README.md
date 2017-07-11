# Financial risk management using Machine Learning on zSystems

The following documentation will introduce the available Financial Risk Management API published on [IBM Bluemix] with Machine Learning running on the [IBM z Systems Mainframe] through a simulated retail bank called MPLbank ([IBM Client Center Montpellier]) for the IBM Developer Journey Program.

Please read this full page the first time to understand objectives, available APIs and the infrastructure used.

To have more details details about MPLbank, please go to [Banking Digitalization using Hybrid Cloud with z Systems].

# Overview of Machine Learning for z/OS

[IBM Machine Learning for z/OS] is an end-to-end enterprise machine learning platform that helps you create, train, and deploy machine learning models to extract value from your mission critical data on IBM z Systems, while keeping the data where it resides.

Machine Learning for z/OS integrates some powerful IBM machine learning capabilities, including IBM z/OS Platform for Apache Spark. It simplifies and automates the machine learning workflow and enables collaboration on machine learning projects across disciplines, including data scientists, data engineers, business analysts, and application developers. By keeping the data on your z Systems, Machine Learning for z/OS helps significantly reduce the cost, security risk, and time to create, evaluate, and deploy machine learning models.

As shown in the following figure, the z/OS Platform for Apache Spark cluster runs on z/OS and continuously ingests data into the Machine Learning for z/OS pipeline in real time. The application cluster runs on Linux or Linux on z Systems (Linux on z) and provides a web user interface for model training and management. Data scientists can use the user interface to select data sources for model building, training, and deployment. Application developers can see the list of saved models for deployment. Deployed models are used to make predictions. The models can be optimized as the data is pushed back into the machine learning workflow in a feedback loop.

![alt text](images/mlz_architecture.png "Architecture")


[![Machine Learning Video](https://www.youtube.com/watch?v=Xs-4sRZ133I)](https://www.youtube.com/watch?v=Xs-4sRZ133I)



[IBM Bluemix]: https://www.ibm.com/us-en/marketplace/cloud-platform
[IBM z Systems Mainframe]: https://www-03.ibm.com/systems/z/
[IBM Client Center Montpellier]: https://www.ibm.com/ibm/clientcenter/montpellier/
[Banking Digitalization using Hybrid Cloud with z Systems]:https://github.com/IBM/Banking-digitalization-using-hybrid-cloud-with-zSystem

[IBM Machine Learning for z/OS]: https://www.ibm.com/ms-en/marketplace/machine-learning-for-zos
[IBM Machine Learning for z/OS Knowledge Center]: https://www.ibm.com/support/knowledgecenter/en/SS9PF4
