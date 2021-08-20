import Email from './Email'
import '../App.css'

function Emails(props) {
  console.log('inside Emails: ', props.toggleRead)
  console.log('inside Emails toggleStarred:', props.toggleStar)

  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          toggleStar={props.toggleStar}
          toggleRead={props.toggleRead}
          key={index}
          email={email}
        />
      ))}
    </ul>
  )
}

export default Emails
