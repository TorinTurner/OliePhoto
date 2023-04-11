import { Link } from "gatsby"
import React, { useState } from "react"
import profileImage from '../../images/profile.png'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSiteMetadata } from "../../utils/hooks"
import { Categories, Content, Subtitle, Title, Wrapper } from "./styles"
import Modal from "../modal.js";

const linkStyle = {
  textDecoration: "none",
}

const Sidebar = ({ categories }) => {
  const { title } = useSiteMetadata()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <Wrapper>
      <Content>
        <Link to="/" style={linkStyle}>
          <Title>{title}</Title>
        </Link>
        <Subtitle>Menu</Subtitle>
        <nav>
          <Categories>
            <Link to="#" style={linkStyle} onClick={() => setModalIsOpen(true)}>
              <li>About Me</li>
            </Link>
            {categories.map(({ node: { name } }) => {
              if (name === "Main") return null
              return (
                <Link
                  key={name}
                  to={`/${name}`}
                  style={linkStyle}
                  activeStyle={{
                    color: "blue",
                  }}
                >
                  <li>{name}</li>
                </Link>
              )
            })}
          </Categories>
        </nav>
        <div style={{ marginTop: "auto" }}>
          <p style={{ marginBottom: "8px" }}>Built by <a href="https://8squaredplus5.com">Torin</a>   © {new Date().getFullYear()}</p>
        </div>
      </Content>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "transparent",
              marginRight: "20px",
              marginTop: "20px",
            }}
          >
            <img src={profileImage} alt="profile image" style={{ width: "100px", height: "auto", borderRadius: "50%" }} />
          </div>
          <div>
            <h2 style={{ marginBottom: 0 }}>Olie Turner</h2>
            <p style={{ margin: 0 }}>PADI Divemaster, Freelance Photographer</p>
          </div>
        </div>
        <div className="text-box">
          <h1>Hello!</h1>
          <modaldesc>I am based out of Oahu and I have been diving since 2020. I immediately became mesmerized by the underwater world. It all started with a GoPro and it quickly evolved into a full underwater setup. I enjoy capturing the small things that everyone passes by. I have recently started exploring more than the underwater world and gotten into landscape, astrophotography, and just nature in general. I'm passionate about sharing my photos and I hope to show you the little things that you never knew you were missing.</modaldesc>
        </div>
        <button onClick={() => setModalIsOpen(false)} style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "white", border: "2px solid black", borderRadius: "50%", width: "2.5rem", height: "2.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
      </Modal>
    </Wrapper>
  )
}

export default Sidebar
