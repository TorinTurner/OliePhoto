import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from 'react-modal';

const About = () => {
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <Layout>
      <SEO title="About" />
      <h1>About Me</h1>
      <p>Welcome to my photography portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit suscipit ipsum, in rhoncus turpis blandit eu. Phasellus nec enim non est sagittis maximus.</p>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>About Me</h2>
        <p>Some text here...</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </Layout>
  )
}

export default About;
