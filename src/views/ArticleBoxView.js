/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class ArticleBoxView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ArticleBoxController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ArticleBoxView

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
    const proxies = Controller !== ArticleBoxView ? transformProxies(this.props.children) : {
      'name': [],
      'submit': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/deepfakes.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-form-block w-form">
            <form data-name method="post" redirect="/results" data-redirect="/results"><label htmlFor="name" className="af-class-field-label-2">Search by text</label><label htmlFor="article" className="af-class-field-label-3">Copy the text from any article you would like to compare to our Golden Sources and click on the Submit Button</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="article" data-name="article" placeholder="Enter your text article here . . ." id="article" required {...{...props, className: `af-class-text-field-2 w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['submit'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-submit-button-2 w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting your text, Please try again.</div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default ArticleBoxView

/* eslint-enable */