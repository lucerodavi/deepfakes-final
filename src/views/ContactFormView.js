/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class ContactFormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactFormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactFormView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== ContactFormView ? transformProxies(this.props.children) : {
      'date': [],
      'text': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/deepfakes.webflow.css);
        ` }} />
        <span className="af-view">
          <div id="contact-form" className="af-class-contact-form-2">
            <div className="w-container">
              <h2>Search accuracy by Text</h2>
              <p>Copy the text from any article you would like to compare to our Golden Sources and click on the Submit Button</p>
              <div className="w-form">
                <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="post" redirect="/projects" data-redirect="/projects">
                  <div className="af-class-contact-form-grid-2">
                    <div id="w-node-0e9e3bc05e7c-5cb757be" className="af-class-div-block-2">{map(proxies['date'], props => <input type="text" maxLength={256} name="date" data-name="date" placeholder="Enter Article Date" id="date" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['text'], props => <textarea data-name="Message" maxLength={5000} id="Message" name="Message" placeholder="Enter your text here. . ." {...{...props, className: `af-class-textarea w-input ${props.className || ''}`}}>{props.children}</textarea>)}</div>
                  </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." ap-sock="submit" className="af-class-submit-button w-button" />
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default ContactFormView

/* eslint-enable */