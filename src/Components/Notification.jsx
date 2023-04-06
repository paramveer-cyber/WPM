import React from 'react'

export default function Notification(props) {
  return (
    props.msg && <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
      <strong>{props.msg}</strong>
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
