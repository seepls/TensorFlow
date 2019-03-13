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

1. view functions as computational graphs 
2.  first build a computational graph , then use a session to execute operations in the graph 

 graphs !
- Nodes are operators (ops) , variables and constants 
 - edges are tensors
 - Tensorflow = tensor + flow = data + flow 
 
 
 constants : fixed value tensors : not trainable 
 variabels : tensors initialized in a session : trainable 
 placeholder : tensors of value that are unknown during graph construction , passed as input during a session
 Ops : functions as tensors
 
 
 y^ = Wx + b ;
 x : placeholder 
 W , b : variabels
 
 action between them : ops
 
 
 sessions :
  - sesssions is the runtime environment of a graph ,where operations are executed , and tensors are evaluated 
 - a.eval() ~ session.run(a)
 
 eval execution of single op and ops that return a value 
 upon op execution , only subgraph required for calculating its value is evaluated 
 
 
