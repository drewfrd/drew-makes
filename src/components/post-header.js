import React from "react"
import moment from "moment"
import momentDurationFormat from "moment-duration-format"

const PostHeader = ({frontmatter}) => {

  momentDurationFormat(moment);
  // console.log('durationformatter', typeof moment.duration.fn.format === "function")

  const now = moment(new Date()); //todays date
  const end = moment(`${frontmatter.date}`); // another date
  const duration = moment.duration(now.diff(end));
  const days = duration.asDays();
  console.log(days)

  console.log('format', moment.duration(duration, "days").format())

return (
  <>
      
      <h1 style={{marginBottom: '.6rem'}}>
      {frontmatter.title} </h1> 
      <p style={{marginBottom: '.5rem', fontSize: '15px'}}>{moment.duration(duration, "days").format()} ago</p>
  </>
) }

export default PostHeader