/*
-- saving the model best parameters | check points
-- saving and restoring of session variables  done by creating saver node  ||| tf.train.Saver()
-- only session variables are stored , not the graph itself 
*/

with tf.Session(graph=graph) as session:
 init.run()
 
for step in xrange(num_steps):
  batch_inputs, batch_labels = generate_batch(batch_size, num_skips, skip_window) 
  feed_dict = {train_inputs: batch_inputs, train_labels: batch_labels}
  _, loss_val = session.run([optimizer, loss],feed_dict=feed_dict)
  
  
# assembling the graph 
saver = tf.train.Saver()
with tf.Session(graph=graph) as session:
    init.run()
    for step in xrange(num_steps):
    ...
    if step % 1000 == 0:
        saver.save(sess, save_path)
        
saver = tf.train.Saver()
with tf.Session(graph=graph) as session: 
  saver.restore(sess, save_path)
