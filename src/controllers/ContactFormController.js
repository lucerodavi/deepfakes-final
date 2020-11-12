import React from 'react'
import ContactFormView from '../views/ContactFormView'

class ContactFormView extends React.Component {
  state = {}

  render() {
    return(
      <ContactFormView>
  //      <date onChange={this.setDate} />
        <text onChange={this.setText} />
        <submit onClick={this.submit} />
      </ContactFormView>
    )
  }

  setText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  submit = () => {
    this.props.history.push('/projects', {
      text: this.state.text
    })
  }

}
export default ContactFormController
