import Title from "@atoms/Title"
import React from "react"

const Form = () => {
  return (
    <div>
      <Title className="m-auto mt-40 w-fit">Scrivici</Title>
      <iframe
        src="https://tally.so/embed/m6jLY5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="60%"
        height="350"
        frameBorder={0}
        className="m-auto"
      />
    </div>
  )
}

export default Form
