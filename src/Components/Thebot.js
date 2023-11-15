import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import {Segment} from "semantic-ui-react";
 
const theme = {
  background: '#f5f8fb',
  // fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


const Thebot = () => {



  

  const steps=[
      // {
      //   id:'intro', 
      //   message:'Hello. What is your name?', 
      //   trigger:'intro-user',
      // },
      // {
      //   id:'intro-user', 
      //   user:true, 
      //   end:true,
      // }



      



      {
        id: '1',
        message: 'Welcome to react chatbot!',
        trigger: '2',
      },
      {
        id: '2',
        message: 'Let\'s calculate your BMI (Body Mass Index)',
        trigger: '3',
      },
      {
        id: '3',
        message: 'Please type your height (cm)',
        trigger: 'height',
      },
      {
        id: 'height',
        user: true,
        // trigger: '4',
        // validator,
        end:true
      }








      // {
      //   id:"Greet", 
      //   message:"Bienvenue ! Je suis KamBot, à votre service", 
      //   trigger:"ask username"
      // },
      // {
      //   id:"ask username", 
      //   message:"Veuillez entrer votre nom SVP !", 
      //   trigger:"attente1"
      // },
      // {
      //   id:"attente1", 
      //   user:true, 
      //   trigger:"username"
      // },
      // {
      //   id:"username", 
      //   message:"Salut {previousValue}, Vous êtes ici pour un achat. Quel produit ?", 
      //   trigger:"issues"
      // },
      // {
      //   id:"issues", 
      //   options:
      //   [
      //     {value:"Telephone", label:"Telephone", trigger:"Telephone"},
      //     {value:"Ordinateur", label:"Ordinateur", trigger:"Ordinateur"},
      //     {value:"SmartTV", label:"SmartTV", trigger:"SmartTV"},
      //   ]
      // },
      // {
      //   id:"Telephone", 
      //   message:"Ok ! Concernant les téléphone, nous disposons de 5 marques de qualité.", 
      //   trigger:"suite"
      // },
      // {
      //   id:"Ordinateur", 
      //   message:"Nous sommes un distributeur aggréé de la marque HP. Mais vous pourrez trouver aussi des PC DELL, Lenovo, ainsi que des MAC.", 
      // },
      // {
      //   id:"SmartTV", 
      //   message:"Ok ! Faites votre choix parmi la plétore de TV smart de qualité", 
      //   trigger:"suite"
      // },
      // {
      //   id:"suite", 
      //   options:
      //   [
      //     {value:"Ok", label:"Ok", trigger:"Ok"},
      //     {value:"Annuler", label:"Annuler", trigger:"Annuler"},
      //   ]
      // },
      // {
      //   id:"Ok", 
      //   message:"Merci de votre confiance. Patientez quelques secondes le temps de traiter votre demande.", 
      //   end:true
      // },
      // {
      //   id:"Annuler", 
      //   message:"Ravi de vous servir, revenez-nous très prochainement !", 
      //   end:true
      // },
    ]

  return (
    <Segment floated="right">
      <ThemeProvider theme={theme}>
        <div>
          <ChatBot 
            steps={steps} 
            headerTitle="LUCAS" 
            
          />
        </div>
      </ThemeProvider>
    </Segment>
  );
}

export default Thebot
