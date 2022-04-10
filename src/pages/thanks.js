import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Mensaje recibido!</h1>
      <p>Gracias por contactar conmigo. Te responderé lo antes posible.</p>
      <Link to="/" className="button"             sx={{
              variant: "variants.button",
            }}
            >
        <span className="icon -left"><RiArrowLeftSLine /></span>
        Volver a inicio
      </Link>

    </div>
  </Layout>
)

export default Thanks
