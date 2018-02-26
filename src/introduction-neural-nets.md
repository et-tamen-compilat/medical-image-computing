# Introduction to Neural Networks

## Basics
A mathematical function is a mapping, that assigns values in a set of inputs to a set of outputs. For instance, a mathematical function might have a set of inputs $\{1, 2, 3\}$, and a set of outputs, $\{4, 5, 6\}$, and the mapping might be $(1 \to 4), (2 \to 5), (3 \to 6)$. In the case, of the this function, there is a fairly straightforward rule to obtain the outputs from the inputs, add 3. However, imagine the set of inputs was a set of rectinal scan images, encoded as a grid of pixels, and the output was whether there was an eye tumour or not. It is not so straightforward, to see how one might go and transform a grid of pixels into whether there is an eye tumour. 

However, if somebody could encode this function as a set of rules, i.e. a computer program, it would allow people to be diagnoised much more easily and cheaply. Of course, there are likely to be edge cases, that make it very difficult for such a computer program to be right 100% of the time, but it may be possible to obtain a computer program that approximates this function within a reasonable bound of accuracy. The goal of machine learning is to obtain a highly accurate approximation of this function. But rather than having a programmer attempt to write a program for this themself, the goal is to have a computer find a set of rules, that approximates this function. So rather than the programmer writing an approximation of the function, the programmer writes the program that finds the approximation of the function. 

The set of rules, is structured as a neural network. To do this, the program starts with a randomly constructed neural network, that may not, at first, approximate the function very well at all. But then actual data is fed into the network, where each data has already been assigned the correct "expected" output. As each input is fed in, the actual output is compared with the expected output, and if the actual output is wrong, then the network is changed to make it more likely to give the expected output next time.   

$$
\def\mathellipsis{…}
$$

## Perceptrons

A perceptron is essentially a function $f$, defined by $n$ weights $w_0, w_1, \mathellipsis, w_n$. It takes inputs $x_1, \mathellipsis, x_n$. The output $f$ is as follows:

$$
f(x) = g(w_0 + \sum_{i = 1}^n x_iw_i) 
$$

So, $f$ first takes a weighted sum of its inputs based on $w_1, \mathellipsis, w_n$. Then adds the offset $w_0$. Then passes the output to another function $g$. What's $g$? It is an activation function. You have lots of different types of possible activation functions. Let us forget about activations functions for the time being. 

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

Now let us go back to the activation function. Suppose, that it didn't exist, then you would get a linear function. Linear functions are nice, since they are easily to work with. A linear function can be defined just using a set of weights, $w_0, \mathellipsis, w_n$. But they are problematic, in that they cannot represent non-linear functions, and in machine learning you want to be able to learn non-linear functions. So by throwing in a non-linear activation function, you can do this. There are lot's of activation functions to choose from. One common one is called logistic sigmoid, and is:

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
Multilayer perceptrons are like what is above, but you have hidden layers of perceptrons. So the inputs are form the input layer, and are called input nodes. Then outputs are called the output layer. If there is one hidden layer, then rather than the input layer feeding into the output layer, the input layer feeds into the hidden layer, which feeds into the output layer. 

If there are multiple hidden layers, then the first hidden layers feeds into the second one, etc, until the final hidden layer feeds into the output layer. If you have $l$ layers, then you have $l - 1$ transformations between layers. 

At each of these transformations, a weight matrix is applied, and then the activation function is applied. Different activation functions can be used, but in practice the same can be used for each layer.

Suppose the weight matrices are called $W_1, \mathellipsis, W_{l - 1}$, then:

$$
\text{output} = g(W_{l - 1}\;g(W_{l - 2}\;\mathellipsis\;x))
$$

This is not the nicest way of looking at it. I prefer thinking of it as a pipeline: