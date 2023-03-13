import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Navigator from './components/Navigator.tsx';
import { Container, Header, Divider, Grid } from 'semantic-ui-react'
import MemesTable from './components/MemesTable';
import MemeEditor from './components/MemeEditor';
import EditText from './components/EditText';
import UploadFile from './components/UploadFile';
import DownloadMeme from './components/DownloadMeme';


const URL = "https://api.imgflip.com/get_memes";


function App() {
  const memeEditorRef = useRef();

  //list of all memes from remote API
  const [memes, setMemes] = useState([]);
  //active pagination
  const [activePage, setActivePage] = useState(1);
  //if I selected a meme form the list
  const [activeMeme, setActiveMeme] = useState(1);

  //helper cleaning
  const meme = memes?.[activeMeme];

  //text for memes
  const [memeText, setMemeText] = useState("floating Meme text...");
  const [bottomMemeText, setBottomMemeText] = useState("bottom Meme text...");
  //if I upload a file
  const [selectedFile, setSelectedFile] = useState(null);

  //helper function
  const handleSetActiveMeme = (data) => {
    setSelectedFile(null);
    setActiveMeme(data);
  }

  useEffect(() => {
    axios.get(URL).then(
      (data) => {
        console.log(data);
        setMemes(data.data.data.memes)
      }
    )
  }, [])

  return (
    <Container >

      <Grid >
        {/* left column */}
        <Grid.Column width={4}>
          <Header as='h1'>Choose Meme</Header>
          <Divider />
          <MemesTable memes={memes} activePage={activePage} activeMeme={activeMeme} setActiveMeme={handleSetActiveMeme} />
          <Navigator setActivePage={setActivePage} activePage={activePage} />
        </Grid.Column>
        
        {/* central column */}
        <Grid.Column width={9} className="meme-editor-box">
          <MemeEditor meme={meme} memeText={memeText} setMemeText={setMemeText} setBottomMemeText={setBottomMemeText} bottomMemeText={bottomMemeText} selectedFile={selectedFile} memeEditorRef={memeEditorRef} />
        </Grid.Column>
        
        {/* right column */}
        <Grid.Column width={3}>
          <Header as='h1'>Edit Meme</Header>
          <Container>
            <UploadFile selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
            <Divider />
            <EditText setMemeText={setMemeText} memeText={memeText} setBottomMemeText={setBottomMemeText} bottomMemeText={bottomMemeText} />
            <Divider />
            <DownloadMeme memeEditorRef={memeEditorRef} />
          </Container>

        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
