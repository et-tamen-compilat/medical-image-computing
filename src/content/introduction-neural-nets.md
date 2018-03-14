---
title: "Introduction to Neural Networks"
cover: "titan.jpg"
description: "In this section, you'll learn about neural networks. Neural networks are the basis of the major advancements in AI that have been happening over the last decade. They let a computer learn to solve a problem for itself."
---

## Basics {#top}

A mathematical function is a mapping that assigns values in a set of inputs to a set of outputs. For instance, a mathematical function might have a set of inputs $\{1, 2, 3\}$, and a set of outputs, $\{4, 5, 6\}$, and the mapping might be $(1 \to 4), (2 \to 5), (3 \to 6)$. In the case of this function, there is a fairly straightforward rule to obtain the outputs from the inputs: add 3. 

Now, imagine a set of retinal scan images as input, encoded as a grid of pixels, and an output determining the presence or not of an eye tumour. As you can see, this mapping won’t be merely as straightforward as our previous mathematical function. However, if one could encode this function as a set of rules, i.e. a computer program, it would allow patients to be diagnosed much more easily and for cheaper. Of course, there are likely to be edge cases that make it very difficult for such a computer program to be right 100% of the time, but it may be possible to obtain a computer program that approximates this function within a reasonable bound of accuracy. Welcome to Artificial Intelligence!

The aim of machine learning is to obtain a highly accurate approximation of such a function. But rather than having a programmer attempt to write a program for this, the goal is to have a computer find a set of rules that approximates this function. In other words, rather than the programmer writing an approximation of the function, the programmer writes the program that finds the approximation of the function.

The set of rules is structured as a neural network. To do this, the program starts with a randomly constructed neural network, which may not, at first, approximate the function very well at all, before being trained to become more likely to give the expected output. In order to understand how this process can be applied to Medical Imaging, let us first grasp the design of a standard neural network.

There are two basic types of machine learning. Approximating functions that map to a small set of outputs, e.g. tumour present or no tumour present. This is called classification. The other type is approximating functions that can take a large range of values e.g. a number representing the size of something. This is called regression. Mathematically, the output of a classification problem is discrete, and the output of a regression problem is continuous. A special type of the classification problem is the binary classification problem, where there are only two possible outputs. In medical imaging, we are most interested in classification, but similar principles apply to regression. A regression problem can be thought of as finding the line of best fit, whereas a classification problem is trying to separate two different classes, with a decision boundary.

![](/content-images/class&reg.png)

$$
\def\mathellipsis{…}
$$

## Perceptrons

![A diagram demonstrating a perceptron](/content-images/perceptron3.png)

A perceptron is essentially a function $f$, defined by $n$ weights $w_0, w_1, \mathellipsis, w_n$. It takes inputs $x_1, \mathellipsis, x_n$. The output $f$ is as follows:

$$
f(x) = g(w_0 + \sum_{i = 1}^n x_iw_i) 
$$

So, $f$ first takes a weighted sum of its inputs based on $w_1, \mathellipsis, w_n$. Then, it adds the offset $w_0$ before passing the output to another function $g$. What's $g$? It is an activation function, but let us forget about these for the time being. 

It is convenient to think of there being an $x_0$ that is always equal to $1$. This allows us to say: 

$$
f(x) = g(\sum_{i = 0}^n x_iw_i) 
$$

![A diagram demonstrating a perceptron, where the bias is just another weight](/content-images/perceptronv2.png)

Note that this is just the dot product of two column vectors $x$ and $w$:

$$
f(x) = g(\mathbf{x} \cdot \mathbf{w}) 
$$

Alternatively you can think of it in terms of matrix multiplication:

$$
f(x) = g(\mathbf{x}^T\mathbf{w}) 
$$

Now let us go back to the activation function. Suppose, that it didn't exist, then you would get a linear function. Linear functions are nice, since they are easy to work with. A linear function can be defined just using a set of weights, $w_0, \mathellipsis, w_n$. But they are problematic, in that they cannot represent non-linear functions, and in machine learning you want to be able to learn non-linear functions. Throwing in a non-linear activation function allows us to do this. There are many types of activation functions to choose from. One common one is called logistic sigmoid, and is:

$$
\sigma(z) = \frac{1}{1 + e^{-z}} 
$$

It looks like this:

![A graph of the logistic sigmoid function](/content-images/sigmoid.png)

As the input to the logistic sigmoid gets tends towards positive infinity, its output gets closer and closer to 1, whereas as it gets tends towards negative infinity, its output gets closer and closer to 0. Perceptrons with the logistic sigmoid as the activation function are a good way of modelling classification problems. This is because the output is between 0 and 1. So, the output of the perceptron represents the probability of it being one class, and 1 minus the output represents the probability of it being another class. To represent a multiclass classification problem, multiple perceptrons are used, one for each class, each with the same inputs. The output of each perceptron represents the probability of being one class. Then the final output can be the class with the highest probability. In other words, the outputs of each perceptron represents the confidence the network has of it being that class. This works well especially if some classes are more specific versions of other classes e.g. there may be a car class and a vintage car class.

Each perceptron has its own weight vector. So if there are $m$ perceptrons, then let us the call the $m$ weight vectors, $w^1, \mathellipsis, w^m$. Supposing the input is the column vector consisting of $x_1, \mathellipsis, x_n$, and the weight matrix consists of the columns $w^1, \mathellipsis, w^n$, then the output vector of the combined perceptron network is:

$$
f(x) = g(\mathbf{x}^T\mathbf{w}) 
$$

To avoid the transpose, we can say the rows of $w$ are the weight vectors instead:

$$
f(x) = g(\mathbf{w}\mathbf{x}) 
$$

![A diagram demonstrating a neural network created by combining perceptrons with the same inputs](/content-images/perceptron2.png)

## Multilayer Perceptrons
Multilayer perceptrons are like what is above, but you have hidden layers of perceptrons. So the inputs are from the input layer, and are called input nodes. Then outputs form the output layer. If there is one hidden layer, then rather than the input layer feeding into the output layer, the input layer feeds into the hidden layer, which feeds into the output layer. 

If there are multiple hidden layers, then the first hidden layers feeds into the second one, etc, until the final hidden layer feeds into the output layer. If you have $l$ layers, then you have $l - 1$ transformations between layers. 

At each of these transformations, a weight matrix is applied, and then the activation function is applied. Different activation functions can be used, but in practice the same can be used for each layer.

Suppose the weight matrices are called $W_1, \mathellipsis, W_{l - 1}$, then:

$$
f(x) = g(W_{l - 1}\;g(W_{l - 2}\;\mathellipsis\;x))
$$

![A diagram of a standard neural network](/content-images/multiLayeredP.png)


<!--  Mention that neural network with more than  1 hidden layer → deep neural network?
+ Mention in more detail activation function and bias ?  -->

## Backpropagation: the key to optimised learning

As layers are added to perceptrons, finding the correct combination of weights to compute our function becomes much more complex. Therefore, in the same way that an essay generally involves writing several drafts and progressively correcting these, a neural network goes through a training process to optimise its output.

This process consists of feeding "training data", which is data annotated with the correct output to expect, into the neural network. The actual output is compared to the expected output for each piece of data, by passing it to the cost function. The function thus quantifies this comparison. The aim is to minimise the cost, in order to improve the accuracy of the network. There are different functions that can be used for the cost function of a neural network. Typically, the overall cost of the network is obtained by the mean squared error method, demonstrated below. The difference between each output neuron's actual and expected value is calculated and squared, before adding all of these up. Typically, halving this result is convenient for backpropagation, as it simplifies the derivative of the cost, used in later calculations.

![](https://media.giphy.com/media/f9QQ6MxYkdIlvocXyd/giphy.gif)

The aim is therefore to minimise the error of each output neuron. By modelling cost as a function, we can thus find its minimum by gradient descent, an optimisation algorithm illustrated below. Take an initial weight $w_0$ and a cost function $J$. The algorithm aims to find the local minimum of $J$ by iteratively taking steps proportional to the negative of the gradient of the function at the current point, where the initial point $w'$. Below, each of these steps is represented as an arrow. As we can see, this sequence will eventually converge to the desired local minimum.

![](/content-images/gradientDescent.png)

However, how can we adjust the error value of an output weight? In other words, which parameters do we need to vary in order to see such a change?
Recall that each output of a neuron $f$ is calculated in the following way:

$$
f = g(\sum_{i = 1}^{n-1}w_ia_i + w_0)
$$

Where:

- $x$ represents the activation of the previous layer
- $w_i$ are the weights of the previous layer connected to $w$
- $w_0$ is the bias applied
- $g$ represents the activation of the current layer 

For each output, adjusting the first three components listed, by increasing or decreasing these accordingly, will thus change its "voting" weight. However, these components rely on the previous layer, itself consisting of weights computed from the penultimate layer. The use of the word "backpropagation" thus becomes apparent: it relies on recursively applying this process to each previous layer, moving backwards through the network in doing so.

Such are the mechanics of back-propagation, and they will be repeated till the errors of all weights settle into their minimum, or as close as possible. However, the size of each step is not just determined by the gradient. Usually, it is the gradient multiplied by a variable called the learning rate. The larger the learning rate, the greater the steps. A large learning rate means backpropagation is faster. But it may also be the case that gradient descent goes too far past the local minimum. Too small a learning rate, and backpropagation may take an unnecessarily long time to reach the local minimum.

## Sources
- [The Backpropagation Algorithm](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf) -  R. Rojas: Neural Networks, Springer-Verlag, Berlin, 1996
- [What is backpropagation really doing?](https://www.youtube.com/watch?v=Ilg3gGewQ5U) - video by 3Blue1Brown
