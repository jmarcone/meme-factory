import axios from 'axios';
import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Navigator from './components/Navigator.tsx';
import { Container, Header, Divider, Grid } from 'semantic-ui-react'
import MemesTable from './components/MemesTable';
import MemeEditor from './components/MemeEditor';
import EditText from './components/EditText';

const URL = "https://api.imgflip.com/get_memes";
// const URL = "http://alpha-meme-maker.herokuapp.com/";


function App() {
  const [memes, setMemes] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [activeMeme, setActiveMeme] = useState(1);
  const meme = memes?.[activeMeme];

  const [memeText, setMemeText] = useState("floating Meme text...");
  const [bottomMemeText, setBottomMemeText] = useState("bottom Meme text...");

  useEffect(() => {
    axios.get(URL).then(
      data => setMemes(data.data.data.memes)
    )
  }, [])

  return (


    <Container >
      <Divider />

      <Grid >



        <Grid.Column width={4}>
          <Header as='h1'>Meme Generator</Header>
          <EditText setMemeText={setMemeText} memeText={memeText} setBottomMemeText={setBottomMemeText} bottomMemeText={bottomMemeText}/>
          <MemesTable memes={memes} activePage={activePage} activeMeme={activeMeme} setActiveMeme={setActiveMeme} />
          <Navigator setActivePage={setActivePage} activePage={activePage} />
        </Grid.Column>
        <Grid.Column width={12}>
          <MemeEditor meme={meme} memeText={memeText} setMemeText={setMemeText} setBottomMemeText={setBottomMemeText} bottomMemeText={bottomMemeText}/>
        </Grid.Column>


      </Grid>

    </Container>


  );
}

export default App;
