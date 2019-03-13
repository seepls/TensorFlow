TensorFlow
-deep learning library
-TensorFlow has better support for distributed systems
- provides primitives for defining functions on tensors and automatically computing their derivatives
 e.i create tensor function | automatically compute derivatives
- computations define a computation graph that has no numerical value until evaluated.
-TensorFlow computation graph 
- TensorFlow Variables : when you train your model you use variables to hold and update parameters. 
Variables are in-memory buffers containing tensors 
- Variable object can be initialized from consants or random variables

tensors 
- multilinear maps from vectorspaces to real numbers
- multidimentional array of numbers



we will see 
- sessions
- eval
- TensorShape
- sess.run([var1, var2])
- tf.InteractiveSession()
- tf.convert_to_tensor()
- tf.placeholder
- tf.variable_scope()
- tf.get_variable()
- tf.train.Optimizer
- tf.train.Optimizer.minimize(loss , var_list) // optimization operation to computation graph



BASIC STRUCTURE :
