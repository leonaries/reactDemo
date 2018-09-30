import React from 'react'

class CommentBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }
    handleChange (event){
        this.setState({
            value:event.target.value
        })
    }
    
    handleSubmit (event) {
        this.props.onAddComment(this.state.value)
        this.setState({
            value:''
        })
        event.preventDefault()
    }
    render () {
        return (
            <form className='p-5'  onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-group'>
                    <label>留言内容</label>
                    <input type="text" className='form-control' placeholder='请输入留言' value={this.state.value} onChange={this.handleChange.bind(this)}/>
                </div>
                <button type='submit' className="btn btn-primary" >
                    留言
                </button>
                <p>
                    已有{this.props.commentsLength}条评论
                </p>
            </form>
        )
    }
}

export default CommentBox