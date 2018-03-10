# Introduction to Neural Networks

## Basics
A mathematical function is a mapping that assigns values in a set of inputs to a set of outputs. For instance, a mathematical function might have a set of inputs $\{1, 2, 3\}$, and a set of outputs, $\{4, 5, 6\}$, and the mapping might be $(1 \to 4), (2 \to 5), (3 \to 6)$. In the case of this function, there is a fairly straightforward rule to obtain the outputs from the inputs: add 3. 

Now, imagine a set of retinal scan images as input, encoded as a grid of pixels, and an output determining the presence or not of an eye tumour. As you can see, this mapping won’t be merely as straightforward as our previous mathematical function. However, if one could encode this function as a set of rules, i.e. a computer program, it would allow patients to be diagnosed much more easily and cheaply. Of course, there are likely to be edge cases, that make it very difficult for such a computer program to be right 100% of the time, but it may be possible to obtain a computer program that approximates this function within a reasonable bound of accuracy. Welcome to Artificial Intelligence!

The aim of machine learning is to obtain a highly accurate approximation of such a function. But rather than having a programmer attempt to write a program for this, the goal is to have a computer find a set of rules that approximates this function. In other words, rather than the programmer writing an approximation of the function, the programmer writes the program that finds the approximation of the function. 

The set of rules is structured as a neural network. To do this, the program starts with a randomly constructed neural network, which may not, at first, approximate the function very well at all, before being trained to become more likely to give the expected output. In order to understand how this process can be applied to Medical Imaging, let us first grasp the design of a standard neural network. 

$$
\def\mathellipsis{…}
$$

## Perceptrons

![](/content-images/perceptron.png)

A perceptron is essentially a function $f$, defined by $n$ weights $w_0, w_1, \mathellipsis, w_n$. It takes inputs $x_1, \mathellipsis, x_n$. The output $f$ is as follows:

$$
f(x) = g(w_0 + \sum_{i = 1}^n x_iw_i) 
$$

So, $f$ first takes a weighted sum of its inputs based on $w_1, \mathellipsis, w_n$. Then, it adds the offset $w_0$ before passing the output to another function $g$. What's $g$? It is an activation function, but let us forget about these for the time being. 

It is convenient to think of there being an $x_0$ that is always equal to $1$. This allows us to say: 

$$
f(x) = g(\sum_{i = 0}^n x_iw_i) 
$$

Note that this is just the dot product of two column vectors $x$ and $w$:

$$
f(x) = g(\mathbf{x} \cdot \mathbf{w}) 
$$

Alternatively you can think of it in terms of matrix multiplication:

$$
f(x) = g(\mathbf{x}^T\mathbf{w}) 
$$

Now let us go back to the activation function. Suppose, that it didn't exist, then you would get a linear function. Linear functions are nice, since they are easily to work with. A linear function can be defined just using a set of weights, $w_0, \mathellipsis, w_n$. But they are problematic, in that they cannot represent non-linear functions, and in machine learning you want to be able to learn non-linear functions. Throwing in a non-linear activation function allows us to do this. There are many types of activation functions to choose from. One common one is called logistic sigmoid, and is:

$$
\sigma(z) = \frac{1}{1 + e^{-z}} 
$$

It looks like this:

If there are $m$ perceptrons, then let us the call the $m$ weight vectors, $w^1, \mathellipsis, w^m$. Supposing the input, is the column vector consisting of $x_1, \mathellipsis, x_n$, and the weight matrix consists of the columns $w^1, \mathellipsis, w^n$, then the output vector of the combined perceptron network is:

$$
f(x) = g(\mathbf{x}^T\mathbf{w}) 
$$

To avoid the transpose, we can say the rows of $w$ are the weight vectors instead:

$$
f(x) = g(\mathbf{w}\mathbf{x}) 
$$

## Multilayer Perceptrons
Multilayer perceptrons are like what is above, but you have hidden layers of perceptrons. So the inputs are from the input layer, and are called input nodes. Then outputs form the output layer. If there is one hidden layer, then rather than the input layer feeding into the output layer, the input layer feeds into the hidden layer, which feeds into the output layer. 

If there are multiple hidden layers, then the first hidden layers feeds into the second one, etc, until the final hidden layer feeds into the output layer. If you have $l$ layers, then you have $l - 1$ transformations between layers. 

At each of these transformations, a weight matrix is applied, and then the activation function is applied. Different activation functions can be used, but in practice the same can be used for each layer.

Suppose the weight matrices are called $W_1, \mathellipsis, W_{l - 1}$, then:

$$
\text{output} = g(W_{l - 1}\;g(W_{l - 2}\;\mathellipsis\;x))
$$

![](/content-images/multiLayeredPerceptron.png)

This is not the nicest way of looking at it. I prefer thinking of it as a pipeline:


<!--  Mention that neural network with more than  1 hidden layer → deep neural network?
+ Mention in more detail activation function and bias ?  -->

## Backpropagation: the key to optimised learning

As layers are added to perceptrons, finding the correct combination of weights to compute our function becomes much more complex. Therefore, in the same way that an essay generally involves writing several drafts and progressively correcting these, a neural network goes through a training process to optimise its output.

This process consists in feeding "training data", data annotated with the correct output to expect, into the neural network, and then comparing our actual output to the expected output for each piece of data, by passing it to the cost function. The accuracy of the neural network is quantified by the cost function. There are different functions that can be used for the cost function of a neural network. Typically, the cost of the network is obtained by adding up the square of the difference between each output neuron's actual and expected value. The aim is therefore to minimise the error of each output neuron. 

By modelling cost as a function, we can thus find its minimum by gradient descent, an optimisation algorithm illustrated below. Take an initial weight $w_0$ and a cost function $J$. The algorithm aims to find the local minimum of $J$ by iteratively taking steps proportional to the negative of the gradient of the function at the current point, initially $w_0$. Below, each of these steps is represented as an arrow. As we can see, this sequence will eventually converge to the desired local minimum.

![](/content-images/gradientdescent.jpg)
<!--(Change image annotations)-->

However, how can we adjust the error value of an output weight? In other words, which parameters do we need to vary in order to see such a change? 
Recall that each weight $w$ is calculated in the following way:

$$
w= g(\sum_{i = 1}^{n-1}w_ia_i + b)
$$

Where:

- $x$ represents the activation of the previous layer
- $w_i$ are the weights of the previous layer connected to $w$
- $b$ is the bias applied
- $g$ represents the activation of the current layer 

For each output, adjusting the first three components listed, by increasing or decreasing these accordingly, will thus change its "voting" weight. However, these components rely on the previous layer, itself consisting of weights computed from the penultimate layer. The use of the word "backpropagation" thus becomes apparent: it relies on recursively applying this process to each previous layer, moving backwards through the network in doing so. 

By applying this procedure to each neuron over all the training data, the average changes to the error values will loosely correspond to a "step" in the gradient descent algorithm. Such are the mechanics of back-propagation, and they will be repeated till the errors of all weights settle into their minimum, or as close as possible. However, The size of each step, is not just determined by the gradient. Usually, it is the gradient multiplied by a variable called the learning rate. The larger the learning rate, the greater the steps. A large learning rate means backpropagation is faster. But it may also be the case, that gradient descent goes too far past the local minimum. Too small a learning rate, and backpropagation may take an unnecessarily long time to reach the local minimum.


