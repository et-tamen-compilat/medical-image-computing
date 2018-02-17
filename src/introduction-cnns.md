# Introduction to CNNs

Convolutional Neural Networks operate on pictures. Because pictures can be very big, it is inefficient to have every pixel as an input. In fact, you wouldn't just need every pixel, but each of the individual RGB values of each pixel to be an input. So you do a bit of preprocessing, through what is a called the convolutional layers which appear at the beginning of the neural network, to reduce it into a smaller input, before applying what we have seen before to the input.

Like above, where you apply a series of perceptron layers interspersed with activation functions, here you apply convolution layers interspersed with activation functions. Then you will pass the simplified image to a series of perceptron layers interspersed with activation functions.

Images are thought of being 3 dimensional, having a width, height and depth. At the beginning the depth is 3, for red, green and blue. At each convolution layer a series of filters/kernels are applied to the image. Each filter produces a 2 dimensional input, called a feature map, from the 3 dimensional input provided to it. These filters are stacked together to produce a 3 dimensional input, which is passed to the next convolutional layer.

At the end of the convolutional layers, the 3 dimensional output is squashed into a 1 dimensional output, which is passed to the perceptron layers. The 3 dimensional output will be much smaller than the original 3 dimensional image. 

Interspersed (once every so often) within the convolution-activation pairs, are downsampling or pooling layers. The convolutions don't actually down-scale the image. They intuitively make it so each pixel, is an average - well a weighted sum - of its neighbours. This makes it possible to perform down-scaling, through pooling.

You've seen the term weighted sum. Filters work by taking each $w \times h \times d$ block in the image, and applying it through a perceptron. $d$ is always the same as the depth of the image, but $w$ and $h$ should be much smaller than the width and the height. The filter applied at the $i$th,  $j$th position, produces the $i$th, $j$th pixel in the 2-dimensional feature map output. 

Note that applying these filters causes problems at the border, since the pixel at $(0, 0)$ won't have any neighbours to do the filter with. To solve this, the image can be padded with 0s.

The activation function commonly used after convolution layers is the ReLU function:

$$
ReLU(x) = \max(x, 0)
$$

Basically, replaces negative values with 0s. Downsampling layers, essentially go through the image block by block and take the maximum value.