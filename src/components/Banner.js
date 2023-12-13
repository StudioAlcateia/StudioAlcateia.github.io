import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/ZeOlho1.png";
import hoverImg from "../assets/img/ZeOlho2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  
  const [imgSrc, setImgSrc] = useState(headerImg); // initial image
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ 
    "Jogos de Unity", 
    "Entretendo lobos ao redor do mundo", 
    "Artes e assets para o seu projeto" 
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => Math.max(50, prevDelta * 0.2));
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
      if (!isDeleting) {
        setDelta(prevDelta => Math.max(50, prevDelta * 0.9));
      }
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Estudio Alcateia</h1>
                  <p>{}
                    <span className="txt-rotate" dataPeriod="1000" 
                      data-rotate='[
                        "Jogos de Unity",
                        "Entretendo lobos ao redor do mundo.",
                        "Art assets" ]'
                    ><span className="wrap">{text}</span></span></p>
                  {/* <button onClick={() => console.log('connect')}>Contacte-nos <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <img 
                      src={imgSrc} 
                      alt="Header Img"
                      onMouseOver={() => setImgSrc(hoverImg)}
                      onMouseOut={() => setImgSrc(headerImg)}
                    />
                  </div>}
              </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
