import React, {useState} from "react"

const SocialLink = ({href, text, emoji}) => {

  const [hover, setHover] = useState(false);
  
  const onMouseEnterAndLeave = (event) => {
    event.preventDefault();
    setHover(!hover);
  }
  return (
    <a href={href} style={{textDecoration: 'none'}}> <li onMouseEnter={onMouseEnterAndLeave} onMouseLeave={onMouseEnterAndLeave} style ={{ 
      padding: '.5rem', margin: '0'
    }}>
      <h2 className={`${hover ? 'underline' : 'no-underline'}`} style={{fontSize: '.8em', fontWeight: '200'}}>
      <span
        className={`${hover ? 'rotate' : ''}`}
        role="img"
        aria-label={emoji.label ? emoji.label : ""}
        aria-hidden={emoji.label ? "false" : "true"}
       >
        {emoji.symbol}
    </span>
      {text}</h2>
    </li> </a>
  )
}

export default SocialLink