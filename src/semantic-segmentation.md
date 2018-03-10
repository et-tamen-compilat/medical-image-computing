# Semantic Segmentation

Semantic segmentation consists of separating an image into different regions. It is particularly relevant to Medical Imaging, in which localization is key to the analysis of scans. In effect, segmentation classifies each pixel to the part of the image it belongs to. While the CNNs we've seen so far only need to produce an output for what an image could be, semantic segmentation requires the networks to produce an output for each pixel. This task can be solved through variations of CNNs, some of which specialise in radiology purposes, as we will see. 

## FCNs
Fully Convolutional Networks represent the underlying model of recent attempts to solve semantic segmentation using CNNs. These architectures omit the use of fully connected layers. As well as being faster, this approach generates segmentation maps from images of any size, (as opposed to the fixed-size constraint of fully connected layers). Essentially, the last fully connected layer is replaced by a convolution layer, of dimensions 1x1 in order to capture the global context of the image. Then, the last step consists in “upsampling” from low-resolution to high-resolution. This is done by upsampling layers. In FCNs, upsampling is down by something called transposed convolutions (or deconvolutions). If a convolution goes from $5 \times 5$ to $2 \times 2$, then the corresponding transposed convolutions goes from $2 \times 2$ to $5 \times 5$. To allow this to happen padding is added. The amount of padding of transposed convolution depends on the dimensions needed. For instance, suppose the kernel of the original from a $5 \times 5$ to $3 \times 3$, was a $3 \times 3$ with stride 1. Then, side padding of size 2 needs to be added around the output.

![](/content-images/SegmentationDiagram1.png)

However, this upsampling method is not sufficient to compensate the loss of information during the downsampling of pooling layers. Moreover, the success of such a network relies on a large amount of training data, up to this day not available in Medical Imaging. Thus, two types of architectures have been explored since the introduction of FCNs in 2014 to address these issues.

## U-Net & encoder-decoder architecture

The first approach can be exemplified by U-Net, a CNN specialised in Biomedical Image Segmentation. This architecture begins the same as a typical CNN, with convolution-activation pairs and max-pooling layers to reduce the image size, while increasing depth. However, after having reduced the image to a small size, there are a series of up-convolutions, which are almost an inverse of the max-pooling layers, as well as convolution-activation pairs. These gradually increase the image size, till eventually a full-sized image, representing the segmentation map of the original image, is recovered. The series of layers reducing the image size is called the encoder, and the series of layers recovering the image size is called the decoder. U-Net is, therefore, called an encoder-decoder architecture. 

![](/content-images/UNetImage.png)

So, what precisely is an up-convolution? The U-Net architecture used 2x2 up-convolutions which went through each pixel in the input image, and uses the entire depth of that pixel to produce 4 output pixels, of depth 1. So each input pixel was converted to 4 output pixels. Multiple up-convolution can be stack to create an output image of higher depth. In U-Net they used half the depth of the previous layer as the number of up-convolutions. So, after each up-convolution the depth of the image was half, but the resolution was 4 times greater.

This architecture thus differs from regular FCNs on several levels. Firstly, its many shortcut connections between layers in the encoder to layers in the decoder. These assist the decoder in recovering image details alongside upconvolutions. Furthermore, U-Net compensates the lack of available training data by data augmentation. This process increases the amount of training data using information contained in the existing training data (by applying elastic deformation).  /// & other issue: when objects of same class are touching? ///

The U-Net architecture was proposed by 3 computer scientists at the University of Freiburg, who used it to win the ISBI cell tracking challenge in 2015. Another success of the U-Net architecture was in 2016, when it was used to segment MRI scans of prostates. The architecture called V-Net was trained on data from the Promise20 dataset. The architecture was designed to work on 3-dimensional data, which is actually 4-dimensional if you consider the feature channels. These 3D scans are called volumetric images. V-Net combined a U-Net architecture, but the layers were in blocks, that were designed to learn the residual functions, with ResNet-like shortcut connections between the input and output of these blocks. One problem with segmenting 3D images, is that the training data to the neural network has to be segmented manually by a human, and it is typically much harder for a human to segment a 3D image, than a 2D image. One approach suggested by researchers in 2016, was to only 2D slices of these 3D volumetric images. These were called sparse annotatons, and elastic deformations were applied to allow the network to be trained. This architecture, based on U-Nets, was trained on *Xenopus* kidneys.

## Dilated convolutions
However, an encoder-decoder architecture is not the only solution to semantic segmentation. An encoder-decoder architecture reduces dimension to get a "global view" of the image, before increasing dimension to get back local context – thus increasing the amount of parameters (or weights) in the network. One wonders whether it is possible for each pixel in the image to get the global context of the image, without reducing the size of the image. This is what was proposed at ICLR (International Conference on Learning Representations) 2016, with dilated convolutions.

![](content-images/DilatedImage.png)
<!--Add this image description:
Layer 1: output F1
Layer 2: output F2
Layer 3: output F3
-->

As illustrated in the diagram above, dilated convolution increases the global (or receptive) field, in other words the implicit area captured by each of the initial input, without losing resolution or coverage. Indeed, the red dots correspond to the inputs, and the blue area to the receptive field of each of these. 

Let F0 be the input image, here with dimensions 3x3. 

- The 1st layer applies a dilation rate k=1, corresponding to a normal convolution, to F0. Each element, or dot, in F1 therefore has a receptive field of 3x3.
- The 2nd layer applies a dilation rate k=2 to F1, ie. “skips” 1 pixel per input. Each element in F2 has a receptive field of 7x7.
- The 3rd layer applies a dilation rate k=4 to F2, skipping 3 pixels per input and resulting in a receptive field of 15x15 pixels for each unit.

The global view thus expands exponentially, whilst the number of parameters grows linearly. In doing so, dilated convolution manages to achieve a large receptive field without up-sampling, and with a limited amount of weights & convolutional layers. This method therefore proves to be effective for semantic segmentation. In particular, it has been compared to FCNs in segmentation for medical image analysis in a paper published in March 2017. Below, we can see the segmentation results obtained.

![Comparison of segmentation results  on the head of the VHK (Visible Human Korean) dataset](content-images/brainSegmentation.png)

This figure shows that FCNs based on dilated convolution could obtain smoother and more accurate segmentation results than the standard FCNs. This is confirmed by the quantitative testing that was taken out: when training the 2 networks on 80% of the VHK and testing it on the other 20%, the performance of the dilated convolution network increased on average by a significant 19.6%. Thus, this study suggests the potential of this method in semantic segmentation, and we can expect more studies to be conducted on medical imaging scans in the upcoming years. 


## Sources
- [V-Net: Fully Convolutional Neural Networks for Volumetric Medical Image Segmentation](https://arxiv.org/pdf/1606.04797.pdf) - Fausto Milletari, Nassir Navab, Seyed-Ahmad Ahmadi
- [3D U-Net: Learning Dense Volumetric Segmentation from Sparse Annotation](https://arxiv.org/pdf/1606.06650.pdf)
- [Fully Convolutional Networks for Semantic Segmentation](https://people.eecs.berkeley.edu/~jonlong/long_shelhamer_fcn.pdf)
- [U-Net: Convolutional Networks for Biomedical Image Segmentation](https://arxiv.org/pdf/1505.04597.pdf)
- [Comparison of the Deep-Learning-Based Automated Segmentation Methods for the Head Sectioned Images of the Virtual Korean Human Project](https://arxiv.org/pdf/1703.04967.pdf)   