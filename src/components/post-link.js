import React, { useState } from "react"
import { Link } from "gatsby"

import PostHeader from "../components/post-header"

const PostLink = ({ post }) => {

  const [hover, setHover] = useState(false);

  const onMouseEnterAndLeave = (event) => {
    event.preventDefault();
    setHover(!hover);
  }

  return(
    <Link style={{textDecoration: 'none'}} to={post.frontmatter.path}>
      
      <div onMouseEnter={onMouseEnterAndLeave} onMouseLeave={onMouseEnterAndLeave} className="card-color" style={{ position: 'relative', margin: '1rem', padding: '1rem', borderRadius: '5px'}}>
        <span className={`${hover ? 'show' : 'hide'}`} style={{position: 'absolute', left: '-40px', top: '21px', fontSize: '1.8rem'}} role="img" aria-label="active-pointer">👉</span>
        <PostHeader frontmatter={post.frontmatter} />
        <p style={{marginBottom: '.5rem'}}>{post.excerpt}</p>
      </div>
    </Link>
  )
}

export default PostLink