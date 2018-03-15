---
cover: "thumbsUpBlue.png"
title: "Uses of AI in Radiology"
description: "In this section, you'll learn about the most common applications of artificial intelligence currently being researched in the field of medical imaging."
sources:
- name: "A Survey on Deep Learning in Medical Image Analysis"
  url: "https://arxiv.org/pdf/1702.05747.pdf"
- name: "Dermatologist-level classification of skin cancer with deep neural networks"
  url: "https://www.nature.com/articles/nature21056.epdf?author_access_token=8oxIcYWf5UNrNpHsUHd2StRgN0jAjWel9jnR3ZoTv0NXpMHRAJy8Qn10ys2O4tuPakXos4UhQAFZ750CsBNMMsISFHIKinKDMKjShCpHIlYPYUHhNzkn6pSnOCt0Ftf6"
- name: "Alzheimer's disease diagnostics by adaptation of 3D convolution network"
  url: "https://arxiv.org/pdf/1607.00455.pdf"
- name: "Marginal Space Deep Learning: Efficient Architecture for Detection in Volumetric Image Data"
  url: "http://comaniciu.net/Papers/MarginalSpaceDeepLearning_MICCAI15.pdf"
- name: "Deep Learning in Multi-Task Medical Image Segmentation in Multiple Modalities"
  url: "https://arxiv.org/abs/1704.03379"
- name: "Three-Dimensional CT Image Segmentation by Combining 2D Fully Convolutional Network with 3D Majority Voting"
  url: "https://pdfs.semanticscholar.org/b434/c05142542255a112c387c48e6f60bb9e8c1c.pdf?_ga=2.65766829.2007236436.1520623311-1322847124.1520623311"
- name: "A Unified Framework for Automatic Wound Segmentation and Analysis with Deep Convolutional Neural Networks"
  url: "http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7318881&tag=1"
- name: "VoxResNet: Deep Voxelwise Residual Networks for Volumetric Brain Segmentation"
  url: "https://arxiv.org/pdf/1608.05895.pdf"
- name: "Location Sensitive Deep Convolutional Neural Networks for Segmentation of White Matter Hyperintensities"
  url: "https://arxiv.org/pdf/1610.04834.pdf"
- name: "Deep MRI brain extraction: A 3D convolutional neural network for skull stripping"
  url: "https://www.sciencedirect.com/science/article/pii/S1053811916000306"
- name: "Multiscale CNNs for Brain Tumor Segmentation and Diagnosis"
  url: "https://www.hindawi.com/journals/cmmm/2016/8356294/"
- name: "A New 2.5D Representation for Lymph Node Detection using Random Sets of Deep Convolutional Neural Network Observations"
  url: "https://arxiv.org/pdf/1406.2639.pdf"
- name: "A CNN Regression Approach for Real-Time 2D/3D Registration"
  url: "http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7393571&tag=1"
- name: "Watson Health on the Cloud"
  url: "https://www.ibm.com/cloud/healthcare"
imgs:
- name: "A Survey on Deep Learning in Medical Image Analysis"
  url: "https://arxiv.org/abs/1702.05747"
  figure: 1
- name: "Nature"
  url: "https://cs.stanford.edu/people/esteva/nature/"
  figure: 2
- name: "Alzheimer's disease diagnostics by adaptation of 3D convolution network"
  url: "https://arxiv.org/pdf/1607.00455.pdf"
  figure: 3
- name: "Very Well Health"
  url: "https://www.verywell.com/understanding-the-purpose-of-lymph-nodes-2249122"
  figure: 4
- name: "Midtown Imaging"
  url: "https://www.midtownimagingnyc.com/medical-imaging-specialists/"
advanced: "Registration"
advanced_url: "registration"
---
## How is AI used in Radiology? {#top}

Various uses of artificial intelligence, and in particular convolutional neural networks, are being researched into. From organ segmentation to registration, some areas have already benefited from significant AI contributions, whilst others have only recently been explored. These could offer several benefits, namely limiting diagnostic errors caused by the eye-strain of radiologists, and complementing their work by providing data analysis too large for a human to process.

At the same time, offering a cheaper and accessible diagnosis, notably in parts of the world lacking radiologists, is another outcome that researchers aim towards. Below, the main uses are presented alongside example of their applications.

![Breakdown of the tasks addressed by research papers in this field up until 2017](/content-images/uses.png){ #fig:1 }

## Classification

### Exam classification:

This is one of the first areas in which machine learning was introduced. From an “exam”, i.e one or several images as input(s), this method outputs a single diagnostic variable. Generally, it indicates if a disease is present or not. The main constraint in introducing CNNs to perform this task is the lack of clinical data, and the extensive time from medical experts that is required for data annotations. Whilst a dataset typically contains millions of samples, medical imaging datasets only have hundreds of thousands of exams to use as samples. Several approaches exist to overcome this challenge.

On the one hand, transfer learning or inductive learning, by using a pre-trained network, is one possible strategy. This method consists in applying the knowledge gained whilst solving one problem to another related problem. In particular, fine-tuning a pre-trained network to work on medical data has been successful. For example, it has been applied to the classification of skin cancer. As explained in the corresponding 2017 paper, GoogleNet Inception v3’s CNN architecture, from the 2014 ImageNet facial recognition competition, was used. After being pre-trained on more than 1.2 million images, it was trained on around 130 000 dermatologist-labelled clinical images. 

The network was tasked to output whether a given exam presented a case of the most common skin cancers, or the deadliest type. It was tested against 21 board-certified dermatologists, and matched their performance. The long-term aim behind this paper would be to equip mobile devices with deep neural networks, and provide cheaper universal access to diagnostic care.

![Cover of Nature magazine](/content-images/skinCancer.png){ width=40% #fig:2 }

On the other hand, other recent papers have chosen to train their CNNs, by taking advantage of unique attributes of medical data to compensate the size of the datasets. For example, using 3D convolutions instead of the 2D convolutions presented in [Convolutional Neural Networks](/introduction-cnns.html) has been explored to classify patients as having Alzheimer’s. The network corresponds to an encoder-decoder architecture (see [Semantic Segmentation](/semantic-segmentation.html)) extended to 3D images. It is pre-trained to capture brain shape variations on MRI scans, before fine-tuning its upper fully convolutional layers for Alzheimer’s Disease classification as shown below. Testing the network on two different Alzeimer’s disease datasets showed that it had a higher accuracy than conventional classification networks.

![Diagram of 3D CNN used to detect Alzheimer's](/content-images/3Dcnn.png){ #fig:3 }

### Object or lesion classification:

Whereas exam classification focuses on the entire image, object classification focuses on classifying a small, previously identified part of a medical image into multiple classes. An example of such an object would be lung nodules in chest CT scans. Combining local information on the appearance of the lesion, with global context on its location, is required for accurate classification. This makes it even more complex than exam classification, as it introduces the need to incorporate contextual and 3-dimensional information. As a result, conventional deep learning architectures aren't efficient in this area, and variations or combinations with other architectures are being considered. For instance, a multi-stream CNN was used in 2016 to integrate 3D in the classification of pulmonary nodules. For more details, see [Detection of Lung Cancer](/lung-cancer.html).

## Detection

### Organ & region detection:

Localising organs or anatomical landmarks – ie. biologically-meaningful points in an organism  – in space or time is part of the pre-processing required for multiple imaging tasks. It is defined as organ or region detection, and useful for segmentation, covered further down, as well as clinical intervention and therapy planning. This task often involves parsing 3D volumes. Treating the 3D space as a composition of 2D planes, as was introduced in object classification above, is one approach commonly used in organ detection. In doing so, the localisation task is translated as a 2D image classification task that can be processed by generic deep learning networks.

More recent strategies rely on putting more emphasis on localisation accuracy during a network’s learning process. In other words, they aim to improve a neural network’s location predictions by modifying its training. The complexity associated with the 3D image space makes this approach particularly hard to apply, and thus to be explored further in the upcoming years. 

One of the few methods to have addressed this issue focused on deep learning in the identification of landmarks. The main strategy behing this method involved equipping the deep neural net with marginal space learning. In simple terms, this mechanism splits the estimation of an object’s position into three gradually increasing steps: its position only to start with, followed by a position-orientation estimation, and finally a position-orientation-scale estimation. In particular, this method was evaluated on the detection of the aortic valve in 3D ultrasounds. This learning strategy allowed the network to have a run-time performance improvement of 36% when compared to state-of-the-art methods. 

### Object or lesion detection:

The first object detection system using neural networks, was actually created in 1995 to detect nodules from X-ray images. It used a 4 layer CNN. Since then, machine learning has been explored in a number of ways to perform object detection. 

One example is detection of lymph nodes. This is as the size of swollen lymph nodes are signs of infection by a virus or a bacterium. Swollen lymph nodes can also be caused by cancer and is therefore important in cancer staging. This is the process of determining how far cancer has spread, which can be used to determine which treatment to give, and prognosis, a medical term for the chance of survival. Moreover, the number of swollen lymph nodes can be used to determine the progress of cancer treatments. 

Lymph nodes are part of the lymphatic system, an important part of the body's immune system. Automated lymph node detection by a computer system can be hard due to the variety of sizes and shapes lymph nodes can appear in. However, CNNs have shown to be extremely successful, compared to previous techniques. One paper to detect lymph nodes from CT scans first performed segmentation to generate lymph node candidates, called volumes of interest (VOI). Then, a patch-wise classification was done by taking 100 "random views" around each VOI and feeding each one into a 5-layer CNN. Each random view gave a probability of being a lymph nodes, and these probabilities were then averaged. 

![3D visualisation of lymph nodes in the body, coloured in red](/content-images/lymphNodes.jpg){ #fig:4 }

## Organ Segmentation

Organ segmentation is a vital part of many medical procedures, particularly surgery planning and diagnosis. One recent example of segmentation in radiology was a collaboration between the University Medical Centre Utrecht and Eindhoven University of Technology, to segment parts of brain MRIs, breast MRIs and cardiac CTA. CTA, or CT angiography, is a variation of CT scans that is used to visualise arterial and venous vessels in the body. Arterial vessels carry blood from the heart to parts of the body, whereas venous vessels carry blood from other parts of the body to the heart. CTA requires the patient to inject a contrast agent of some sort, usually iodine. 

The segmentation used CNNs. However, the interesting part of the collaboration was that rather than training different CNNs for the different parts of the body, investigated during the study, a single trained CNN was used for the three different segmentation task. So the CNN not only segments, but detects the type of image as well. In addition, only a very small amount of images were used. 34 MRI brain images, 34 MRI breast images and 10 cardiac CTA scans. The data was also 3D. 

To do segmentation, a variant of patch-wise segmentation was performed, where each voxel was classified along with a patch around it, in all 3 orthogonal planes. Convolutional layers produced 96 outputs, that were fed into 2 fully connected layers. The CNN mistaking what is was segmenting was very low: less than 0.0005% of pixels were classified into a class that was not related to the type of image being processed.

However, these 3 parts of the body are far from being the only parts of the body that CNNs can segment. Another paper demonstrated a CNN architecture, which was able to segment 19 different parts of the human body, including important organs, such as the lungs, the pancreas, the liver, etc. 

It took as input CT scans, from a dataset of 240 human-annotated images. With only 240 images, it was able to achieve 89% accuracy. Unlike the paper mentioned earlier, this didn't use patch-wise classification, and instead used a fully convolutional network, meaning that it benefited from knowing the entire context of the image before classifying a pixel. 

Another interesting aspect is that it didn't pass 3D data to the network, and instead passed 2D slices separately. This slices were of different orientations. The output from the network is a classification of each pixel for each slice. To get the final result for each pixel, different outputs for the pixel are therefore combined from different slices at different orientations. For each pixel, there were 3 different slices, for the 3 orthogonal planes.

## Lesion Segmentation

A lesion is a part of a tissue or organ that is injured, and a wound is a lesion of the skin, particularly if it has been cut open. Wounds are an area that is particularly open to improvements in machine learning, since the high number of cases means that thorough medical image analysis by humans is too time-consuming. But medical images of wounds are useful, as they allow for the detection of infection and for estimating the progress of healing. 

Another reason why it is ripe for improvement with deep learning is due to large datasets available, or at least large compared to what is usual for medical imaging. For instance, the NYU Wound database has 8000 images. In one paper, an encoder-decoder architecture was used to perform segmentation and the hidden layers of this network were passed to an SVM linear classifier, as another way of classifying data in machine learning, similar to a neural network. Meanwhile, the segmentation of the wound would allow surface area to be calculated. Two different images of wounds at two different points in time, would allow the change in surface area. This along with other data such as patient age and gender, would allow an estimate to be given of how long healing would take. 

## Others: Content-based image retrieval & combining image data with reports

In the "Others" section of the chart at the top of the page, the following two areas are included. Both relate to the analysis of  medical imaging data obtained with deep learning.

Content-based image retrieval (CBIR) provides data analysis & comparison in massive databases. It offers the possibility to identify similar case histories, and in doing so improves patient care as well as our understanding of rare diseases. 

The main challenge behind CBIR comes down to extracting pixel-level information and effectively associating it with meaningful concepts, that can be used to compare patient data. The current approaches all rely on the use of CNNs to extract "feature descriptors", acting as a numerical fingerprint in a way, to encode interesting information and differentiate one feature from another. 

Whilst there haven't been many successful applications of deep learning yet, this an area of interest for several actors in the industry, notably IBM with Watson Health. This initiative aims to structure medical patient and research data using machine learning. In particular, IBM introduced a Watson Platform for Health on the IBM Cloud, thus introducing a data platform specifically designed for health.

The combination of text reports with medical image data can follow one of two approaches. On the one hand, generating text reports from medical imaging is being looked into. On the other, using reports to improve image classification accuracy, for instance by adding semantic descriptions from reports as labels, is another mean of interaction between the two. A short demonstration of the latter, from the 2016 Radiological Society of North America (RSNA) annual meeting, can be found below. Eyes of Watson is a joint initiative between IBM and the RSNA to show how AI, exemplified by Watson, could assist radiologists. In this video, the study of a breast cancer case is presented. Initially, Watson infers relevant clinical concepts from the short report provided. Using deep learning to analyse the image, its inference is then updated accordingly. The most probable diagnosis is finally outputted as its answer and can be compared with a clinician's answers. 

<br>
<div class="container-video">
 <iframe src="https://www.youtube.com/embed/XLb0xUe80uo"></iframe>
</div>

::: { .advanced }

## Advanced: Registration

Image registration, or spatial alignment, consists in transforming different data sets into one coordinate system. In medical image analysis, this typically involves different types of scans. This task thus allows us to compare and integrate the data obtained from these varied measurements, in particular when it comes to 2D-3D registration for a more accurate diagnosis or image guidance. Whilst this topic isn't as popular as detection or segmentation for deep learning, its performance can benefit from the use of neural networks. Indeed, in existing methods, 2D-3D registration tends to be achieved via intensity-based registration: 2D X-ray images are derived from 3D X-rays by simulating the attenuation (or reduction of intensity) of virtual X-rays. This process, albeit highly accurate, suffers from long computation time and a small capture range. 

Thus, the use of AI could provide a better alternative. Estimating similarity measures for two images, notably mutual information, or directly predicting transformation parameters from one image to another, are amongst the strategies currently being considered. The second has been explored in a paper published in 2016, in which CNNs perform registration from 3D models to 2D X-rays to assess the location of an implant during surgery. The mapping from 3D to 2D data in this example is highly complex. The key aspect to remember is that the architecture incorporated a "regression layer" at the end, allowing the network to predict continuous data such as angles or distances instead of storing classification scores as we have previously seen.

:::
