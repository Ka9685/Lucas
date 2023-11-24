import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import {Segment} from "semantic-ui-react";
import { useState } from 'react';
 
const theme = {
  background: '#f5f8fb',
  // fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  
  botBubbleColor: '#FFF0E4',
  // botFontColor: '#fff',
  userBubbleColor: '#fff',
  // userFontColor: '#4a4a4a',
  // userFontColor: '#4a4a4a',
  options:'#ccc',
};


const Thebot = () => {


  const [userMessage, setUserMessage] = useState('');
  
  const handleUserMessage = (value) => {
    setUserMessage(value.toLowerCase());
  };

  const handleChatbotResponse = () => {
    let response = '';
    const greetings = ['bonjour', 'salut', 'hello'];
    const courseKeywords = ['cours', 'formation', 'matière'];
    const admissionKeywords = ['admission', 'inscription', 'candidature'];
    const contactKeywords = ['contact', 'adresse', 'téléphone'];

    if (greetings.some((greeting) => userMessage.includes(greeting))) {
      response = 'Bonjour ! Comment puis-je vous aider ?';
    } else if (courseKeywords.some((keyword) => userMessage.includes(keyword))) {
      response = 'Nous proposons une variété de cours dans différentes disciplines. Pouvez-vous préciser votre demande ?';
    } else if (admissionKeywords.some((keyword) => userMessage.includes(keyword))) {
      response = 'Pour toute information sur les admissions, veuillez visiter notre page d\'admission ou contacter notre bureau des admissions.';
    } else if (contactKeywords.some((keyword) => userMessage.includes(keyword))) {
      response = 'Vous pouvez nous contacter par email à contact@universite.com ou par téléphone au 123-456-7890.';
    } else {
      response = 'Je suis désolé, je ne comprends pas. Veuillez poser une autre question ou choisir parmi les options disponibles.';
    }

    return response;
  };

  const steps = [
    {
      id: 'welcome',
      message: 'Bonjour ! Comment puis-je vous aider ?',
      trigger: 'userQuery',
    },
    {
      id: 'userQuery',
      user: true,
      trigger: 'response',
      validator: (value) => {
        handleUserMessage(value);
        return true;
      },

    },
    {
      id: 'response',
      message: ({ previousValue }) => handleChatbotResponse(previousValue),
      trigger: 'userQuery',
    },
    {
      id: 'options',
      options: [
        { value: 1, label: 'En savoir plus sur les cours', trigger: 'courseInfo' },
        { value: 2, label: 'Admissions', trigger: 'admissionInfo' },
        { value: 3, label: 'Contact', trigger: 'contactInfo' },
        { value: 4, label: 'Autre question', trigger: 'userQuery' },
      ],
    },
    {
      id: 'courseInfo',
      message: 'Nous offrons une variété de cours dans différents domaines. Comment puis-je vous aider spécifiquement ?',
      trigger: 'options',
    },
    {
      id: 'admissionInfo',
      message: 'Pour toute information sur les admissions, veuillez visiter notre site web ou contacter notre bureau des admissions.',
      trigger: 'options',
    },
    {
      id: 'contactInfo',
      message: 'Vous pouvez nous contacter par email à contact@universite.com ou par téléphone au 123-456-7890.',
      trigger: 'options',
    },
  ];

  return (
    <>
      <Segment floated="right" > 
      <ThemeProvider theme={theme}>
        <div>
            <ChatBot 
              steps={steps} 
              headerTitle="Lucas" 
              botAvatar="../lucas_logo.png"
              // userAvatar={userAvatar}
            />
        </div>
      </ThemeProvider>
        
      </Segment>
        
    </>
  );
}

export default Thebot
