// Importojmë skedarin app.css që përmban stilet e aplikacionit
import "./App.css";

// Importojmë komponentin ProfileCard
import ProfileCard from "./ProfileCard";

// Importojmë imazhet që do të shfaqen në profile
// Këto imazhe janë të vendosura në dosjen images
// dhe janë importuar për t'u përdorur në komponentin ProfileCard
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

// Lista e të dhënave për secilin profil
const data = [
  {
    title: "Alexa",
    handle: "@alexa99",
    image: AlexaImage,
    description:
      "Alexa is a virtual assistant AI technology based on the cloud.",
  },
  {
    title: "Cortana",
    handle: "@cotana32",
    image: CortanaImage,
    description: "Cortana is a virtual assistant created by Microsoft.",
  },
  {
    title: "Siri",
    handle: "@siri01",
    image: SiriImage,
    description: "Siri is a virtual assistant created by Apple.",
  },
];

function App() {
  return (
    <>
      {/* <> Fragmentet janë një mënyrë për të grupuar elementët pa krijuar një element të ri në DOM  </> */}

      <div className="title">Personal Digital Assitants</div>

      <div className="cards-container">
        {data.map((item) => (
          <ProfileCard
            key={item.handle} // Unik ID për secilin element në listë i detyruar nga React sa herë që përdorim map
            title={item.title}
            handle={item.handle}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
