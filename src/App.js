import { useState } from 'react';
import './App.css';

// Rockband Database Object
const rockBandsList = {
  "Royal Blood": [
    {
      Name: "Honey Brains",
      Image: "https://i.scdn.co/image/ab67616d00001e0225cdd5950e5dc0f313fe552d",
      Youtube: "https://www.youtube.com/watch?v=dsMU2pOCBuw"
    },
    {
      Name: "Trouble's Coming",
      Image: "https://i.scdn.co/image/ab67616d00001e02fcaaab24c5357795473d93fc",
      Youtube: "https://www.youtube.com/watch?v=uURsMKMloM8"
    },
    {
      Name: "Come on Over",
      Image: "https://i.scdn.co/image/ab67616d00001e025c101477a3e62081cd7a156f",
      Youtube: "https://www.youtube.com/watch?v=nG1gRK5b_v0"
    }
  ],
  "The Black Keys": [
    {
      Name: "Wild Child",
      Image: "https://i.scdn.co/image/ab67616d00001e02e13f7331e9f3d53c7a3a1309",
      Youtube: "https://youtu.be/KKSmHOUaqaQ?t=68"
    },
    {
      Name: "Shine A Little Light",
      Image: "https://i.scdn.co/image/ab67616d00001e0226ff57bc134aa594b08bf721",
      Youtube: "https://www.youtube.com/watch?v=Jknn7MMszNo"
    },
    {
      Name: "Tighten Up",
      Image: "https://i.scdn.co/image/ab67616d00001e02995cafb297bbedb4795bc673",
      Youtube: "https://www.youtube.com/watch?v=mpaPBCBjSVc"
    }
  ],
  "Arctic Monkeys": [
    {
      Name: "Do I Wanna Know?",
      Image: "https://i.scdn.co/image/ab67616d00001e027ba54b0fa3fe1c986a318446",
      Youtube: "https://www.youtube.com/watch?v=bpOSxM0rNPM"
    },
    {
      Name: "R U Mine?",
      Image: "https://i.scdn.co/image/ab67616d00001e02b47993a314c504506062cfb3",
      Youtube: "https://www.youtube.com/watch?v=VQH8ZTgna3Q"
    },
    {
      Name: "Brianstorm",
      Image: "https://i.scdn.co/image/ab67616d00001e02de84ee52f85d15d3c2b22d31",
      Youtube: "https://www.youtube.com/watch?v=30w8DyEJ__0"
    }
  ],
  "The Blue Stones": [
    {
      Name: "Shakin' Off the Rust",
      Image: "https://i.scdn.co/image/ab67616d00001e02c2ec1a1158703ba02e47dae7",
      Youtube: "https://www.youtube.com/watch?v=h95STxWYTL0"
    },
    {
      Name: "Let it Ride",
      Image: "https://i.scdn.co/image/ab67616d00001e02c6478ddd75de2ac2013d9273",
      Youtube: "https://www.youtube.com/watch?v=Vfi_LXFbLKY"
    },
    {
      Name: "Spirit",
      Image: "https://i.scdn.co/image/ab67616d00001e02be2c7a89ec04c4bb50d26a08",
      Youtube: "https://www.youtube.com/watch?v=psTtPoCdRcA"
    }
  ]
}

function App() {
  const [bandName, setBandName] = useState("Royal Blood");

  // Click function for Bandnames
  function artistClickHandler(bandName) {
    setBandName(bandName);
  }
  
  return (
    <div className="App">
      {/* Header and Navbar */}
      <header>
        <h1 className='heading'>🤘 Rock Bands 🤘</h1>
        <nav className='band-name-list'>
          {/* Converting Object-keys to Bandname array */}
          {Object.keys(rockBandsList).map(bandName => 
            <li key={bandName} className="band-name" onClick={()=> artistClickHandler(bandName)}>{bandName}</li>
          )}
        </nav>
      </header>

      {/* Divider and Para */}
      <div className='divider'></div>
      <h2 className='para'>Click on the image to listen the song</h2>

      {/* Displaying Songs */}
      <main className='container'>
        {rockBandsList[bandName].map(song => 
          <a className='song-info' key={song.Number} href={song.Youtube} target="_blank">
            <img className='song-image' src={song.Image} alt={song.Name} />
            <span className='song-name'>{song.Name}</span>
          </a>
        )}
      </main>
    </div>
  );
}

export default App;