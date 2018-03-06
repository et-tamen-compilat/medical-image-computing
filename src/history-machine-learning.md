# History of Machine Learning

## Early History of Machine Learning

The first case of neural networks was in 1943, when neurophysiologist Warren McCulloch and mathematician Walter Pitts wrote a paper about neurons, and how they work. They decided to create a model of this using an electrical circuit, and therefore the neural network was born.

In 1950, Alan Turing created the world-famous Turing Test. This test is fairly simple - for a computer to pass, it has to be able to convince a human that it is a human and not a computer.

1952 saw the first computer program which could learn as it run. it was a game which played checkers, created by Arthur Samuel.

Frank Rosenblatt designed the first artificial neural network in 1958, called Perceptron. The main goal of this was pattern and shape recognition.

Another extremely early instance of a neural network came in 1959, when Bernard Widrow and Marcian Hoff created two models of them at Stanford University. The first was called ADELINE, and it could detect binary patterns, for example in a stream of bits, it could predict what the next one would be. The next generation was called MADELINE, and it could eliminate echo on phone lines, so had a useful real world application. It is still in use today.

Despite the success of MADELINE, there was not much progress until the late 1970s for many reasons, mainly the popularity of the Von Neumann architecture.

## 1980s and 1990s

1982 was the year that interest in neural networks started to pick up again, when John Hopfield suggested creating a network which had bidirectional lines, similar to how neurons actually work. Also, a multi-layered network called a 'Hybrid Network' was created.

Furthermore, in 1982, Japan announced it was focusing on more advanced neural networks, which incentivised American funding into the area, and thus created more research in the area.

Neural networks use back propagation (explained in detail in the neural network pages), and this important step came in 1986, when three researchers from the Stanford psychology department decided to extend an algorithm created by Widrow and Hoff in 1962. This therefore allowed multiple layers to be used in a neural network, creating what are known as 'slow learners', which will learn over a long period of time.

The late 1980s and 1990s did not bring much to the field. However in 1997, the IBM computer Deep Blue, which was a chess-playing computer, beat the world chess champion. Since this, there have been many more advances in the field.

## 21st Century

Since the start of the 21st century, many businesses have realised that machine learning will increase calculation potential. This is why they are researching more heavily in it, in order to stay ahead of the competition.

Some large projects include:

- GoogleBrain (2012) - This was a deep neural network created by Jeff Dean of Google, which focused on pattern detection in images and videos. It was able to use Google's resources, which made it incomparable to much smaller neural networks. It was later used to detect objects in YouTube videos.
- AlexNet (2012) - AlexNet won the ImageNet competition by a large margin this year, which led to the use of GPUs and Convolutional Neural Networks in machine learning. They also created ReLU, which is an activation function which greatly improves efficiency of CNNs.
- DeepFace (2014) - This is a Deep Neural Network created by Facebook, which they claimed can recognise people with the same precision as a human can.
- DeepMind (2014) - This company was bought by Google, and can play basic video games to the same levels as humans. In 2016, it managed to beat a professional at the game Go, which is considered to be one the world's most difficult board games.
- OpenAI (2015) - This is a non-profit organisation created by Elon Musk and other, to create safe artificial intelligence that can benefit humanity.
- Amazon Machine Learning Platform (2015) - This is part of Amazon Web Services, and shows how most big companies want to get involved in machine learning. They say it drives many of their internal systems, from regularly used services such as search recommendations and Alexa, to more experimental ones like Prime Air and Amazon Go.
- ResNet (2015) - This was a major advancement in CNNs, and more information can be found on the 'Introduction to CNNs' page.
- U-net (2015) - This is an CNN architecture specialised in biomedical image segmentation. It introduced equal amount of upsampling and downsampling layers, and also skip connections. More information on this can be found on the Semantic Segmentation page.

## The Importance of GPUs

NVIDIA and Intel are behind two of the largest conferences on AI, and this is for a good reason - GPUs are extremely important in the world of machine learning. GPUs have around 200 times more processors per chip than CPUs, and even though CPUs are more powerful, a lot of this extra power is unused by machine learning applications. GPUs are more focused on data computations, which is what machine learning applications need, and because of this, they are smaller, and so that is why more can be fit on one chip.

### NVIDIA Tensor Cores - 2017

NVIDIA is used by Amazon to power their Amazon Web Service Machine Learning platform. This is because they are creating GPUs specifically for machine learning, for example the Tesla V100, announced in May 2017. This used Tensor Cores, which are used for matrix arithmetic in machine learning.

A tensor core can compute 64 fixed point operations per clock cycle, as it provides a 4x4x4 matrix processing array, and performs the operation shown in the image below. __A, B, C__ and __D__ are 4x4 matrices.

This means lots of operations can be processed in a single clock cycle, which is much more efficient than a CPU, and even more than an unoptimised GPU.

![](content-images/TensorMatrices.png)
Source: https://devblogs.nvidia.com/inside-volta/

### Google Tensor Processing Unit (TPU) - 2016

This powers a lot of Google's main services, including Search, Street View, Photos and Translate. It allows the neural network behind these to run faster, and so they can be run at a more affordable cost.

Similar to the Tensor cores, it optimises how the multiplications, additions and activation functions are applied to data in CNNs, making the process much faster.

### Intel and Facebook - Nervana Neural Processor - 2017

This was created because Intel had just been optimising their Intel Xeon Scalable Processors, but they realised that they needed to create a new hardware required by AI computations.

They realised that matrix multiplications and convolutions were the main computations done in machine learning, and so optimised their processor for these.

### Field Programmable Gate Arrays

Some people have argued that FPGAs 

## Sources

- [*__Stanford__*](https://cs.stanford.edu/people/eroberts/courses/soco/projects/neural-networks/History/history1.html)
- [*__Synergic Partners__*](http://www.synergicpartners.com/en/espanol-una-breve-historia-del-machine-learning/)
- [*__An Introduction to Neural Networks for Differential Equations__, ISBN: 978-94-017-9815-0*](http://www.springer.com/gb/book/9789401798150)
- [*__Amazon__*](https://aws.amazon.com/machine-learning/)
- [*__OpenAI__*](https://openai.com/)
- [*__Forbes__*](https://www.forbes.com/sites/forbestechcouncil/2017/12/01/for-machine-learning-its-all-about-gpus/#2317fc747699)
- [*__A Survey on Deep Learning in Medical Image Analysis__*](https://arxiv.org/pdf/1702.05747.pdf)
- [*__NVIDIA__*](https://devblogs.nvidia.com/inside-volta/)
- [*__Google TensorFlow__*](https://cloud.google.com/blog/big-data/2017/05/an-in-depth-look-at-googles-first-tensor-processing-unit-tpu)
- [*__Intel Nervana Neural Network__*](https://ai.intel.com/intel-nervana-neural-network-processors-nnp-redefine-ai-silicon/)
