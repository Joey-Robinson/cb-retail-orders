import React from "react"

const MainOrder = ({ onSubmit, value, onChange }) => {
  return (
    <div className="name">
      <label htmlFor="order--input">
        <span>Order:</span>
      </label>
      <form onSubmit={onSubmit} className="field">
        <input
          id="order--input"
          label="Order"
          aria-label="Order"
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Order"
        />
      </form>
    </div>
  )
}

export default MainOrder
