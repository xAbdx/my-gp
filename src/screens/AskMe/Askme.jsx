import React, { useEffect, useRef, useState } from 'react';
import AskmeNav from '../../components/AskmeNav/AskmeNav.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Gptlogo from '../../components/Gptlogo.tsx';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import './Askme.css';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';

const API_KEY = process.env.REACT_APP_MY_OPENAI_KEY;

export default function Home() {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState([]);
    const ref = useRef();

    async function callOpenAIAPI() {
        // console.log("calling the api");

        const APIBody = {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    "role": "user",
                    "content": question
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        };

        const text = question;
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY,
            },
            body: JSON.stringify(APIBody),
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);

            const apiResponse = data.choices[0].message.content;
            // setResponse(data.choices[0].message.content);
            setResponse([
                ...response,
                { text: text, isUser: true },
                { text: apiResponse, isUser: false },
            ])
        });
    }

    // console.log(question);

    useEffect(() => {
        setTimeout(() => ref.current.scrollIntoView({ behavior: "smooth" }), 500)
    }, [response])


    return (
        <div class="askMeContainer">
            <AskmeNav />
            <React.Fragment>
                <Paper sx={{ pb: '50px', bgcolor: "#393b46" }}>
                    <div class="askMeDiv">
                        <div class="askMe">
                            {response.map((m, index) => (
                                <div key={index} class="contentReq">
                                    <br />
                                    <div class="avatar">
                                        <Avatar sx={{ bgcolor: "#673ab7" }}>{m.isUser ? "Y" : <Gptlogo />}</Avatar>
                                    </div>
                                    <div>
                                        <span><strong>{m.isUser ? "You" : "ChatGPT"}</strong></span>
                                        <p>{m.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={ref}></div>
                        </div>
                    </div>
                </Paper>

                <AppBar position="fixed"
                    sx={{
                        top: 'auto',
                        bottom: 0,
                        bgcolor: "#393b46",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            bgcolor: "#555666",
                            margin: '20px 0',
                        }}
                    >
                        <TextField
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder='Ask me'
                            sx={{ width: '100%', borderRadius: "4%", color: "#D9D9E3" }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton sx={{ color: "#e0e0ec" }}>
                                        <SendIcon onClick={callOpenAIAPI} />
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </Box>
                </AppBar>
            </React.Fragment>
        </div>
    )
}