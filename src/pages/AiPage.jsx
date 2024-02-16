import React, { useState } from 'react';
import bot from '../assets/bot.svg';
import user from '../assets/user.svg';
import send from '../assets/send.svg';
import Back from '../components/Back'
import '../aiStyles.css';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    let loadInterval
    const loader = (element) => {
        element.textContent = '';

        const loadInterval = setInterval(() => {
            element.textContent += '.';

            if (element.textContent === '....') {
                element.textContent = '';
            }
        }, 300);

        return loadInterval;
    };

    const typeText = (element, text) => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    };

    const generateUniqueId = () => {
        const timestamp = Date.now();
        const randomNumber = Math.random();
        const hexadecimalString = randomNumber.toString(16);

        return `id-${timestamp}-${hexadecimalString}`;
    };

    const chatStripe = (isAi, value, uniqueId) => {
        return (
            `
            <div class="wrapper ${isAi && 'ai'}">
                <div class="chat">
                    <div class="profile">
                        <img 
                          src=${isAi ? bot : user} 
                          alt="${isAi ? 'bot' : 'user'}" 
                        />
                    </div>
                    <div class="message" id=${uniqueId}>${value}</div>
                </div>
            </div>
        `
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const uniqueId = generateUniqueId();
        const botUniqueId = generateUniqueId(); // Generate unique ID for bot response

        // Combine both user and bot messages into a single setMessages call
        setMessages((prevMessages) => [
            ...prevMessages,
            { isAi: false, value: inputValue, uniqueId },
            { isAi: true, value: '', uniqueId: botUniqueId }
        ]);
        setInputValue('');

        const chatContainer = document.getElementById('chat_container');
        chatContainer.scrollTop = chatContainer.scrollHeight;




        try {
            const response = await fetch('https://server-gimini.vercel.app/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: inputValue,
                }),
            });

            if (response.ok) {
                const messageDiv = document.getElementById(botUniqueId);
                const data = await response.json();
                const parsedData = data.bot.trim();
                setMessages((prevMessages) =>
                    prevMessages.map((msg) =>
                        msg.uniqueId === botUniqueId
                            ? { ...msg, value: parsedData } // Update bot response value
                            : msg
                    )
                );
                // const messageDiv = document.getElementById(botUniqueId); // Get the bot message div
                clearInterval(loadInterval); // Clear loader after response received
                typeText(messageDiv, parsedData); // Show bot response with typing effect
            } else {
                const err = await response.text();
                const messageDiv = document.getElementById(botUniqueId);
                messageDiv.innerHTML = 'Something went wrong';
                console.log(err);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div id="app">
            <div id="chat_container">
                {messages.map((message, index) => (
                    <div key={index} className={`wrapper ${message.isAi && 'ai'}`}>
                        <div className="chat">
                            <div className="profile">
                                <img src={message.isAi ? bot : user} alt={message.isAi ? 'bot' : 'user'} />
                            </div>
                            <div className="message" id={message.uniqueId}>
                                {message.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} onKeyUp={(e) => {
                if (e.keyCode === 13) {
                    handleSubmit(e)
                }
            }} className='aiForm'>
                <textarea
                    name="prompt"
                    rows="1"
                    cols="1"
                    placeholder="Ask studhub..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">
                    <img src={send} alt="send" />
                </button>
            </form>
            <Back />
        </div >
    );
};

export default ChatApp;
