import React from 'react'

export default function Input(props) {
    const {label, errormsg, ...restProps} = props
  return (
    <div className={`my-4`}>
      <label>{label}</label>
      <input className={`border-2 p-4 w-full mt-1`} {...restProps} />
      <span className={`text-red-600`}>{errormsg}</span>
    </div>
  );
}
