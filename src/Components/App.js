
import { faCss3, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Editor from './Editor';
import './styles.css';
import useLocalStorage from './useLocalStorage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from './Heading';

function App() {
  const [html, setHtml]=useLocalStorage('html','')
  const [css, setCss]=useLocalStorage('css','')
  const [js, setJs]=useLocalStorage('js','')
  const [srcDoc , setsrcDoc]=useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
     setsrcDoc(
      `
      <html>
        <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `
     )
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js, ]);
    



  return (
    <>
    <Heading/>
    <div className="pane top-pane">
    <Editor title={<FontAwesomeIcon className="editor-title-html" icon={faHtml5}  />} language="xml" value={html} onChange={setHtml}/>
    <Editor title={<FontAwesomeIcon className="editor-title-css" icon={faCss3} />} language="css" value={css} onChange={setCss}/>
    <Editor title={<FontAwesomeIcon className="editor-title-js" icon={faJs} />} language="javascript" value={js} onChange={setJs}/>
    </div>
    <div className="bottom-pane">
    <iframe
         srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
    </div>
    </>
  );
}

export default App;
