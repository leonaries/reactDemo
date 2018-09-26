import React,{Component} from 'react'
import './Footer.less'

export default class Footer extends Component {
    state = {
        FooterContent : '这是底部'
    }
    render () {
        return (
            <div id='Footer'>
                {this.state.FooterContent}
            </div>
        )
    }
}