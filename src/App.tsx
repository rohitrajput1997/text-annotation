/** @format */

import React from "react"
import "./App.css"
import TextAnnotateBlend from "./components/TextAnnotateBlend"
// import { TextAnnotateBlend } from "react-text-annotate-blend";

/*
Stateful example with typescript.
*/ interface Tag {
  start: number
  end: number
  text: string
  tag: string
  color: string
  id: number
}
const init: Tag[] = []

const demoText =
  "Reserve Bank of India Governor Shaktikanta Das has termed cryptocurrencies a ‘clear danger’, adding that anything that derives value based on make believe is ‘just speculation under a sophisticated name’."

type COLOR_TYPE = {
  [key: string]: string
  Pen: string
  Notebook: string
  Schoolbag: string
  Pencil: string
}

function App() {
  const [value, setValue] = React.useState(init)
  const [tag, setTag] = React.useState("")

  const handleChange = (value: Tag[]) => {
    console.log(value)
    setValue(value)
  }

  const COLORS: COLOR_TYPE = {
    Book: "#FF33FF",
    Pen: "#E6B333",
    Notebook: "#FFFF99",
    Schoolbag: "#00B3E6",
    Pencil: "#3366E6",
  }

  return (
    <div style={{ padding: 20 }}>
      <div>
        <TextAnnotateBlend
          style={{
            fontSize: "1.2rem",
          }}
          content={demoText}
          onChange={handleChange}
          value={value}
          getSpan={(span) => ({
            ...span,
            tag: tag,
            color: COLORS[tag],
          })}
        />
      </div>

      <select onChange={(e) => setTag(e.target.value)}>
        {Object.keys(COLORS).map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>

      <h3>Current Stored Value</h3>
      <div>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
