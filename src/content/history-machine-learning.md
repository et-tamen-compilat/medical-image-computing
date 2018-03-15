---
cover: "history-machine-learning-bg.png"
title: "History Machine Learning"
description: "In this section, you'll learn about how machine learning has developed over the years, and about many important discoveries and inventions that have brought us to where we are today."
sources:
- name: "Stanford"
  url: "https://cs.stanford.edu/people/eroberts/courses/soco/projects/neural-networks/History/history1.html"
- name: "Synergic Partners"
  url: "http://www.synergicpartners.com/en/espanol-una-breve-historia-del-machine-learning"
- name: "An Introduction to Neural Networks for Differential Equations"
  url: "http://www.springer.com/gb/book/9789401798150"
  isbn: "978-94-017-9815-0"
- name: "Amazon"
  url: "https://aws.amazon.com/machine-learning/"
- name: "OpenAI"
  url: "https://openai.com/"
- name: "Forbes"
  url: "https://www.forbes.com/sites/forbestechcouncil/2017/12/01/for-machine-learning-its-all-about-gpus/#2317fc747699"
- name: "A Survey on Deep Learning in Medical Image Analysis"
  url: "https://arxiv.org/pdf/1702.05747.pdf"
- name: "Nvidia"
  url: "https://devblogs.nvidia.com/inside-volta/"
- name: "Google TensorFlow"
  url: "https://cloud.google.com/blog/big-data/2017/05/an-in-depth-look-at-googles-first-tensor-processing-unit-tpu"
- name: "Intel Nervana Neural Network"
  url: "https://ai.intel.com/intel-nervana-neural-network-processors-nnp-redefine-ai-silicon/"
- name: "Von Neumann Architecture"
  url: "https://www.computerscience.gcse.guru/theory/von-neumann-architecture"
- name: "Handwritten Digit Recognition with a Back-Propagation Network"
  url: "http://yann.lecun.com/exdb/publis/pdf/lecun-90c.pdf"
- name: "Google Cloud Platform"
  url: "https://cloud.google.com/gpu/"
- name: "Google Cloud Machine Learning Engine"
  url: "https://cloud.google.com/ml-engine/"
  imgs:
- name: "Nvidia"
  figure: 1
  url: "https://devblogs.nvidia.com/wp-content/uploads/2017/05/image4.png"
- name: "Globb Security"
  url: "http://globbsecurity.fr/wp-content/uploads/2018/01/IA.jpg"
---
## Early History of Machine Learning {#top}

The first case of neural networks was in 1943, when neurophysiologist Warren McCulloch and mathematician Walter Pitts wrote a paper about neurons, and how they work. They decided to create a model of this using an electrical circuit, and therefore the neural network was born.

In 1950, Alan Turing created the world-famous Turing Test. This test is fairly simple - for a computer to pass, it has to be able to convince a human that it is a human and not a computer.

1952 saw the first computer program which could learn as it ran. It was a game which played checkers, created by Arthur Samuel.

Frank Rosenblatt designed the first artificial neural network in 1958, called Perceptron. The main goal of this was pattern and shape recognition.

Another extremely early instance of a neural network came in 1959, when Bernard Widrow and Marcian Hoff created two models of them at Stanford University. The first was called ADELINE, and it could detect binary patterns. For example, in a stream of bits, it could predict what the next one would be. The next generation was called MADELINE, and it could eliminate echo on phone lines, so had a useful real world application. It is still in use today.

Despite the success of MADELINE, there was not much progress until the late 1970s for many reasons, mainly the popularity of the Von Neumann architecture. This is an architecture where instructions and data are stored in the same memory, which is arguably simpler to understand than a neural network, and so many people build programs based on this.

## 1980s and 1990s

1982 was the year that interest in neural networks started to pick up again, when John Hopfield suggested creating a network which had bidirectional lines, similar to how neurons actually work. Furthermore, in 1982, Japan announced it was focusing on more advanced neural networks, which incentivised American funding into the area, and thus created more research in the area.

Neural networks use back propagation (explained in detail in the Introduction to Neural Networks page), and this important step came in 1986, when three researchers from the Stanford psychology department decided to extend an algorithm created by Widrow and Hoff in 1962. This therefore allowed multiple layers to be used in a neural network, creating what are known as 'slow learners', which will learn over a long period of time.

The late 1980s and 1990s did not bring much to the field. However in 1997, the IBM computer Deep Blue, which was a chess-playing computer, beat the world chess champion. Since then, there have been many more advances in the field, such as in 1998, when research at AT&T Bell Laboratories on digit recognition resulted in good accuracy in detecting handwritten postcodes from the US Postal Service. This used back-propagation, which, as stated above, is explained in detail on the Introduction to Neural Networks page.

## 21st Century

Since the start of the 21st century, many businesses have realised that machine learning will increase calculation potential. This is why they are researching more heavily in it, in order to stay ahead of the competition.

Some large projects include:

- GoogleBrain (2012) - This was a deep neural network created by Jeff Dean of Google, which focused on pattern detection in images and videos. It was able to use Google's resources, which made it incomparable to much smaller neural networks. It was later used to detect objects in YouTube videos.
- AlexNet (2012) - AlexNet won the ImageNet competition by a large margin in 2012, which led to the use of GPUs and Convolutional Neural Networks in machine learning. They also created ReLU, which is an activation function that greatly improves efficiency of CNNs.
- DeepFace (2014) - This is a Deep Neural Network created by Facebook, which they claimed can recognise people with the same precision as a human can.
- DeepMind (2014) - This company was bought by Google, and can play basic video games to the same levels as humans. In 2016, it managed to beat a professional at the game Go, which is considered to be one the world's most difficult board games.
- OpenAI (2015) - This is a non-profit organisation created by Elon Musk and others, to create safe artificial intelligence that can benefit humanity.
- Amazon Machine Learning Platform (2015) - This is part of Amazon Web Services, and shows how most big companies want to get involved in machine learning. They say it drives many of their internal systems, from regularly used services such as search recommendations and Alexa, to more experimental ones like Prime Air and Amazon Go.
- ResNet (2015) - This was a major advancement in CNNs, and more information can be found on the 'Introduction to CNNs' page.
- U-net (2015) - This is an CNN architecture specialised in biomedical image segmentation. It introduced an equal amount of upsampling and downsampling layers, and also skip connections. More information on on what this means can be found on the Semantic Segmentation page.

## The Importance of GPUs
<!-- Removed Intel because they don't make 'real' GPUs. -->
Nvidia is behind one of the largest conferences on AI, and this is for a good reason - GPUs are extremely important in the world of machine learning. GPUs have around 200 times more processors per chip than CPUs.  The flip side of this, however, is that whereas CPUs can perform any kind of computation, GPUs are tailored to only specific use cases, where operations (addition, multiplicaiton, etc.) have to be performed on vectors, which are essentially lists of numbers. A CPU would perform each operation on each number in the vector syncronously, i.e. one by one. This is slow. A GPU would perform operations on each number in the vector in parallel i.e. at the same time. 

Vectors and matrices, which are grids of numbers (or lists of vectors) are essential to machine learning applicaions, and because of this, they are smaller, and so that is why more can be fit on one chip. Nvidia are credited with making the world's first GPU, the GeForce 256 in 1999. At that time, launching the product was a risk as it was an entirely new kind of product. However, due to the use of vector calculations in video games, GPUs proliferated, as video games benefitted from a huge leap in performance. It was years later, than mathematicians, scientists and engineers realised that GPUs could be used to improve the speed of computations used in their discipline, due to the use of vectors. This led to the realisation that GPUs would make neural networks, a very old idea, leaps and bounds more practical. This led to GPU companies particularly Nvidia benefitting hugely from the "machine learning revolution". Nvidia's stock price has increased roughly 18-fold since 2012, the year that the importance of GPUs in machine learning was demonstrated by AlexNet.

### Nvidia Tensor Cores - 2017

Nvidia is used by Amazon to power their Amazon Web Service Machine Learning platform. This is because they are creating GPUs specifically for machine learning, for example the Tesla V100, announced in May 2017. This used Tensor Cores, which are used for matrix arithmetic in machine learning.

A tensor core can compute 64 fixed point operations per clock cycle, as it provides a 4x4x4 matrix processing array, and performs the operation shown in the image below. __A, B, C__ and __D__ are 4x4 matrices.

This means lots of operations can be processed in a single clock cycle, which is much more efficient than a CPU, and even more than an unoptimised GPU.

![How tensor cores multiply matrices](content-images/TensorMatrices.png){#fig:1}

### Google Tensor Processing Unit (TPU) - 2016

TPUs power a lot of Google's main services, including Search, Street View, Photos and Translate. They allow the neural networks behind these services to run faster, and so are run at a more affordable cost.

Similar to the Tensor cores, it optimises how the multiplications, additions and activation functions are applied to data in CNNs, making the process much faster. Unlike tensor cores, which are part of general-purpose GPUs, TPUs are chips designed solely for accelerating computations required for neural networks. This makes them even more faster than general-purpose GPUs when performing machine learning tasks, as GPUs have to handle other use cases, and so are less specialised.

### Intel - Nervana Neural Processor - 2017

After GPUs allowed machine learning to rise to prominence, Intel, the world's biggest manufacturer of CPUs, was left out in the cold. The closest thing to GPUs Intel produced were integrated GPUs, i.e. GPUs which were built into the CPUs. However, these have nowhere near comparable performance, as they had to be very small, so they could be put in the CPU. Intel's share price hasn't increased anywhere near the rate that Nvidia's has in the last few years as a result. However, Intel has been working on a response, and they have realised the idea of a single CPU that can do all tasks needed in a computer is unrealistic, especially due to the imminent collapse of Moore's law, that stated the number of transistors in a CPU would double every 18-24 months, i.e. a CPU would double in speed every 2 years. Part of their response is a custom chip dedicated to accelerating computations performed in neural networks, called the Nervana Neural Processor. This is very similar to Google's TPU. Matrix multiplications and convolutions are the two core operations performed by the processor.

### GPUs in Cloud Computing

A recent trend is the renting of GPUs from big companies such as Google and Amazon, rather than buying them, as this can be a much cheaper alternative to purchasing lots of GPUs. It also allows many more GPUs to be used, as a high quantity can be rented, and therefore work can be done more efficiently. Google also introduced a specific Cloud Machine Learning Engine in 2017 using their TPUs mentioned above, and allows anyone to easily create a neural network without all of the required equipment. This will hopefully encourage more innovation in the field in the near future.