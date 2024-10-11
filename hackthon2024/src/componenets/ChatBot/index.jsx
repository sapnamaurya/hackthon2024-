import React, { useState, useEffect, useRef } from "react";
import "./style.css";
const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello.. I'm listening! Go on.." },
  ]);
  const [input, setInput] = useState("");
  const messageEndRef = useRef(null);
  const synth = window.speechSynthesis;

  const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["how is corona", "how is covid 19", "how is covid19 situation"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself",
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
  ];

  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?",
    ],
    [
      "Getting better. There?",
      "Somewhat okay!",
      "Yeah fine. Better stay home!",
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually",
    ],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Sabitha Kuppusamy"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
  ];

  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening...",
  ];

  const voiceControl = (string) => {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  };

  const compare = (triggerArray, replyArray, string) => {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray[x].length; y++) {
        if (triggerArray[x][y] === string) {
          const items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    if (item) return item;
    else return containMessageCheck(string);
  };

  const containMessageCheck = (string) => {
    const expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation.",
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"],
    ];

    const expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"],
    ];

    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        const items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  };

  const output = (input) => {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();

    const comparedText = compare(userMessage, botReply, text);
    product =
      comparedText ||
      alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  };

  const addChat = (input, product) => {
    const userMessage = { type: "user", text: input };
    const botMessage = { type: "bot", text: product };
    setMessages([...messages, userMessage, botMessage]);
    voiceControl(product);
    scrollToBottom();
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      output(input);
      setInput("");
    }
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleEnterPress = (e) => {
      if (e.code === "Enter") {
        handleSendMessage();
      }
    };
    document.addEventListener("keydown", handleEnterPress);
    return () => {
      document.removeEventListener("keydown", handleEnterPress);
    };
  }, [input]);

  return (
    <div className="card">
      <div id="header">
        <h1>Chatter box!</h1>
      </div>
      <div id="message-section">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <span>{message.text}</span>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <div id="input-section">
        <input
          id="input"
          type="text"
          placeholder="Type a message"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button className="send" onClick={handleSendMessage}>
          <div className="circle">
            <i className="zmdi zmdi-mail-send"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
