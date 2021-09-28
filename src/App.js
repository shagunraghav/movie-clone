
import Header from './components/Header'; 
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests  from './components/request';

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <Row 
        isLargeRow = {true}
        title ="ORIGINALS"
        fetchUrl= {requests.fetchNetFlixOriginals}
    />
    <Row 
        isLargeRow = {false}
        title ="Trendings"
        fetchUrl= {requests.fetchTrending}
    />
    <Row 
        
        title ="Top Rated"
        fetchUrl= {requests.fetchTopRated}
    />
    <Row 
        isLargeRow = {false}
        title ="Action Movies"
        fetchUrl= {requests.fetchActionMovies}
    />
    <Row 
        isLargeRow = {false}
        title ="Romantic Movies"
        fetchUrl= {requests.fetchRomanticMovies}
    />
    <Row 
        isLargeRow = {false}
        title ="Comedy Movies"
        fetchUrl= {requests.fetchComedyMovies}
    />
    <Row 
        isLargeRow = {false}
        title ="Horror Movies"
        fetchUrl= {requests.fetchHorroMovies}
    />
    <Row 
        isLargeRow = {false}
        title ="Documentary Movies"
        fetchUrl= {requests.fetchDocumentaries}
    />

    </div>
  );
}

export default App;
