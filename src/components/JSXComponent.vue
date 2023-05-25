<template>
  <div class="container">
    <h1>Welcome to the JSX Chatbot Playground!</h1>
    <div class="chatbox">
      {messages.map((message, index) => (
      <div class="message" :class="{ user: message.fromUser }" :key="index">
        <div class="avatar">
          <img src="@/assets/logo.png" alt="Avatar" />
        </div>
        <div class="content">
          <p>{message.text}</p>
          <span class="timestamp">{message.timestamp}</span>
        </div>
      </div>
      ))}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          text: "Hello there!",
          fromUser: false,
          timestamp: "10:01 AM",
        },
        {
          text: "Hey! How can I help you?",
          fromUser: true,
          timestamp: "10:05 AM",
        },
      ],
      message: "This is a sample message",
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.chatbox {
  border: 1px solid #ccc;
  padding: 20px;
}

.message {
  display: flex;
  margin-bottom: 10px;
}

.message.user {
  justify-content: flex-end;
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  overflow: hidden;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: auto;
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timestamp {
  color: #999;
  font-size: 12px;
}
</style>
