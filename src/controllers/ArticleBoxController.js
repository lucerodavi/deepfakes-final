import React from 'react'
import ArticleBoxView from '../views/ArticleBoxView'

class ArticleBoxController extends React.Component {
  state = {}

  render() {
    return(
      <ArticleBoxView>
        <textarticle onChange={this.setArticle} />
        <submit onClick={this.submit} />
      </ArticleBoxView>
    )
  }

  setArticle = (e) => {
    this.setState({
      article: e.target.value
    })
  }

  submit = () => {
    this.props.history.push('/projects', {
      article: this.state.article
    })
  }

}
export default ArticleBoxController
