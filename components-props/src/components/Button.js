function Button (props) {
  return (
    <a href={props.url}><button>{props.content}</button></a>
  )
}

export default Button;