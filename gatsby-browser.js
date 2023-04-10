import React from "react"
import ReactDOM from "react-dom"
import Modal from "react-modal"
import About from "./src/pages/about"
import "@fortawesome/fontawesome-free/css/all.css"

Modal.setAppElement("#___gatsby")

export const wrapRootElement = ({ element }) => (
  <React.Fragment>
    {element}
    <Modal
      isOpen={false}
      onRequestClose={() => {
        document.body.style.overflow = "unset"
      }}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          margin: "auto",
          maxWidth: "600px",
          padding: "20px",
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        },
      }}
    >
      <About />
    </Modal>
  </React.Fragment>
)
