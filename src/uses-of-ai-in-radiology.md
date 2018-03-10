---
cover: "thumbsUpBlue.png"
title: "Uses of AI in Radiology"
---

##Classification

* Image / exam classification:

* Object or lesion classification:

##Detection

* Organ & region detection:

* Object or lesion detection:

## Organ Segmentation

Organ segmentation is a vital part of many medical procedures, particularly surgery planning and diagnosis. One recent example of segmentation in radiology was a collaboration between the University Medical Centre Utrecht and Eindhoven University of Technology, to segment parts of brain MRIs, breast MRIs and cardiac CTA. CTA, CT angiography, is a variation of CT scans that is used to visualise arterial and venous vessels in the body. Arterial vessels carry blood from the heart to parts of the body, whereas venous vessels carry blood from other parts of the body to the heart. CTA requires the patient ot inject a contrast agent, of some sort, usually iodine. The segmentation used CNNs. However, the interesting part of the collaboration was that rather than training different CNNs for the different parts of the body, investigated during the study, a single trained CNN was used for the three different segmentation task. So the CNN not only segments, but detects the type of image as well. In addition, only a very small amount of images were used. 34 MRI brain images, 34 MRI breast images and 10 cardiac CTA scans. The data was also 3D. To do segmentation, a variant of patch-wise segmentation was performed, where each voxel was classified along with a patch around it, all 3 orthogonal planes. Convolutional layers produced 96 outputs, that were fed into 2 fully connected layers. The CNN mistaking what is was segmenting was very low. Less than 0.0005% of pixels were classified into a class, that was not related to the type of image being processed.

However, these 3 parts of the body are far from being the only parts of the body that CNNs can segment. Another paper demonstrated a CNN architecture, which was able to segment 19 different parts of the human body, including important organs, such as the lungs, the pancreas, the liver, etc. It took as input CT scans, from a dataset of 240 human-annotated images. With only 240 images, it was able to achieve 89% accuracy. Unlike the paper mentioned earlier, this didn't use patch-wise classification, and instead used a fully convolutional network, meaning that it benefitted from knowing the entire context of the image before classifying a pixel. Another interesting thing about it didn't pass 3D data to the network, and instead passed 2D slices separately. This slices were of different orientations. The output from the network is a classification of each pixel for each slice, so to get the final result for each pixel different outputs for the pixel are combined from different slices at different orientations. For each pixel, there were 3 different slices, for the 3 orthogonal planes.

## Lesion Segmentation
A lesion is a part of a tissue or organ that is injured, and a wound is a lesion of the skin, particularly if it has been cut open. Wounds are an area that is particularly open to improvements in machine learning, since the high number of cases, means that thorough medical image analysis by humans is too time-consuming. But medical images of wounds are useful, as they allow for the detection of infection and for estimating the progress of healing. Another reason why it is ripe for improvement with deep learning is due to large datasets available, or at least large compared to what is usual for medical imaging. For instance, the NYU Wound database has 8000 images. In one paper, an encoder-decoder architecture was used to perform segmentation and the hidden layers of this network were passed to an SVM linear classifier, is another way of classifying data in machine learning, similar to a neural network. Meanwhile, the segmentation of the wound would allow surface area to be calculated. Two different images of wounds at two different points in time, would allow the change in surface area. This along with other data such as patient age and gender, would allow an estimate to be given of how long healing would take. 

##Registration

##Content-based image retrieval

##Combining image data with reports

## Sources
- [Deep Learning in Multi-Task Medical Image Segmentation in Multiple Modalities](https://arxiv.org/abs/1704.03379)
- [Three-Dimensional CT Image Segmentation by Combining 2D Fully Convolutional Network with 3D Majority Voting](https://pdfs.semanticscholar.org/b434/c05142542255a112c387c48e6f60bb9e8c1c.pdf?_ga=2.65766829.2007236436.1520623311-1322847124.1520623311)
- [A Unified Framework for Automatic Wound Segmentation and Analysis with Deep Convolutional Neural Networks](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7318881&tag=1)
- [VoxResNet: Deep Voxelwise Residual Networks for
Volumetric Brain Segmentation](https://arxiv.org/pdf/1608.05895.pdf)
- [Location Sensitive Deep Convolutional Neural Networks for Segmentation of White
Matter Hyperintensities](https://arxiv.org/pdf/1610.04834.pdf)
- [Deep MRI brain extraction: A 3D convolutional neural network for skull stripping](https://www.sciencedirect.com/science/article/pii/S1053811916000306)
- [Multiscale CNNs for Brain Tumor Segmentation and Diagnosis](https://www.hindawi.com/journals/cmmm/2016/8356294/)