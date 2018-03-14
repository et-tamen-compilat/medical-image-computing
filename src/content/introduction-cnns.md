---
title: "Convolutional Neural Networks"
cover: "neural-network.jpg"
description: "In this section, you'll learn about a specific branch of machine learning which is applied to image analysis: Convolutional Neural Networks."
sources:
- name: "ImageNet Classification with Deep Convolutional Neural Networks"
  url: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf"
- name: "Going Deeper with Convolutions"
  url: "https://arxiv.org/pdf/1409.4842.pdf"
- name: "Deep Residual Learning for Image Recognition"
  url: "https://arxiv.org/pdf/1512.03385.pdf"
- name: "Stanford CS231n"
  url: "http://cs231n.stanford.edu/"
---

## What are CNNs? {#top}

As in any other neural network, the input of a CNN, in this case an image, is passed through a series of filters in order to obtain a labelled output that can then be classified. The specificity of a CNN lies in its filtering layers, which include at least one convolution layer. These allow it to process more complex pictures than a regular neural network. Whereas the latter is well adapted for simple, well-centred images such as hand-written digits, the use of CNNs in image analysis ranges from Facebook’s automatic tagging algorithms, to object classification and detection, in particular in the field of radiology.

<br>

![](/content-images/CNNdiagram2.png)
<!-- image source: https://uk.mathworks.com/discovery/convolutional-neural-network.html -->

<br>

## Convolution layers
Since pictures can be very big, it is inefficient to have every pixel as an input. In fact, you wouldn't just need every pixel, but each of the individual RGB values of each pixel to be an input. Pre-processing is therefore required, through a series of layers which appear at the beginning of the neural network to reduce it into a smaller input, before applying a traditional neural network to an image.

The most important of these layers are the convolutional layers. These convolutional layers are, as the name suggests, made out of a basic building block called a convolution. A convolution is applied to small regions of an image, sampling the values of pixels in this region, and converting it into a single pixel. It is applied to each region of pixels in the image, to produce a new image. The idea is that pixels in the new image incorporate information about the surrounding pixels, thus reflecting how well a feature is represented in that area.

Convolutions have two important attributes, size and stride.  The convolution below is applied to the image is of size 3x3 and stride 1. It is of size 3x3 because it operates on 3x3 grids of pixels. It has stride 1, since the gap between regions that the convolution is applied to is 1. In other words, the convolution advances by 1 each item.

The size and stride of the convolution determines the size of the output image. For instance, 3x3 convolution with stride 1, converts a 5x5 image to a 3x3 image. The question that is raised is how do convolutions convert a grid of pixels to a single pixel. They essentially pass the grid of pixels through a perceptron, in other words take a weighted sum of the input pixels. The weights applied to the pixels, are shown below to the bottom-right of the pixels. In the convolution below, there is no bias (or offset), but as with perceptrons, convolutions typically also have a bias.

![](/content-images/StanfordImage.gif){ width=40% }

The convolution above is applied to a monochrome image, but in reality, images will have depth. I.e. they are 3 dimensional, where the first 2 dimensions are width and height, and the third is depth. Initially, depth refers to the different colour components of the image: red, green and blue. So most images will begin with a depth of 3. In addition, pixels values will not be binary, but usually between 0 and 255. Typically, it is assumed that a convolution is applied to the entire depth of the image. So a 3x3 convolution applied to an image of depth 3, will actually take an input consisting of 3x3x3 pixels. 

The output of a convolution applied to a single input will still be a single pixel, and the output of the convolution applied to an entire 3-dimensional image will be a 2-dimensional image. You might think, this means that the image loses its depth, but this is not the case. In fact, as an image goes through convolutional layers, it typically increases in depth. This is as each convolutional layer, applies not one but multiple convolutions to a single image. This produces multiple 2-dimensional outputs for each convolution, which are stacked together to produce a new 3-dimensional image. Thus, the depth of the output of a convolutional layer is the number of convolutions applied. Note that convolutions are sometimes referred to by different terms such as kernels and filters. 

![](/content-images/StanfordImage4.png)

## Normalisation

The individual 2-dimensional outputs from the kernels are called feature maps or activation maps. After each convolutional layer is applied, an activation function is applied to the 3-dimensional output. Typically, the activation function that is applied is called ReLU, or Rectified Linear Unit Layer. Nowadays, it is a widely used function that aims to imitate biological neurons’ ability to be activated or not. ReLU in effect gets rid of negative values, by setting any negative pixel values to 0. It is defined as follows:


$$
ReLU(x) = \max(x, 0)
$$

## Pooling layers
In addition, there is another kind of layer called a max pooling or down-sampling layer. These are interspersed every so often between the convolution-activation pairs. They do not necessarily have to occur after every convolution-activation pairs. The convolutional layers aren't supposed to reduce the size of the image significantly. Instead, they make sure that each pixel reflects its neighbours. This makes it possible to perform downscaling, through pooling, without losing important information. 

A widespread method to do so consists in max pooling, in other words using the maximum value from a cluster of neurons at a previous layer. Indeed, max-pooling layers have a size and a width. Unlike convolution layers they are applied to the 2-dimensional depth slices of the image, so the resulting image is of the same depth, just of a smaller width and height. The max-pooling layer shown below has size 2x2, so it takes a 2-dimensional input region of size 2x2, and outputs the input with the largest value it received. It also has stride 2, i.e. it advances by 2 each time.

<br>
![](/content-images/StanfordImage2.png){ width=50% }
<br>

## Deep stacking towards a fully connected layer

The different types of layers described are combined through a repeated stacking process illustrated below, known as deep stacking. Convolutional layers followed by activation functions, as well as interspersed down-sampling layers, essentially replace width and height with depth until the image is relatively small. 

![](/content-images/deepStacking.png)

Once this happens, it can be passed through the last step of the design: a fully connected layer, i.e. the traditional kinds of neural network layers we have seen before. 

## Padding
One problem with convolutional layers is that they don't preserve image dimensions. If you have a $7 \times 7$ input patch, and a $2 \times 2$ convolution with stride 1, then the output will be $6 \times 6$. Generally speaking, if you have a $i \times i$ input and a $k \times k$ kernel with stride 1, then the output will be $i - k + 1$. So, to preserve the dimensions you can add padding around the image, consisting of pixels with 0s. For this to work, the size of the kernel will have to be odd, so $k - 1$ is even, so padding of size $(k - 1) / 2$ can be added on each side. Generally, speaking padding is only added when stride is 1.

## CNNs, since when?
The first major success of convolutional neural networks was AlexNet, developed by Alex Krizhevsky, in 2012 at the University of Toronto. It aimed to solve the ImageNet challenge, an image classification problem with over 1.2 million images to classify into 1000 different categories. AlexNet won this competition, with an error rate of 15.3%, compared to 26.2% for the next best entry. This was done using a convolutional neural net architecture, using the same techniques described here. The network consisted of 5 convolutional layers, each followed by a ReLU activation layer, as well as 3 fully-connected layers. Three of the five convolution-activation pairs were followed by max-pooling layers. From this breakthrough, many new uses have arisen for CNNs, many of which go beyond image classification and rely on segmentation.    

<div class="advanced">
## Advanced: ResNet
Since AlexNet, the same basic ideas are used, but several key improvements have been made. This current state of the art came about from ResNet, a CNN architecture from Microsoft Research, that came out in 2015, and won the ImageNet 2015 competition. The problem motivating ResNet was that addinge extra layers to a CNN did not necessarily improve performance. In fact, there was actually a higher level of error on the training data, when adding extra layers in some cases. This seems conterintuitive. 

Suppose you have a networks with $n$ and $n + k$. You would think that the network with $n + k$ layers would be at least as good as the layer with $n$ layers, since the $k$ additional layers could just learn an identity mapping, and so function identically to the network with only $n$ layers, even if there was no way to do better. The problem is that the network has difficulty learning the identity mapping. 

The problem is called the degradation problem. The solution is to add shortcut connections. These shortcut connections take the output of one layer, skip over some successive layers, and then combine the unchanged output with the changed output, producing an image of a greater depth. This might seem strange, but what is really happening is that rather than putting the output through some function $h(x)$, you are putting the output through $h(x) + x$. Why? Well, the thinking is that later layers will probably only need to make relative small adjustments to the input layer. So, it is easier to train the network to learn these small adjustments and then add these adjustments on, then to learn a very slight variation on the identity mapping. 

Observe, that in the worst case, when there is no benefit of the extra layers, similar performance can be gained by making $h(x) = 0$. This is the key insight, learning the zero function is easier than learning the identity function. ResNet was used on the ImageNet dataset in 2015 with 152 layers, much more than AlexNet used in 2012. The difference between the identity mapping and the actual mapping wanted is called the residual mapping, i.e. if $f(x) = h(x) + x$, then the residual mapping that is learnt is $f(x) - x$. This gives rise to the name ResNet.

<!-- Note to Hashan, set white to transparent -->
![A diagram demonstrating ResNet](/content-images/resnet.jpeg)
</div>
<!--
::: {.summary}
## Summary
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel rutrum felis. Ut pellentesque vel lorem vitae euismod. Cras consectetur, leo ut dapibus tincidunt, justo ante accumsan neque, sit amet hendrerit ante urna eu ex. Phasellus augue lorem, venenatis sit amet lorem viverra, dapibus venenatis dolor. Sed vel vehicula lacus. Curabitur eget risus id enim convallis tempus. Ut vulputate turpis sem, a elementum lorem ultrices nec. Aliquam eros metus, bibendum eget accumsan id, consectetur vitae orci. Nunc justo ipsum, sagittis in dignissim sed, egestas ut lacus. Nullam mollis eu libero at ultrices.
<<<<<<< HEAD
:::
=======
:::
-->
