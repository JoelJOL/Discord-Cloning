// user default input
const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
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
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
    ["can i ask you something"],
    ["are you gay"],
    ["how can i secure my discord account"],
    ["what steps can i take to report inappropriate content or behavior"],
    ["tell me more about discord's privacy features"],
    ["how does discord handle data and what information is collected"],
    ["are there parental controls available for discord"],
    ["can i get information about discord's community guidelines"],
    ["where can i find the latest updates on discord's safety initiatives"],
    ["how transparent is discord about its safety measures"],
    ["how does discord handle harassment and bullying"],
    ["what measures are in place to prevent spam and phishing on discord"],
    ["can i control who can send me friend requests and messages"],
    ["how can i protect my server from unwanted or harmful users"],
    ["are there age restrictions on discord and how are they enforced"],
    ["what resources are available for educators and school communities"],
    ["tell me more about discord's stance on content moderation and free speech"],
    ["how often are transparency reports published, and what do they include"],
    ["can i appeal moderation decisions if i feel they are unfair"],
    ["where can i find educational materials for parents about online"],
    ["what actions can be taken against users who violate discord's community guidelines"],
    ["how does discord handle issues related to hate speech and discriminatory content"],
    ["can i customize privacy settings for individual servers"],
    ["are there tools to help prevent doxxing and the sharing of personal information"],
    ["how can i recognize and report phishing attempts or scam messages"],
    ["tell me about discord's efforts to combat disinformation and fake news"],
    ["can i restrict access to my server based on geographic location"],
    ["how does discord handle issues related to self-harm or suicidal content"],
    ["what resources are available for users who may be experiencing online harassment"],
    ["how does discord handle content related to illegal activities or substances"],
    ["is there a limit to the number of reports i can submit and how are they prioritized"],
    ["can i set up content filtering or moderation bots for my server"],
    ["how does discord address issues of server raids and spam attacks"],
    ["can i appeal a ban or suspension and what is the process for doing so"],
    ["how can i verify the authenticity of official discord communications or announcements"],
    ["what steps can i take to secure voice channels and prevent unauthorized access"],
    ["can i opt-out of data collection for targeted advertising on discord"],
    ["how does discord handle appeals for users who believe they were wrongly banned"],
    ["tell me about discord's efforts to provide a safe environment for minors"],
    ["are there guidelines for creating and managing a safe server for mental health support"],
    ["how can i report a bug or security vulnerability in the discord platform"],
    ["can i request additional support or resources for running a large community or server on discord"]
  ];
  // bot default output
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
  
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Eren Jaeger"],
    ["I am nameless", "I don't have a name"],
    ["I love you too❤️", "Me too❤️"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
    ["Sure,feel free to ask anything"],
    ["Not as much as you are😂"],
    ["You can enhance the security of your account by enabling two-factor authentication (2FA) in your account settings. This adds an extra layer of protection."],
    ["You can report inappropriate content or behavior by using the reporting tools available on Discord. Navigate to the message or user, click on the options menu, and select the appropriate reporting option."],
    ["Discord prioritizes user privacy. You can adjust your privacy settings, control who can send you friend requests, and manage who can see your online status. Check out our Privacy Hub for detailed information."],
    ["Discord collects minimal data necessary for the platform to function. The Privacy Policy outlines the types of data collected and how it is used. Discord is committed to transparency and user control over their data."],
    ["Yes, we provide resources for parents to understand and manage their teen's experience on Discord. The Parent Hub offers guidance and tools to help parents ensure a safer environment for their teens."],
    ["Absolutely! Our Community Guidelines are in place to maintain a positive and safe environment for all users. Familiarize yourself with these guidelines to contribute to a respectful and enjoyable community."],
    ["Stay informed about Discord's safety, privacy, and policy initiatives by checking the Safety News Hub. It provides the latest news and updates on ongoing efforts to ensure a secure platform."],
    ["Discord is committed to transparency. The Transparency Hub provides data, trends, and analysis related to safety. Transparency reports cover information about enforcement, responses to legal requests, and more."],
    ["Discord has strict policies against harassment and bullying. You can report such incidents using the reporting tools, and the Trust and Safety team will investigate and take appropriate action."],
    ["Discord employs automated systems to detect and prevent spam. Additionally, users are encouraged to report suspicious messages. Always be cautious about clicking on links and report any phishing attempts."],
    ["Yes, you have control over friend requests and messages. You can adjust privacy settings to manage who can send you friend requests and who can direct message you."],
    ["Server owners and moderators have tools to manage and control server membership. Utilize role permissions, moderation bots, and verification methods to ensure a safe environment."],
    ["Discord requires users to be at least 13 years old. Age verification is based on the information provided during account creation. Users found to be under the age of 13 may be removed from the platform."],
    ["Discord provides a guide for educators to create a positive and educational environment on the platform. The Safety Center offers resources tailored to educators and school communities."],
    ["Discord is committed to maintaining a balance between free speech and preventing abuse. The Community Guidelines outline acceptable content, and enforcement is carried out to ensure a safe and welcoming community."],
    ["Transparency reports are typically published on a regular basis, providing information on enforcement of platform policies, responses to legal requests, and actions taken to address various issues. Check the Transparency Hub for the latest reports."],
    ["Yes, you can appeal moderation decisions through the support system. Provide detailed information about the situation, and the Trust and Safety team will review the appeal."],
    ["The Parent Hub is a valuable resource for parents, offering educational materials, tools, and a guide to help them understand and manage their teen's experience on Discord."],
    ["Depending on the severity of the violation, actions may include warnings, temporary suspension, or permanent account bans. The enforcement aims to maintain a safe and positive community."],
    ["Discord has a zero-tolerance policy for hate speech and discriminatory content. Users can report such content, and the Trust and Safety team will investigate and take appropriate measures."],
    ["Yes, Discord provides granular control over privacy settings for each server. You can manage who can see your online status, join the server, and send you messages on a server-by-server basis."],
    ["Discord actively monitors and takes action against doxxing. Avoid sharing personal information, and report any instances to the Trust and Safety team for investigation."],
    ["Be cautious of unsolicited messages containing suspicious links. Report phishing attempts using the reporting tools, and Discord will investigate and take action."],
    ["Discord is committed to preventing the spread of disinformation. Users can report false information, and the Trust and Safety team works to ensure accurate and reliable content."],
    ["While Discord doesn't provide direct geographic restrictions, server owners can use verification methods and other settings to control who can join their server."],
    ["Discord takes such content seriously. If you encounter any user expressing self-harm or suicidal thoughts, use the reporting tools, and Discord will take immediate action to provide support and resources."],
    ["Discord provides resources and support for users facing online harassment. Report incidents, block and mute users, and consider adjusting privacy settings to protect yourself."],
    ["Discord prohibits content related to illegal activities or substances. Report such content, and the Trust and Safety team will investigate and take appropriate actions."],
    ["Users can submit reports as needed. Reports are prioritized based on severity, potential harm, and other factors. Discord aims to address reports promptly and thoroughly."],
    ["Yes, Discord allows server owners to implement third-party moderation bots or use the built-in moderation features to filter and manage content within their servers."],
    ["Discord employs automated systems to detect and prevent server raids and spam attacks. Users can report incidents for further investigation."],
    ["Yes, users can appeal a ban or suspension through the support system. Provide relevant details, and the Trust and Safety team will review the appeal."],
    ["Official Discord communications will be made through verified channels. Be cautious of phishing attempts and verify the authenticity of announcements on Discord's official blog or social media."],
    ["Set appropriate permissions for voice channels, limit access to specific roles, and use moderation features to secure voice channels and prevent unauthorized access."],
    ["Discord does not use data for targeted advertising. Users can review Discord's Privacy Policy for details on data collection practices."],
    ["Users can submit an appeal through the support system. Provide detailed information, and the Trust and Safety team will review the case."],
    ["Discord has dedicated resources and features, such as the Family Center and safety tools, to create a safe environment for users under the age of 18."],
    ["Discord provides guidelines for creating supportive communities, including those focused on mental health. Server owners can set clear rules and use moderation tools to maintain a positive environment."],
    ["Discord welcomes reports of bugs or security vulnerabilities through their Bug Bounty program. Follow the guidelines provided for responsible disclosure."],
    ["Discord offers support for large communities through their Partnership Program. Eligible servers may receive additional resources and assistance."]
  ];
  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  const synth = window.speechSynthesis;
  // voice control
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  // send the message after pressing enter key
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
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
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }

  function toggleChat() {
    // Toggle the visibility of the chat box
    var chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
  }

  function closeChat() {
    // Hide the chat box
    var chatBox = document.getElementById('chat-box');
    chatBox.style.display = 'none';
  }

  function sendMessage() {
    // Get user input
    var userInput = document.getElementById('input').value;

    // Display user message
    displayMessage('user', userInput);

    // Simulate bot response (replace with actual bot logic)
    var botResponse = "You said: " + userInput;
    displayMessage('bot', botResponse);

    // Clear the input field
    document.getElementById('input').value = '';
  }

  function displayMessage(sender, message) {
    // Create a new message element
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);

    // Add the message content
    var spanElement = document.createElement('span');
    spanElement.textContent = message;
    messageElement.appendChild(spanElement);

    // Append the message to the message section
    document.getElementById('message-section').appendChild(messageElement);

    // Scroll to the bottom of the message section
    var messageSection = document.getElementById('message-section');
    messageSection.scrollTop = messageSection.scrollHeight;
  }
