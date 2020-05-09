import React, { useState } from "react"
import MainOrder from "../components/orders/main.order"
import OrderName from "../components/orders/name.order"
import "../styles/main.css"

const App = () => {
  const [nameOfOrder, setNameOfOrder] = useState("")
  const [nameOfCourse, setNameOfCourse] = useState("")

  const nameOfOrderChangeHandler = (event) => {
    setNameOfOrder(event.target.value)
  }

  const nameOfCourseChangeHandler = (event) => {
    setNameOfCourse(event.target.value)
  }

  // const onSubmitHandler = (event) => {
  //   if (event.key === 13) {
  //     event.preventDefault()
  //     setOrderName(event.target.value)
  //     console.log(orderName)
  //   } else {
  //     event.preventDefault()
  //     setOrderName(event.target.value)
  //     console.log(orderName)
  //   }
  // }

  return (
    <main>
      <div>
        <OrderName
          onChange={nameOfOrderChangeHandler}
          onSubmit={(event) => event.preventDefault()}
          value={nameOfOrder}
        />
      </div>
      <div>
        <MainOrder
          onChange={nameOfCourseChangeHandler}
          onSubmit={(event) => event.preventDefault()}
          value={nameOfCourse}
        />
      </div>
      <section>
        <h1>Name: {nameOfOrder}</h1>
        <h2>Order: {nameOfCourse}</h2>
      </section>
    </main>
  )
}

export default App
