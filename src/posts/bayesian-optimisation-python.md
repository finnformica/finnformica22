---
title: "Bayesian Optimisation with Python"
date: "December 17, 2022"
excerpt: "Optimising expensive-to-calculate black box functions with Bayesian Optimisation helps to speed up the process."
cover_image: "/images/posts/bayes-opt-img.png"
---

When looking to optimise parameters a common first approach is using a method called Grid Search. This is an exhaustive technique that discretises the search space and runs the model with the discretised values. The best performing model is then selected with the optimal parameters. However, as the number of parameters to tune increases the time taken to tune the model increases with the exponent of the number of number of parameters to tune - not particularly efficient. This problem is known as the Curse of Dimensionality and it plagues the field of Machine Learning. Here I present a different approach I have been using that utilises Bayesian mathematics over the Frequentist approach.

<br/>

## Background

Stripped down to the core, Bayes theorem and Bayesian mathematics is about updating the beliefs or hypothesis when new evidence becomes available. When testing a model with parameters, the expected value for the performance of the model is updated depending on how those parameters perform. This updated expected value can then inform the next set of parameters to test the model with, converging toward an optimal set of parameters that produces the most accurate model in a much shorter time than Grid Search. This is how Bayesian Optimisation works at its most fundamental level.

<br/>

Bayesian Optimisation can be used with any function, however, it works best with 'black-box functions', i.e. functions with no closed form that would produce a finite amount of data. It also works well with functions that are expensive to run - either computationally or with time. In my case, I am trying to optimise two parameters for an automated trading agent within a simulated limit-order book exchange. The simulation takes a very long time to run, and so running a Grid Search on the parameters would take potentially weeks of computation. Bayesian Optimisation has been a useful method for me to reduce this time down to roughly half a day of processing on my laptop.

# Implementing Bayesian Optimisation

Although the concept is simple in principle, implementing the algorithm requires a lot of complex statistics. Luckily, there are several great Python packages out there that provide ways of utilising Bayesian Optimisation for the average individual. The package I have leaned toward the most has been `bayes_opt` due to its consistent use within the scientific community alongside comprehensive documentation and example Jupyter notebooks.

<br/>

The black box function is a wrapper for the expensive calculation that is required. The input to the black box function is the parameter(s) to be optimised, and the return value is what the algorithm will try to maximise - i.e. the accuracy of an ML model, or in my case the profit per second of the trading agent.

```python
from bayes_opt import BayesianOptimization

# x is the parameter to optimise
def black_box_func(x):
    # expensive calculation
    result = 2 * x + b

    return result
```

The bounds of the space are then defined and the optimiser object is instantiated. A key point to note is that Bayesian Optimisation assumes the data has a Gaussian distribution, and hence, it evaluates the bounds in a continuous space. If integers are required within the parameters they have to be forced into that type within the black box function.

```python
# define optimisation space
pbounds = {'x': (0, 20)}

# initialise bayesian optimiser
optimiser = BayesianOptimization(black_box_func, pbounds,
                                 verbose=2, random_state=100)

# run optimisation
optimiser.maximize(init_points = 5, n_iter = 25)

print("Best result: {}; f(x) = {}.".format(optimiser.max["params"], optimiser.max["target"]))
```

`init_points` determines the number of random trials completed, while `n_iter` is the number of trials using the Bayesian Optimisation algorithm. The ratio of these two is important to prevent the algorithm from converging on a local maximum. After this has run, a graph can then be plotted to observe the behaviour of the algorithm during the optimisation process.

```python
import matplotlib.pyplot as plt

# plot target value against no. iterations
plt.figure(figsize = (15, 5))
plt.plot(range(1, 1 + len(optimiser.space.target)), optimiser.space.target, "-o")
plt.grid(True)
plt.xlabel("Iteration", fontsize = 14)
plt.ylabel("Black box function f(x)", fontsize = 14)
plt.xticks(fontsize = 14)
plt.yticks(fontsize = 14)
plt.show()
```

As seen below my target value did not converge at all during the optimisation process. This was likely due to the innate stochastic variance within my black box function, however, this did not mean that the simulation was a waste. Furthermore, sequential domain reduction could be utilised to help the algorithm converge by reducing the size of the bounds.

<div style="text-align: center;">
<img class="blog-img" src="/images/posts/bayesian-optimisation-target.png"/>
</div>

Below is another graph showing the target value against the two parameters I was trying to optimise. It is clear from this that lower values of k and higher values of F were optimal, which is good basis for me to run some statistical tests to check whether this result is significant or not.

<div style="text-align: center;">
<img class="blog-img" src="/images/posts/pps-against-params.png"/>
</div>

<br/>

## Sequential Domain Reduction

Sequential domain reduction is a process where the bounds of the optimisation problem are mutated (either contracted or panned or both) to reduce the time required to converge to an optimal value. This method helps to provide convergence if the optimisation oscillates heavily.

```python
from bayes_opt import SequentialDomainReductionTransformer

# define the domain reduction transformer
bounds_transformer = SequentialDomainReductionTransformer(
    minimum_window=0.5,
    gamma_pan=0
)

# intialise optimiser with domain reduction transformer
mutating_optimiser = BayesianOptimization(
    black_box_func, pbounds, verbose=2, random_state=100,
    bounds_transformer=bounds_transformer
)
```
