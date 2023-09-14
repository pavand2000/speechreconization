import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";



 const App = () => {

  const [textToCopy, setTextToCopy] = useState();

  const [isCopied, setCopied] = useClipboard(textToCopy);

 const startListening = () => SpeechRecognition.startListening({ continuous: true,language:'en-IN' })

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
    <div className="App">
    <h2> Speech to Text Converter </h2>
    <br/>
    <p>React hook that converts Speech from the microphone to text and makes it avaiable to your React components</p>
    <div className='main-content' onClick={() => setTextToCopy(transcript)} >
      { transcript}
    
    </div>

    <div className='main-style'>
      
    <button onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
        <button onClick={startListening}>start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>stop Listening</button>
    
    </div>
    </div>
    </>
  );
}

export default App;
