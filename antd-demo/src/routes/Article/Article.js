import React,{Component} from 'react'
//引入Echarts 主模块
import echarts from 'echarts'
export default class Article extends Component{
    componentDidMount (){
        echarts.init(document.getElementById('Article')).setOption({
            series:{
                type:'pie',
                roseType:'angle',
                radius:'55%',
                data:[
                    {name:'A',value:1212},
                    {name:'B',value:2323},
                    {name:'C',value:1919}
                ],
                itemStyle: {
                    // 阴影的大小
                    shadowBlur: 200,
                    // 阴影水平方向上的偏移
                    shadowOffsetX: 0,
                    // 阴影垂直方向上的偏移
                    shadowOffsetY: 0,
                    // 阴影颜色
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    emphasis: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    color: '#c23531',
                },
                backgroundColor: '#2c343c',
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        })
    }
    render () {
        return (
            <div id='Article' style={{width:300,height:300}}>
                文章分享
            </div>
        )
    }
}