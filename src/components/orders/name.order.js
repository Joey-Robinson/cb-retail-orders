import React from "react"

const OrderName = ({ onSubmit, value, onChange }) => {
  return (
    <div className="name">
      <label htmlFor="name--input">
        <span>Name:</span>
      </label>
      <form onSubmit={onSubmit} className="field">
        <input
          id="name--input"
          label="Name"
          aria-label="Name"
          value={value}
          onChange={onChange}
          type="text"
        />
      </form>
    </div>
  )
}

export default OrderName
