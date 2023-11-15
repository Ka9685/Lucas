import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './Thebot.css';

import {Segment} from "semantic-ui-react";
 
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

  // const steps=[
     
  //     {
  //       id:"Greet", 
  //       message:"Bonjour! Je suis un chatbot de LUCAS ; A votre service.", 
  //       trigger:"ask username"
  //     },
  //     {
  //       id:"ask username", 
  //       message:"Veuillez entrer votre nom SVP !", 
  //       trigger:"attente1"
  //     },
  //     {
  //       id:"attente1", 
  //       user:true, 
  //       trigger:"username"
  //     },
  //     {
  //       id:"username", 
  //       message:"Salut {previousValue}, Vous êtes ici pour un achat. Quel produit ?", 
  //       trigger:"issues"
  //     },
  //     {
  //       id:"issues", 
  //       options:
  //       [
  //         {value:"Telephone", label:"Telephone", trigger:"Telephone"},
  //         {value:"Ordinateur", label:"Ordinateur", trigger:"Ordinateur"},
  //         {value:"SmartTV", label:"SmartTV", trigger:"SmartTV"},
  //       ]
  //     },
  //     {
  //       id:"Telephone", 
  //       message:"Ok ! Concernant les téléphone, nous disposons de 5 marques de qualité.", 
  //       trigger:"suite"
  //     },
  //     {
  //       id:"Ordinateur", 
  //       message:"Nous sommes un distributeur aggréé de la marque HP. Mais vous pourrez trouver aussi des PC DELL, Lenovo, ainsi que des MAC.", 
  //     },
  //     {
  //       id:"SmartTV", 
  //       message:"Ok ! Faites votre choix parmi la plétore de TV smart de qualité", 
  //       trigger:"suite"
  //     },
  //     {
  //       id:"suite", 
  //       options:
  //       [
  //         {value:"Ok", label:"Ok", trigger:"Ok"},
  //         {value:"Annuler", label:"Annuler", trigger:"Annuler"},
  //       ]
  //     },
  //     {
  //       id:"Ok", 
  //       message:"Merci de votre confiance. Patientez quelques secondes le temps de traiter votre demande.", 
  //       end:true
  //     },
  //     {
  //       id:"Annuler", 
  //       message:"Ravi de vous servir, revenez-nous très prochainement !", 
  //       end:true
  //     }
  //   ];









const steps=[

  {
    id: 'welcome',
    message: 'Bonjour ! Bienvenue à l\'université LUCAS. Comment puis-je vous aider ?',
    trigger: 'options',
  },
  {
    id: 'options',
    message: 'Voici quelques options :',
    trigger: 'options-list',
  },
  {
    id: 'options-list',
    options: [
      { value: 1, label: 'Informations sur les cours', trigger: 'courses' },
      { value: 2, label: 'Inscriptions', trigger: 'enrollment' },
      { value: 3, label: 'Contact', trigger: 'contact' },
      { value: 4, label: 'Autre demande', trigger: 'other' },
    ],
  },
  {
    id: 'courses',
    message: 'Nous proposons une variété de cours, y compris des cours de mathématiques, de sciences et de langues. Quel cours vous intéresse-t-il ?',
    trigger: 'options-list',
  },
  {
    id: 'enrollment',
    message: 'Pour vous inscrire, veuillez visiter notre page d\'inscription en ligne ou contacter notre bureau d\'admissions.',
    trigger: 'options-list',
  },
  {
    id: 'contact',
    message: 'Vous pouvez nous contacter par email à contact@ecolexyz.com ou par téléphone au 123-456-7890. Comment puis-je vous aider d\'autre ?',
    trigger: 'options-list',
  },
  {
    id: 'other',
    message: 'Veuillez nous fournir plus de détails sur votre demande afin que nous puissions vous aider de la meilleure façon possible.',
    trigger: 'end',
  },
  {
    id: 'end',
    message: 'Merci pour votre intérêt pour notre école XYZ. Au revoir !',
    end: true,
  },


]


  









  return (
    <>
      <Segment floated="right" > 
      <ThemeProvider theme={theme}>
        <div>
            <ChatBot 
              steps={steps} 
              headerTitle="Lucas" 
              botAvatar="../lucas_logo.png"
              // userAvatar="../lucas_logo.png"
            />
        </div>
      </ThemeProvider>
        
      </Segment>
        
    </>
  )
}

export default Thebot
