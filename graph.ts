import tensorflow as tf

graph = tf.Graph()
with graph.as default():

train_inputs = tf.placeholder(tf.int32, shape=[batch_size])

train_labels= tf.placeholder(tf.int32, shape=[batch_size , 1])

embeddings = tf.Variable(tf.random_uniform([vocabulary_size,embedding_size],-1.0,1.0))

embed = tf. nn.embedding_lookup(embeddings, train_inputs)

nce_weights = tf.Variable(tf.truncated_normal([vocabulary_size,embedding_size],
                          stddev = 1.0/ math.sqrt(embedding_size)))
                          
nce_biases = tf.Variable(tf.zeros([vocabulary_size]))

loss = tf.reduce_mean(
tf.nn.nce_loss(weights=nce_weights, biases=nce_biases, 
                  labels=train_labels, inputs=embed, num_sampled=num_sampled, num_classes=vocabulary_size))
 
 optimizer = tf.train.GradientDescentOptimizer1(.0).minimize(loss)
 
 init = tf.global_variables_initializer()
