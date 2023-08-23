import Image from "next/image";
import "./aboutStyle.css";
import imageAsset from "/public/images/1.jpg";
const About = () => {
  return (
    <main>
      <div className="heading">
        <h1>About us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          veritatis, quaerat corrupti tempore expedita repellendus omnis, minima
          saepe cumque debitis, labore inventore perferendis rem officiis
          voluptatibus. Nam quo in asperiores?
        </p>
      </div>

      <div className="container">
        <section className="about">
          <div className="about-image">
            <Image className="image" src={imageAsset} />
          </div>

          <div className="about-content">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              earum animi ad rem, repellat veritatis cupiditate numquam aliquid
              dolor, voluptatum distinctio id aperiam. Provident facilis magnam
              vero veritatis, iusto voluptatem.Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Facere veritatis, quaerat corrupti
              tempore expedita repellendus omnis, minima saepe cumque debitis,
              labore inventore perferendis rem officiis voluptatibus. Nam quo in
              asperiores?
            </p>
            <a href="" className="read-more">
              Read more
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
