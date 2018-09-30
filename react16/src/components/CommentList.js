import React from 'react'

// class CommentList extends React.Component {
//
// }

class CommentList extends  React.Component{
    constructor (props){
        super(props)
    }
    deleteComment (e) {
        this.props.onDelComment(e.target.getAttribute('data-index'))
    }
    render (){
        return(
            <div className='commont-list-component'>
                <label>评论列表</label>
                <ul className='list-group mb-3'>
                    {
                        this.props.comments.map((comment,index) =>{
                            return <li key={index}className='list-group-item'>{comment} <span className='btn-danger' style={{radius:5}} data-index={index} onClick={this.deleteComment.bind(this)}>删除</span></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

({comments}) =>{

}

export default CommentList