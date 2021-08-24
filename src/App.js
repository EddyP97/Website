import './App.css';
import profile from './header.jpg'
import GitHub from './github-icon.svg'
import LinkedIn from './linkedin-icon.svg'
import Mail from './mail-icon.png'
import StartProfile from './Start.jpg'
import HTML from './html-5.svg'
import CSS from './css-5.svg'
import ReactImg from './react.svg'
import Java from './java-4.svg'
import Python from './python-5.svg'
import Website from './Website.png'

import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  return (
    <div className="Resume">
      <div className="ContentHeader">
        <div className="Nav">
          <div className="NavButton">EP</div>
          <div className="NavButton">Om meg</div>
          <div className="NavButton">Ferdigheter</div>
          <div className="NavButton">Prosjekter</div>
        </div>
        <div className="Profile">
          <img src={profile} alt="Me"/>
          <div className="Me">
            <p className="Name">
              Edward Palm
            </p>
            <p className="Description">
              -Sivilingeniørstudent i kommunikasjonsteknologi og digital sikkerhet
            </p>
          </div>
          <div className="Contact">
            <div className="GitHub"><img src={GitHub} alt="GitHub"/></div>
            <div className="LinkedIn"><img src={LinkedIn} alt="LinkedIn"/></div>
            <div className="Mail"><img src={Mail} alt="Mail"/></div>
          </div>
        </div>
      </div>

      <div className="About">
        <div className="AboutSection">
          <div className="AboutText">
            <div className="Title">
              Hvem er jeg?
            </div>
            <div className="AboutDescription">
              Hei!<br/>
              <br/>
              Jeg heter Edward Palm, er 23 år gammel og kommer fra Bærum.<br/>
              For tiden studerer jeg kommunikasjonsteknologi og digital sikkerhet, et integrert masterstudie på NTNU Trondheim.<br/>
              Jeg begynte på studiet høsten 2018 og vil være ferdig våren 2023.<br/>
              <br/> 
              På fritiden er jeg aktiv i Start NTNU og ekskusjonskomitén til studiet, og har tidligere vært en del av UKA-19. I tillegg spiller jeg fotball på Datakameratene FK, ivrig tilhenger av Leeds United
              og har forskjellige teknologiske prosjekter.<br/>
            </div>
          </div>
          <div className="StartPicture">
            <img src={StartProfile} alt="Start"/>
          </div>
        </div>
      </div>

      <div className="Skills">
        <div className="SkillsSection">
          <div className="Title">
            Ferdigheter
          </div>
        <div className="DifferentSkills">
          <div className="HTMLCSS">
            <div className="Card">
              <div className="SkillImage"><img src={HTML} alt="HTML"/><img src={CSS} alt="CSS"/></div>
                <div className="CardContent">
                    <h4>HTML + CSS</h4>
                    Lærte da jeg gikk på VGS. Har ikke gjort så mye etter, så litt rusten.
                    <div className="ProgressBar">
                      Mestringsnivå <br/>
                      &#9733;&#9733;&#9733;&#9734;&#9734;
                  </div>
                </div>
              </div>
            </div>

            <div className="React">
              <div className="Card">
                <div className="SkillImage"><img src={ReactImg} alt="React"/></div>
                  <div className="CardContent">
                    <h4>React</h4>
                    Læres på egenhånd for å utfordre meg selv. Denne nettsiden er første prosjekt.
                    <div className="ProgressBar">
                      Mestringsnivå <br/>
                      &#9733;&#9733;&#9734;&#9734;&#9734;
                    </div>
                  </div>
                </div>
            </div>

            <div className="Java">
              <div className="Card">
                <div className="SkillImage"><img src={Java} alt="Java"/></div>
                  <div className="CardContent">
                    <h4>Java</h4>
                    Lærte i mitt andre semester på studiet, har også vedlikeholdt i etterkant.
                    <div className="ProgressBar">
                      Mestringsnivå <br/>
                      &#9733;&#9733;&#9733;&#9733;&#9734;
                   </div>
                </div>
              </div>
            </div>

            <div className="Python">
              <div className="Card">
                <div className="SkillImage"><img src={Python} alt="Python"/></div>
                  <div className="CardContent">
                    <h4>Python</h4>
                      Første språket jeg lærte på studiet, men har også blitt brukt i andre semestre. <br/>
                      <div className="ProgressBar">
                        Mestringsnivå <br/>
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>
              </div>
            </div>

            <div className="PersonalSkills">
              <div className="CardPerson Card">
                <div className="PersonalHeader SkillImage">Personlige Egenskaper</div>
                  <div className="PersonalSkillsContent CardContent">
                    Motivasjon <br/>
                    <div className="Motivation ProgressBar">
                      <ProgressBar animated now={100} label={`${100}%`}/>
                    </div>
                    Problemløsning <br/>
                    <div className="ProblemSolving ProgressBar">
                      <ProgressBar animated now={75} variant="success" label={`${75}%`}/>
                    </div>
                    Teamarbeid <br/>
                    <div className="Teamwork ProgressBar">
                      <ProgressBar animated now={85} variant="warning" label={`${85}%`}/>
                    </div>
                    Pålitelig  <br/>
                    <div className="ProgressBar">
                      <ProgressBar animated now={100} variant="danger" label={`${100}%`}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="Projects">
        <div className="ProjectSection">
        <div className="Title">
          Prosjekter
         </div>
        <div className="Project">
          <div className="ProjectName">
          01. Nettside
          </div>
          <div className="ProjectDescription">
            <p className="ProjectText">Nettside laget med React for å lære React og kode i javascript.</p>
            <img src={Website} alt="Website"/>
          </div>
        </div>

        <div className="SecondProject Project">
          <div className="ProjectName">
          02. Annet
          </div>
          <div className="ProjectDescriptionSecond ProjectDescription">
            <p className="ProjectText">Nettside laget med React for å lære React og kode i javascript.</p>
            <img src={Website} alt="Website"/>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
