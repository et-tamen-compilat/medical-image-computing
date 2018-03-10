# Detection of Lung Cancer

Lung cancer is an area in which artificial intelligence is starting to become more prominent. It is the third most common type of cancer in the UK, and accounts for 13% of all diagnoses. 130 people a day are diagnosed with lung cancer. The survival rates for over 10 years are only 5%, however 89% of cases are preventable. This is why people are suggesting that machine learning could be used to diagnose these cases more effectively, give treatment earlier, and increase survival rates.

Earlier detection is important because it allows lots of treatment options which would not be available if the cancer is found at a later stage. CT scans, which are the most common method of detection currently, can give false-positive readings and this is why doctors and computer scientists think that machine learning can be used to increase the accuracy and reliability of scan reading.

![](content-images/lung1.png)

## How would it work?

Lung cancer can start off as a small nodule which occurs in an asymptomatic patient. Screening imaging is the process of looking for these, and diagnosing them before they get worse. When a patient starts getting symptoms, and we detect these small nodules which aren't the cause of the symptoms, these are called incidentally detected nodules. Nodules are classed as being between 1 and 3cm in diameter, and a mass is over 3cm in diameter. Anything below 1cm in diameter is a micronodule.

CT scans are currently the best way to look for these, and PET-CT scans are the best way to look at the behaviour of them, which allows doctors to predict the risk of cancer they impose. Nodules can come in many different shapes, and lots of different features, such as size, location and growth, help radiologists predict if it is cancerous.

## 2017 Data Science Bowl

This was a competition aimed at detecting lung cancer using machine learning. The competitors were given 1000 anonymous pictures of lung scans, and had to use these to find patters in data which could later lead to detection and diagnosis, to improve lung cancer screening technology.

The algorithms could detect which legions in the lungs are cancerous, which is an improvement on current methods like CT scans, which often give false-positive readings.

There were over 18,000 algorithms developed during the challenge, with the goal of giving them to actual radiologists, so that they can be used in real time in order to diagnose patients.

## Problems... and potential solutions?

Lots of doctors are wary of how to store lots of data for machine learning programs to work properly, due to patient confidentiality laws. However, the FDA did approve a cloud-based deep learning algorithm for cardiac imaging in 2017, which shows that in the future, it will be more common placed in patient diagnosis.

In March 2018, Google introduced a new Cloud Healthcare API, which aims to create a secure service which can be used to implement Artificial Intelligence and Machine Learning on lots of healthcare data. Working with the Stanford School of Medicine and other partners, their aim is to "help transform the healthcare industry through the use of cloud technologies and machine learning".

## Sources

- [*__Medical Futurist__*](http://medicalfuturist.com/the-future-of-radiology-and-ai/)
- [*__Data Science Bowl__*](https://datasciencebowl.com/competitions/turning-machine-intelligence-against-lung-cancer/)
- [*__Cancer Research UK__*](http://www.cancerresearchuk.org/health-professional/cancer-statistics/statistics-by-cancer-type/lung-cancer)
- [*__ZD Net__*](http://www.zdnet.com/article/google-takes-health-care-to-the-cloud-with-new-api-partnerships/)
- [*__Google Blog__*](https://blog.google/topics/google-cloud/google-cloud-healthcare-new-apis-customers-partners-and-security-updates/)
 - [*__Medium__*](https://medium.com/@alexandrecadrin/lung-cancer-bridging-the-gap-between-medical-imaging-and-data-science-a92b0bb08fda)