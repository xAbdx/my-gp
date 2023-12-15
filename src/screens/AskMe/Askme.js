"use client";
import React from 'react';
import { } from 'ai/react';
import { useChat } from 'ai/react';
import './Askme.css';
// import GPTLogo from '../../img/GPTLogo.tsx';
import ResponsiveAppBar from '../../components/Navbar/ResponsiveAppBar.js';
// import { response } from 'express';
// import Footer from "../../components/footer/footer";

const Askme = () => {
    // const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div>
            <ResponsiveAppBar />
            {/* {messages.map((message) => {
                return (
                    <div key={message.id}>
                        <div>
                            {message.role === 'assistant' && <GPTLogo />}
                            <span className="ml-3">{message.content}</span>
                        </div>
                    </div>
                )
            })} */}
            <div className="chat-log">
                <div className="avatar">
                    me
                </div>
                <div className="message">
                    hello world
                </div>
            </div>
            <textarea rows="1"></textarea>
            {/* <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Send a message" />
            </form> */}
            {/* <Footer /> */}
        </div>
    );
}
export default Askme;