import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import bgImage from "./background.jpg";
import { MapPin } from "lucide-react";

import Downlight from "./assets/Downlight.jpg";
import Tracklights from "./assets/Tracklights.jpg";
import WallLight from "./assets/wall-light.jpg";
import LedStrip from "./assets/ledstrip.jpg";
import Spotlight from "./assets/spotlight.jpg";
import Profile from "./assets/profile.jpg";

import Spotlight1 from "./assets/spotlight1.jpg";
import Tracklight1 from "./assets/tracklight1.jpg";
import Profilelight1 from "./assets/profilelight1.jpg";
import Downlight1 from "./assets/Downlight1.jpg";
import Ledstrip1 from "./assets/ledstrip1.jpg";
import WallLight1 from "./assets/wall-light1.jpg";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  requirement: "",
  message: ""
});

const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

};

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      "https://sreekarthikenterprises.onrender.com/api/contact",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    if (data.success) {

      alert("Inquiry Submitted Successfully");

      setFormData({
        name: "",
        phone: "",
        requirement: "",
        message: ""
      });

    }

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  }

};
  const products = [
    {
      image: Downlight,
      title: "Downlights",
      desc: "Premium recessed lighting solutions designed for modern luxury interiors and ambient ceiling illumination.",
    },
    {
      image: Tracklights,
      title: "Track Lights",
      desc: "Architectural lighting systems offering flexibility, precision, and elegant modern aesthetics.",
    },
    {
      image: WallLight,
      title: "Wall Lights",
      desc: "Luxury decorative wall fixtures crafted to enhance interior ambience with warm sophisticated lighting.",
    },
    {
      image: LedStrip,
      title: "LED Strip Lights",
      desc: "Modern ambient lighting solutions ideal for ceilings, furniture highlights, and cinematic interiors.",
    },
    {
      image: Spotlight,
      title: "Spot Lights",
      desc: "Focused premium lighting solutions perfect for highlighting artwork, textures, and luxury spaces.",
    },
    {
      image: Profile,
      title: "Profile Lights",
      desc: "Elegant linear lighting systems delivering clean, minimal, and futuristic interior illumination.",
    },
  ];

  const gallery = [
    Spotlight1,
    Tracklight1,
    Profilelight1,
    Downlight1,
    Ledstrip1,
    WallLight1,
  ];

  const services = [
    {
      title: "Lighting Consultation",
      desc: "Professional guidance for luxury residential and commercial spaces.",
    },
    {
      title: "Interior Planning",
      desc: "Customized lighting concepts aligned with interior architecture.",
    },
    {
      title: "Product Distribution",
      desc: "Premium lighting products sourced for modern projects.",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored lighting systems for immersive experiences.",
    },
  ];

  const clients = [
    "Taj Krishna",
    "Bikanervala",
    "Pista House",
    "Dr. Reddy's Laboratories",
    "MEIL",
    "Tech Mahindra",
    "VNRVJIET",
    "Varun Motors",
    "NEXA",
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="container nav-container">
          <div className="logo-wrapper">
            <div className="logo">SREE KARTHIK</div>
            <span className="logo-sub">ENTERPRISES</span>
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#gallery">Gallery</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              Bright Spaces. <span className="gold">Better Living.</span>
            </h1>

            <p>
              Premium interior lighting solutions crafted for luxury homes,
              modern commercial environments, architects, and cinematic interiors.
            </p>

            <div className="btn-group">
              <a href="#products">
                <button className="btn btn-primary">
                  Explore Products
                </button>
              </a>

              <a href="#contact">
                <button className="btn btn-outline">
                  Get Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Sree Karthik Enterprises</h2>
            <p>Luxury lighting crafted for modern architecture.</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Who We Are</h3>
              <p>
                Sree Karthik Enterprises delivers premium decorative and
                architectural lighting solutions for luxury homes, commercial
                interiors, builders, architects, and interior designers.
              </p>
            </div>

            <div className="about-card">
              <h3>Why Choose Us</h3>
              <p>
                We combine futuristic aesthetics, elegant lighting concepts,
                and premium product quality to create immersive and luxurious
                lighting experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products">
        <div className="container">
          <div className="section-title">
            <h2>Lighting Categories</h2>
            <p>Elegant lighting solutions for every interior.</p>
          </div>

          <div className="product-grid">
            {products.map((item, index) => (
              <div className="product-card" key={index}>
                <img src={item.image} alt={item.title} />

                <div className="product-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="container">
          <div className="section-title">
            <h2>Luxury Interior Gallery</h2>
            <p>
              Modern lighting inspirations and premium interior environments.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((img, index) => (
              <img src={img} alt={`gallery-${index}`} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-section">
        <div className="container">
          <div className="section-title">
            <h2>Trusted By Leading Brands</h2>
            <p>
              Premium lighting solutions delivered for luxury hospitality,
              commercial, and corporate environments.
            </p>
          </div>

          <div className="clients-slider">
            <div className="clients-track">
              {[...clients, ...clients].map((client, index) => (
                <div className="client-card" key={index}>
                  <h3>{client}</h3>

                  <p>
                    Premium lighting and architectural ambience solutions
                    crafted for modern commercial interiors.
                  </p>

                  <div className="client-stars">★★★★★</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>End-to-end lighting expertise for modern spaces.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-box" key={index}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">

  <div className="container">

    <div className="section-title">

      <h2>Contact Us</h2>

      <p>
        Let's illuminate your next luxury interior project.
      </p>

    </div>

    <div className="contact-layout">

      {/* LEFT SIDE */}

     <div className="contact-left">

  <div className="contact-info-card">

          <h3>Get In Touch</h3>

          <div className="info-item">
            <strong>Phone</strong>
            <span>+91 9246246228</span>
          </div>

          <div className="info-item">
            <strong>WhatsApp</strong>
            <span>+91 9246246228</span>
          </div>

          <div className="info-item">
            <strong>Email</strong>
            <span>philips.karthik@gmail.com</span>
          </div>

          <div className="info-item">

  <strong>Location</strong>

  <a
    href="https://www.google.com/maps/place/7-1-111,+near+Gurudwara+Saheb,+Ameerpet,+Swathi+Avenue,+Ameerpet,+Hyderabad,+Telangana+500016/@17.4359893,78.4479369,19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3bcb911815770a6f:0xe3ede77279d3cd74!2sWaffle+Studio!8m2!3d17.4357412!4d78.4485593!16s%2Fg%2F11q1sc1ttf!3m5!1s0x3bcb90c8ecaaf297:0xb097bbb2b201c22f!8m2!3d17.4359893!4d78.4485806!16s%2Fg%2F11cshh3_vx?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noreferrer"
    className="map-link"
  >

    <MapPin size={18} />

    <span>Open in Google Maps</span>

  </a>

</div>

          <div className="info-item">
            <strong>Working Hours</strong>
            <span>10:00 AM - 8:00 PM</span>
          </div>

          <a
            href="https://wa.me/919246246228"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="contact-form-card">

        <h3>Inquiry Form</h3>

       <form onSubmit={handleSubmit}>

          <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
/>

          <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
/>

          <select
  name="requirement"
  value={formData.requirement}
  onChange={handleChange}
>

  <option>Select Requirement</option>

  <option>Home Lighting</option>

  <option>Commercial Lighting</option>

  <option>False Ceiling Lights</option>

  <option>Luxury Interior Consultation</option>

</select>

          <textarea
  name="message"
  placeholder="Tell us about your project"
  value={formData.message}
  onChange={handleChange}
></textarea>

          <button className="btn btn-primary">
            Submit Inquiry
          </button>

        </form>

      </div>

    </div>

  </div>

</section>

      {/* FOOTER */}
      <footer>
        © 2026 Sree Karthik Enterprises. All Rights Reserved.
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);