# Uses of AI in Radiology

##Classification

* Image / exam classification:

* Object or lesion classification:

##Detection

* Organ & region detection:

* Object or lesion detection:

## Segmentation

One recent example of segmentation in radiology was a collaboration between the University Medical Centre Utrecht and Eindhoven University of Technology, to segment parts of brain MRIs, breast MRIs and cardiac CTA. CTA, CT angiography, is a variation of CT scans that is used to visualise arterial and venous vessels in the body. Arterial vessels carry blood from the heart to parts of the body, whereas venous vessels carry blood from other parts of the body to the heart. CTA requires the patient ot inject a contrast agent, of some sort, usually iodine. The segmentation used CNNs. However, the interesting part of the collaboration was that rather than training different CNNs for the different parts of the body, investigated during the study, a single trained CNN was used for the three different segmentation task. So the CNN not only segments, but detects the type of image as well. In addition, only a very small amount of images were used. 34 MRI brain images, 34 MRI breast images and 10 cardiac CTA scans. The data was also 3D. To do segmentation, a variant of patch-wise segmentation was performed, where each voxel was classified along with a patch around it, all 3 orthogonal planes. Convolutional layers produced 96 outputs, that were fed into 2 fully connected layers. The CNN mistaking what is was segmenting was very low. Less than 0.0005% of pixels were classified into a class, that was not related to the type of image being processed.

* Organ and substructure segmentation

##Registration

##Content-based image retrieval

##Combining image data with reports

## Sources
- [https://arxiv.org/abs/1704.03379](Deep Learning in Multi-Task Medical Image Segmentation in Multiple Modalities)