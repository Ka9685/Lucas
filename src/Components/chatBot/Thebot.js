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

const options = {
  background: '#f0f0f0',
  color: '#333',
  fontSize: '16px',
  borderRadius: '5px',
  padding: '10px',
  margin: '5px',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
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



 
//______________________________________________________________________
//______________________________________________________________________


const steps=[

  // {
  //   id:"1", 
  //   message:"Veuillez entrer votre nom SVP !", 
  //   user:true,
  //   trigger:"2"
  // },
  {
    id:"Lancement", 
    message:"LUCAS à votre service", 
    // user:true,
    trigger:"attente1"
  },

  
  // {
  //   id:"attente1", 
  //   user:true, 
  //   trigger:"welcome"
  // },
  // {
  //   id:"attente1", 
  //   user:true, 
  //   trigger:"validate-input"
  // },





  // {
  //   id: 'attente1',
  //   user:true,
  //   validator:(value) =>  {
  //       // if (value !== 'Salut') {
  //       //   return 'Salut';
  //       // };
  //       // return true;
        
  //       switch (value.toLowerCase()) {
  //         case 'Salut':
  //           return 'Salut';
            
  //           break;
        
  //         default:
  //           break;
  //       }
  //   },
  //   trigger: 'input-validated',
  // },
  // {
  //   id: 'input-validated',
  //   message: 'Salut ! J\'estime que vous allez bien. Veuillez entrer votre nom SVP !',
  //   // message: 'Vous avez démarré la conversation avec : {previousValue}',
  //   trigger:"entree"
  // },





  {
    id: 'attente1',
    user:true,
    validator:(value) =>  {
        if (value.toLowerCase().includes('salut')) {
          return true;
        } else if (value.toLowerCase().includes('slt')) {
          return true;
        }else if (value.toLowerCase().includes('bonjour')) {
          return true;
        }else if (value.toLowerCase().includes('bjr')) {
          return true;
        }else if (value.toLowerCase().includes('hi')) {
          return true;
        }else if (value.toLowerCase().includes('hello')) {
          return true;
        }else if (value.toLowerCase().includes('bonsoir')) {
          return true;
        }else if (value.toLowerCase().includes('bsr')) {
          return true;
        }
        return 'Salutation !';
    },
    trigger: 'input-validated',
  },
  {
    id: 'input-validated',
    message: 'Salut ! J\'estime que vous allez bien. Veuillez entrer votre nom SVP !',
    // message: 'Vous avez démarré la conversation avec : {previousValue}',
    trigger:"entree"
  },

  {
    id:"entree", 
    user:true, 
    trigger:"welcome"
  },
  

  

  {
    id: 'welcome',
    message: 'Bienvenue à l\'université LUCAS, {previousValue} ! . Comment puis-je vous aider ?',
    trigger: 'options',
  },
  {
    id: 'options',
    message: 'Veuillez choisir l\'une des options ci-dessous pour obtenir de l\'aide :',
    trigger: 'options-list',
  },
  {
    id: 'options-list',
    options: [
      { value: 1, label: 'A propos', trigger: 'apropos' },
      { value: 2, label: 'Frais', trigger: 'prix' },
      { value: 3, label: 'Inscriptions', trigger: 'enrollment' },
      { value: 4, label: 'Mode de financement', trigger: 'opt-financement' },
      { value: 5, label: 'Contact', trigger: 'contact' },
      { value: 6, label: 'Autre demande', trigger: 'other' },
    ],

    
    // user:true,
    // validator:(value) =>  {
    //   if ((value !== '1')) {
    //     return '1';
    //   };
    //   return true;
    // },
    // trigger: 'apropos'
  },






  
  //-----------------------------OPTIONS----------------------------
  {
    id: 'apropos',
    message: 'LUCAS (Leaders Universities and Colleges of Applied Sciences) est un groupe universitaire panafricain  et bilingue. Nos campus sont présents à ce jour à Accra (Ghana) depuis 2016, à Lomé (Togo) depuis 2018, à Niamey (Niger) depuis 2019 et à Bamako (Mali) depuis 2020.',
    trigger: 'options-list',
  },
  {
    id: 'prix',
    message: 'Nous proposons une variété de cours, y compris des cours de mathématiques, de sciences et de langues. Quel cours vous intéresse-t-il ?',
    trigger: 'options-list',
  },
  {
    id: 'enrollment',
    message: 'Pour l’inscription individuelle, veuillez remplir le formulaire ci-joint et l’envoyer à : training@lucas-universities-colleges.net. Pour l’inscription d’une entreprise ou d’un groupe, veuillez remplir le formulaire ci-joint et l’envoyer à : training@lucas-universities-colleges.net',
    trigger: 'options-list',
  },
  {
    id: 'opt-financement',
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
    // trigger: 'end',
    trigger: 'user-request',
  },
  // {
  //   id: 'end',
  //   message: 'Merci pour votre intérêt pour notre université LUCAS. Au revoir !',
  //   end: true,
  // },
  //-------------------------------------------------------------------



  
  // {
  //   id: 'user-request',
  //   user: true,
  //   trigger: 'note_user-request',
  // },


  //**************************************************************************************** */
  // {
  //   id: 'handle-user-input',
  //   validator: {
  //     function: (value) => {
  //       if (value.trim() === '') {
  //         return 'Veuillez entrer quelque chose.';
  //       }
  //       return true;
  //     },
  //     failMessage: 'Erreur de saisie. Veuillez réessayer.',
  //   },
  //   trigger: 'user-input-validated',
  // },




  //**************************************************************************************** */

  {
    id: 'user-request',
    // message: 'Vous avez saisi : " {previousValue} "',
    user:true,
    // trigger:'handle-user-input',

    // trigger:'eval_user-request',
    validator: (value) => {
      // function: {
        let val = value.toLowerCase();
        if (value.trim() === '') {
          return 'Veuillez entrer quelque chose.';
        } else {
          if (val.includes('propos')) {
            return true;
          }else if (val.includes('frais')) {
            return true;
          }else if (val.includes('inscription')) {
            return true;
          }else if (val.includes('financement')) {
            return true;
          }else if (val.includes('contact')) {
            return true;
          }else if (val.includes('autre')) {
            return true;
          }
          // else {
          //   // return true;
          //   // return 'Votre question a été prise en compte et est en cours de traitement. \n Cependant, vous pouvez continuer de me questionner en attendant.';
          //   return true;
          // }
        }
        // return true;
      // },
      // failMessage: 'Erreur de saisie. Veuillez réessayer.',
    },
    trigger: 'user-input-validated',
  },
  // {
  //   id: ' eval_user-request',
  // },



  


  {
    id: 'user-input-validated',
    message: 'Vous avez saisi : " {previousValue} "',
    // end: true,
    trigger:'options-list',
  },

  {
    id: 'user-input-perso',
    // message: 'Vous avez saisi : " {previousValue} "',
    message: 'Ok ! C\'est noté',
    // end: true,
    trigger:'options-list',
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
              // userAvatar={userAvatar}
              optionStyle={options}
            />
        </div>
      </ThemeProvider>
        
      </Segment>
        
    </>
  )
}

export default Thebot
