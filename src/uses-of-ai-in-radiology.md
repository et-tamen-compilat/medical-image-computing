---
cover: "thumbsUpBlue.png"
title: "Uses of AI in Radiology"
---

![](/content-images/uses.png) 
Breakdown of the tasked addressed by research papers in this field up until 2017

As can be seen in the diagram above, various uses of artificial intelligence, and in particular convolutional neural networks, are being researched into up. From organ segmentation to registration, some areas have already benefited from significant AI contributions, whilst others have only recently been explored. These could offer various benefits, namely limiting diagnostic errors caused by the eye-strain of radiologists, and complementing their work by providing data analysis too large for a human to process. At the same time, offering a cheaper and accessible diagnosis, notably in parts of the world lacking radiologists, is another outcome that researchers aim towards. Below, the main uses are presented alongside example of their applications.

##Classification

* Exam classification:

This is one of the first areas in which machine learning was introduced. From an “exam”, i.e one or several images as input(s), this method outputs a single diagnostic variable, generally indicating if a disease is present or not. The main constraint in introducing CNNs to perform this task is the lack of clinical data, and the extensive time from medical experts that is required for data annotations. Whilst a dataset typically contains millions of samples, medical imaging datasets typically only have hundreds of thousands of exams to use as samples. Several approaches exist to overcome this challenge.

On the one hand, transfer learning or inductive learning, by using a pre-trained network, is one possible strategy. This method consists in applying the knowledge gained while solving one problem to another related problem. In particular, fine-tuning a pre-trained network to work on medical data has been successful. For example, it has applied to the classification of skin cancer. As explained in the corresponding 2017 paper, GoogleNet Inception v3’s CNN architecture, from the 2014 ImageNet facial recognition competition, was used. After being pre-trained on more than 1.2 million images, it was trained on around 130 000 dermatologist-labelled clinical images. The network was tasked to output whether a given exam presented a case of the most common skin cancers, or the deadliest type. It was tested against 21 board-certified dermatologists, and matched their performance. The long-term aim behind this paper would be to equip mobile devices with deep neural networks, and provide cheaper universal access to diagnostic care.

<img src="/content-images/skinCancer.png" width="40%">

On the other hand, other recent papers have chosen to train their CNNs, by taking advantage of unique attributes of medical data to compensate the size of the datasets. For example, using 3D convolutions instead of the 2D convolutions presented in “Convolutional Neural Networks” <!--(ADD hyperlink)--> has been explored to classify patients as having Alzheimer’s. The network corresponds to an encoder-decoder architecture (see “Semantic Segmentation” <!--ADD hyperlink-->) extended to 3D images. It is pre-trained to capture brain shape variations on MRI scans before fine-tuning its upper fully convolutional layers for Alzheimer’s Disease classification as shown below. Testing the network on two different Alzeimer’s disease dataset showed that it had a higher accuracy than conventional classification networks.

![](/content-images/3Dcnn.png)


* Object or lesion classification:

Whereas exam classification focuses on the entire image, object classification focuses on classifying a small, previously identified part of a medical image into multiple classes. An example of such an object would be lung nodules in chest CT scans – see the “Detection of Lung Cancer” (ADD hyperlink) for more details. Combining local information, on the appearance of the lesion, with global context, regarding its location, is required for accurate classification. This makes it even more complex than exam classification, as it introduces the need to incorporate contextual and 3-dimensional information. As a result, conventional deep learning architectures aren’t efficient in this area, and variations or combinations with other architectures are being considered. 

For instance, a multi-stream CNN was used in 2016 to integrate 3D in the classification of pulmonary nodules. This architecture aimed to classify points of interest in chest CT scans as nodules or not. For each candidate nodule fed into the network, a set of 2D patches with different orientation planes is considered. Multiple streams of 2D convolution networks then process these sets, and their outputs are merged using a dedicated fusion method that will give the final classification. The network performed with high detection sensitivity above 85%, and was particularly effective in reducing false positives, ie. results wrongly indicating the presence of a nodule. This paper was part of the entries to the LUNA Challenge, covered in the “Detection of Lung Cancer” <!--ADD hyperlink-->.

##Detection

* Organ & region detection:

* Object or lesion detection:

The first object detection system using neural networks, was actually created in 1995 to detect nodules from X-ray images. It used a 4 layer CNN. Since then, machine learning has been explored in a number of ways to perform object detection. One example is detection of lymph nodes. This is as the size of swollen lymph nodes are signs of infection by a virus or a bacterium. Swollen lymph nodes can also be caused by cancer and is therefore important in cancer staging. This is the process of determining how far cancer has spread, which can be used to determine which treatment to give, and prognosis, a medical term for the chance of survival. Moreover, the number of swollen lymph nodes can be used to determine the progress of cancer treatments. Lymph nodes are part of the lymphatic system, an important part of the body's immune system. Automated lymph node detection by a computer system can be hard due to the variety of sizes and shapes lymph nodes can appear in. However, CNNs has shown to be extremely successful, compared to previous techniques. One paper to detect lymph nodes from CT scans first performed performed segmentation to generate lymph node candidates, called volumes of interest (VOI). Then, a patch-wise classification by taking 100 "random views" around each VOI and fed each random view into a 5-layer CNN. Each random view gave a probability of being a lymph nodes, and these probabilities were then averaged. Each random view consisted of 3 orthogonal patches.

## Organ Segmentation

Organ segmentation is a vital part of many medical procedures, particularly surgery planning and diagnosis. One recent example of segmentation in radiology was a collaboration between the University Medical Centre Utrecht and Eindhoven University of Technology, to segment parts of brain MRIs, breast MRIs and cardiac CTA. CTA, CT angiography, is a variation of CT scans that is used to visualise arterial and venous vessels in the body. Arterial vessels carry blood from the heart to parts of the body, whereas venous vessels carry blood from other parts of the body to the heart. CTA requires the patient ot inject a contrast agent, of some sort, usually iodine. The segmentation used CNNs. However, the interesting part of the collaboration was that rather than training different CNNs for the different parts of the body, investigated during the study, a single trained CNN was used for the three different segmentation task. So the CNN not only segments, but detects the type of image as well. In addition, only a very small amount of images were used. 34 MRI brain images, 34 MRI breast images and 10 cardiac CTA scans. The data was also 3D. To do segmentation, a variant of patch-wise segmentation was performed, where each voxel was classified along with a patch around it, all 3 orthogonal planes. Convolutional layers produced 96 outputs, that were fed into 2 fully connected layers. The CNN mistaking what is was segmenting was very low. Less than 0.0005% of pixels were classified into a class, that was not related to the type of image being processed.

However, these 3 parts of the body are far from being the only parts of the body that CNNs can segment. Another paper demonstrated a CNN architecture, which was able to segment 19 different parts of the human body, including important organs, such as the lungs, the pancreas, the liver, etc. It took as input CT scans, from a dataset of 240 human-annotated images. With only 240 images, it was able to achieve 89% accuracy. Unlike the paper mentioned earlier, this didn't use patch-wise classification, and instead used a fully convolutional network, meaning that it benefitted from knowing the entire context of the image before classifying a pixel. Another interesting thing about it didn't pass 3D data to the network, and instead passed 2D slices separately. This slices were of different orientations. The output from the network is a classification of each pixel for each slice, so to get the final result for each pixel different outputs for the pixel are combined from different slices at different orientations. For each pixel, there were 3 different slices, for the 3 orthogonal planes.

## Lesion Segmentation
A lesion is a part of a tissue or organ that is injured, and a wound is a lesion of the skin, particularly if it has been cut open. Wounds are an area that is particularly open to improvements in machine learning, since the high number of cases, means that thorough medical image analysis by humans is too time-consuming. But medical images of wounds are useful, as they allow for the detection of infection and for estimating the progress of healing. Another reason why it is ripe for improvement with deep learning is due to large datasets available, or at least large compared to what is usual for medical imaging. For instance, the NYU Wound database has 8000 images. In one paper, an encoder-decoder architecture was used to perform segmentation and the hidden layers of this network were passed to an SVM linear classifier, is another way of classifying data in machine learning, similar to a neural network. Meanwhile, the segmentation of the wound would allow surface area to be calculated. Two different images of wounds at two different points in time, would allow the change in surface area. This along with other data such as patient age and gender, would allow an estimate to be given of how long healing would take. 

##Registration

##Content-based image retrieval

##Combining image data with reports

## Sources

- [A Survey on Deep Learning in Medical Image Analysis](https://arxiv.org/pdf/1702.05747.pdf) by Geert Litjens, Thijs Kooi - 2017
- [Dermatologist-level classification of skin cancer with deep neural networks](https://www.nature.com/articles/nature21056.epdf?author_access_token=8oxIcYWf5UNrNpHsUHd2StRgN0jAjWel9jnR3ZoTv0NXpMHRAJy8Qn10ys2O4tuPakXos4UhQAFZ750CsBNMMsISFHIKinKDMKjShCpHIlYPYUHhNzkn6pSnOCt0Ftf6) by Andre Esteva1, Brett Kuprel1 - 2017
- [Alzheimer's disease diagnostics by adaptation of 3D convolution network](https://arxiv.org/pdf/1607.00455.pdf) by Ehsan Hosseini-Asl1, Robert Keynton2, Ayman El-Baz2
- [Pulmonary Nodule Detection in CT Images: False Positive Reduction Using Multi-View Convolutional Networks](http://ieeexplore.ieee.org/abstract/document/7422783/) by Setio et. al - 2016
- [Deep Learning in Multi-Task Medical Image Segmentation in Multiple Modalities](https://arxiv.org/abs/1704.03379)
- [Three-Dimensional CT Image Segmentation by Combining 2D Fully Convolutional Network with 3D Majority Voting](https://pdfs.semanticscholar.org/b434/c05142542255a112c387c48e6f60bb9e8c1c.pdf?_ga=2.65766829.2007236436.1520623311-1322847124.1520623311)
- [A Unified Framework for Automatic Wound Segmentation and Analysis with Deep Convolutional Neural Networks](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7318881&tag=1)
- [VoxResNet: Deep Voxelwise Residual Networks for
Volumetric Brain Segmentation](https://arxiv.org/pdf/1608.05895.pdf)
- [Location Sensitive Deep Convolutional Neural Networks for Segmentation of White
Matter Hyperintensities](https://arxiv.org/pdf/1610.04834.pdf)
- [Deep MRI brain extraction: A 3D convolutional neural network for skull stripping](https://www.sciencedirect.com/science/article/pii/S1053811916000306)
- [Multiscale CNNs for Brain Tumor Segmentation and Diagnosis](https://www.hindawi.com/journals/cmmm/2016/8356294/)
- [A New 2.5D Representation for Lymph Node Detection using Random Sets of Deep Convolutional Neural Network Observations](https://arxiv.org/pdf/1406.2639.pdf)