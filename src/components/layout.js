import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Modal from "react-modal"
import About from "../pages/about"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    maxWidth: "600px", // Set a maximum width for the modal
    overflow: "auto", // Allow the modal to scroll if necessary
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Set the background color of the overlay
    zIndex: 1000, // Set a higher z-index value to ensure the modal appears on top of other elements
  },
};



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allDirectory(filter: { sourceInstanceName: { eq: "images" }, name: { ne: "about" } }) {
        nodes {
          name
          relativePath
        }
      }
    }
  `)

  const folders = data.allDirectory.nodes.map(node => ({
    name: node.name,
    path: `/images/${node.relativePath}`,
  }))

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
    { name: "Gallery", path: "/gallery/" },
    ...folders,
  ]

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <nav>
        <ul>
          {navLinks.map(link => (
            <li key={link.path}>
              {link.name === "About" ? (
                <a onClick={openModal}>{link.name}</a>
              ) : (
                <Link to={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="About Me"
      >
        <About />
      </Modal>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built by
          {` `}
          <a href="https://8squaredplus5.com">Torin Turner</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
