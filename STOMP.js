
# configure Spring for STOMP messaging
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
# create a browser client : index.html # import JS libraries
#communicate with server using STOMP over websocket
import StockJS
import STOMP
# make a app.js => logic of the client application | set up functions
function connect(){...}
#uses SockJS and Stomp.js to open connection , sockJS server waiting for connections
function disconnect(){...}
function sendName(){...}
# retrieves the name entered by the user , and use STOMP client to send it to destination

