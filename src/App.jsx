import "./styles/index.css";
import "./styles/audioControl.css";
import { useState } from "react";
import AdditionSettings from "./components/additionalInfo";
import PauseImage from "./components/pauseImage";
import Loading from "./components/loadingImage";
import RadioStations from "./components/radioStations";
import github from "./images/github.png";
import play from "./images/playBtn.png";
import AudioControls from "./components/audioControl";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause"); //pause play change
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    "https://youtu.be/TURbeWK2wwg"
  );

  const [stationName, setStationName] = useState("LofiGirl");


  const [youtubeChannal, setYoutubeChannal] = useState("");

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;

    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

   

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  const [video, setVideo] = useState(
    `//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1`
  );

  // <------------- Radio Change section -------------->

  const LofiGirlVideo = () => {
    setVideo("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1");
    setStationName("LofiGirl");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=-pzxY5DtZIQ"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=-pzxY5DtZIQ"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const AmbientRenders = () => {
    setVideo("//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1");
    setStationName("Rain Lofi");
    setYoutubeChannal(
      "https://youtu.be/_2uVuxLgMGc"
    );
    setLivestream(
      "https://youtu.be/_2uVuxLgMGc"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const IvyRecords = () => {
    setVideo("//www.youtube.com/embed/F1B9Fk_SgI0?autoplay=1&mute=1&start=10");
    setStationName("2 AM");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=OK_EhYuug5I"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=OK_EhYuug5I"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const ChillHiphop = () => {
    setVideo("//www.youtube.com/embed/iEGFFyv0MH4?autoplay=1&mute=1&start=1");
    setStationName("ChillHop Music");
    setYoutubeChannal("https://www.youtube.com/c/Chillhopdotcom/videos");
    setLivestream(
      "https://www.youtube.com/watch?v=7NOSDKb0HlU&ab_channel=ChillhopMusic"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const HFiveGOneFunc = () => {
    setVideo("//www.youtube.com/embed/mPcLc9qgBS8?autoplay=1&mute=1&start=1");
    setStationName("Oceans Lofi");
    setYoutubeChannal(
      "https://www.youtube.com/channel/UCTBsi8PDf1095_67DBFXYCw"
    );
    setLivestream(
      "https://www.youtube.com/watch?v=mPcLc9qgBS8"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const StudyMD = () => {
    setVideo("//www.youtube.com/embed/RjLKkRt9NjQ?autoplay=1&mute=1&start=1");
    setStationName("Can We Kiss Forever");
    setYoutubeChannal(
      "https://youtu.be/qz7tCZE_3wA"
    );
    setLivestream(
      "https://youtu.be/qz7tCZE_3wA"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const astralThrob = () => {
    setVideo("//www.youtube.com/embed/RJcIzUNKSQk?autoplay=1&mute=1&start=1");
    setStationName("Astral Throb");
    setYoutubeChannal("https://www.youtube.com/c/AstralThrob");
    setLivestream(
      "https://www.youtube.com/watch?v=UedTcufyrHc&ab_channel=NightrideFM"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const chilledCow = () => {
    setVideo("//www.youtube.com/embed/lTRiuFIWV54?autoplay=1&mute=1&start=1");
    setStationName("Chilled Cow");
    setYoutubeChannal("https://www.youtube.com/c/LofiGirl");
    setLivestream(
      "https://www.youtube.com/watch?v=lTRiuFIWV54"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const theJazzHopCafe = () => {
    setVideo("//www.youtube.com/embed/U8HBZOTZrf0?autoplay=1&mute=1&start=1");
    setStationName("Lofi chill");
    setYoutubeChannal("https://youtu.be/jur5g_zALZU");
    setLivestream(
      "https://youtu.be/jur5g_zALZU"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const Spinnin = () => {
    setVideo("//www.youtube.com/embed/N65Jb683pXQ?autoplay=1&mute=1&start=0");
    // setVideo("//www.youtube.com/embed/0mydT7N94Pc?autoplay=1&mute=1&start=0");
    setStationName("Interupt  Power ");
    setYoutubeChannal(
      "https://youtu.be/0mydT7N94Pc"
    );
    setLivestream(
      "https://youtu.be/0mydT7N94Pc"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const NiceGuys = () => {
    setVideo("//www.youtube.com/embed/ZX2mjf9dFH8?autoplay=1&mute=1&start=1");
    setStationName("Comfort Chain");
    setYoutubeChannal(
      "https://www.youtube.com/watch?v=ZX2mjf9dFH8"
    );
    setLivestream(
      "https://youtu.be/8b-WwN4H7lE"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const animeVibe = () => {
    setVideo("//www.youtube.com/embed/5B7Rsw0L2r8?autoplay=1&mute=1&start=0");
    setStationName("Call Your Name");
    setYoutubeChannal("https://youtu.be/UfT18Gd1cUw");
    setLivestream(
      "https://youtu.be/UfT18Gd1cUw"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const iDo = () => {
    setVideo("//www.youtube.com/embed/X3ViqgQW4Kk?autoplay=1&mute=1&start=0");
    setStationName("Top Lofi US-UK");
    setYoutubeChannal("https://youtu.be/X3ViqgQW4Kk");
    setLivestream(
      "https://youtu.be/X3ViqgQW4Kk"
    );
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <Link style={{textDecoration: "none"}} to="/" className="logo">Dawn Music</Link>
        <div className="subHeading"></div>
        <div className="radioStationsContainer">
          <RadioStations
            Ambient={AmbientRenders}
            Anime={animeVibe}
            Astral={astralThrob}
            ChillHop={ChillHiphop}
            Cow={chilledCow}
            Spinnin={Spinnin}
            Ivy={IvyRecords}
            High={HFiveGOneFunc}
            Lofi={LofiGirlVideo}
            Study={StudyMD}
            Jazz={theJazzHopCafe}
            Nice={NiceGuys}
            IDo={iDo}
          />
        </div>
        <div className="socialsContainer2">
          <div className="socials">
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.open("https://github.com/");
              }}
              className="link"
            >
              <img className="githubLogo" src={github} alt="" />
              Github
            </motion.div>
          </div>
        </div>
      </div>
      <div className="audioControlContainer">
        <AudioControls
        plauPause={handlePausePlaySwitch}
        buttonClass={BtnClass}
        playPauseImage={playPauseImg}
        buttonClass2={BtnClass2}
        LiveStreamAudio={currentLivestream}
        LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannal} radio={stationName} />
      <div class="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video}
        />
      </div>

      

      <Loading />
    </div>
  );
}

export default App;
