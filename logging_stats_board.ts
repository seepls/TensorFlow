  /*
  visualization with tensorboard
  
  assembling the graph :
   -> add summary ops
   -> add merge ops 
   
 in a session :
 ->create a file writer
 -> run merge ops for log stats
 -> add returned summary to the file writer 
 
 
 load the log to tensor board
 
 */
 
 import tensorflow as tf
 graph = tf.Graph()
 with graph.as_default():
    train_inputs= tf.placeholder(tf.int32, shape= [batch_size])
    train_labels= tf.placehilder(tf.int32, shape=[batch_size ,1])
    
    embeddings = tf.Variable(tf.random_uniform ([vocabulary_size , embedding_size],-1.0,1.0))
    embed=tf.nn.embedding_lookup(embeddings,train_inputs)
    
    nce_weights = tf.Variable(tf.truncated_normal([vocabulary_size ,embedding_size],
                              stddev =1.0 / math.sqrt(embedding_size)))
                              
    nce_biases= tf.Variable(tf.zeros([vocabulary_size])
    loss  = tf.reduce_mean(
            tf.nn.nce_loss(weights = nce_weights , biases = nce_biases , labels = train_labels,
                           inputs = embed, num_sampled= num_sampled , num_classes= vocabulary_size))
    tf.summary.scalar('loss',loss)
    merged= tf.summary.merge_all()
    
    optimizer = tf.train.GradientDescentOptimizer(1.0).minimize(loss)
    
    init = tf.global_variables_initializer()
    
with tf.Session(graph = graph) as session:
   writer = tf.summary.FileWriter(log_dir, session.graph)
   init.run()
      
   for step in xrange(num_steps):
     batch_inputs, batch_labels = generate_batch(batch_size, num_skips, skip_window)
     feed_dict = { train_inputs: batch_inputs , train_labels: batch_labels}
        
     _, summary, loss_val = session.run([optimizer, merged, loss], feed_dict = feed_dict)
     writer.add_summary,step
                           
