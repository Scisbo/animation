
import Header from '../Header/Header';
import Card from '../Card/Card';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import img1 from '../../assets/photo1.png';
import img2 from '../../assets/photo2.png';
import img3 from '../../assets/peoples/03.jpg';
import img4 from '../../assets/peoples/04.jpg';
import img5 from '../../assets/peoples/05.jpg';
import img6 from '../../assets/peoples/06.jpg';
import img7 from '../../assets/peoples/07.jpg';
import img8 from '../../assets/peoples/08.jpg';

import './App.scss';

function App() {

  return (
    <div className="wrapper">
      <div className="App">
        <Header />
        <main className="main">
          {/* <ScrollContainer> */}
          <Card
            outside={false}
            text={"Little trees and bushes grow however makes them happy."}
            decor={<ContactsOutlinedIcon style={{ fontSize: '550px' }} />}
            phrase={<ContactsOutlinedIcon style={{ fontSize: '250px' }} />}
            img={img1} />
          <Card
            outside={true}
            text={"We don't have to be committed. We are just playing here."}
            decor={<ChatOutlinedIcon style={{ fontSize: '550px' }} />}
            phrase={<ChatOutlinedIcon style={{ fontSize: '250px' }} />}
            img={img2}
          />
          {/* <Card outside={false}
            text={"I thought today we would do a happy little picture."}
            decor={"03"}
            phrase={"Nj"}
            img={img3}
          />
          <Card outside={true}
            text={"Nature is so fantastic, enjoy it. Let it make you happy."}
            decor={"04"}
            phrase={"Mo"}
            img={img4}
          />
          <Card outside={false}
            text={"We need a shadow side and a highlight side."}
            decor={"05"}
            phrase={"Ne"}
            img={img5}
          />
          <Card outside={true}
            text={"We'll put some happy little leaves here and there."}
            decor={"06"}
            phrase={"Wy"}
            img={img6}
          />
          <Card outside={false}
            text={"With something so strong, a little bit can go a long way."}
            decor={"07"}
            phrase={"Tx"}
            img={img7}
          />
          <Card outside={true}
            text={"There are no limits in this world."}
            decor={"08"}
            phrase={"Sd"}
            img={img8}
          /> */}
          {/* </ScrollContainer> */}
        </main>
      </div>
    </div>
  );
}





export default App;
