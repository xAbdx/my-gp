import React, { useEffect, useRef, useState } from 'react';
import './Askme.css';
import AskmeNav from '../../components/AskmeNav/AskmeNav.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Gptlogo from '../../components/Gptlogo.tsx';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';

const API_KEY = process.env.REACT_APP_MY_OPENAI_KEY;

export default function Home() {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState([]);
    const [showProgress, setShowProgress] = useState(false);
    const ref = useRef();

    // const handleEnterKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //         callOpenAIAPI();
    //     }
    // };

    // async function callOpenAIAPI() {
    //     if (question.trim() === '') {
    //         return; // Do nothing if the question is empty or contains only whitespace
    //     }

    //     // console.log("calling the api");
    //     setShowProgress(true); // Show CircularProgress

    //     const APIBody = {
    //         model: 'gpt-3.5-turbo',
    //         messages: [
    //             {
    //                 "role": "user",
    //                 "content": question
    //             }
    //         ],
    //         temperature: 1,
    //         max_tokens: 256,
    //         top_p: 1,
    //         frequency_penalty: 0,
    //         presence_penalty: 0,
    //     };

    //     const text = question;
    //     await fetch("https://api.openai.com/v1/chat/completions", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + API_KEY,
    //         },
    //         body: JSON.stringify(APIBody),
    //     }).then((data) => {
    //         return data.json();
    //     }).then((data) => {
    //         // console.log(data);
    //         const apiResponse = data.choices[0].message.content;
    //         setResponse([
    //             ...response,
    //             { text: text, isUser: true },
    //             { text: apiResponse, isUser: false },
    //         ])
    //     });
    //     setQuestion('');
    //     setShowProgress(false);
    // }
    // console.log(question);

    // useEffect(() => {
    //     setTimeout(() => ref.current.scrollIntoView({ behavior: "smooth" }), 300)
    // }, [response])


    return (
        <div class="askMeContainer">
            <AskmeNav />
            <React.Fragment>
                <Paper elevation={0} sx={{ pb: '50px', bgcolor: "#393b46" }}>
                    <div class="askMeDiv">
                        <div class="askMe">

                            <div ref={ref}></div>
                        </div>
                        {showProgress && <CircularProgress />} {/* Show CircularProgress conditionally */}
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
                            maxWidth: '90%',
                            bgcolor: "#555666",
                            margin: '20px 0',
                            borderRadius: "14px",
                        }}
                    >
                        <TextField
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            // onKeyDown={handleEnterKeyPress} // Call the function on key down
                            placeholder='Ask me'
                            sx={{
                                width: '100%',
                                borderRadius: "14px",
                                input: { color: '#D9D9E3', },
                            }}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <Tooltip title="Send message" placement="top" arrow>
                                            <IconButton sx={{ color: "#e0e0ec" }}>
                                                <SendIcon
                                                // onClick={callOpenAIAPI}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                            }}
                        />
                    </Box>
                </AppBar>
            </React.Fragment>
        </div>
    )
}

// {response.map((m, index) => (
//     <div key={index} class="contentReq">
//         <br />
//         <div class="avatar">
//             <Avatar sx={{ bgcolor: "#673ab7" }}>{m.isUser ? "Y" : <Gptlogo />}</Avatar>
//         </div>
//         <div>
//             <span><strong>{m.isUser ? "You" : "ChatGPT"}</strong></span>
//             <p>{m.text}</p>
//         </div>
//     </div>
// ))}