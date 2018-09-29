import React,{Component} from 'react'
//引入Echarts 主模块
import echarts from 'echarts/lib/echarts'


export default class Resource extends Component{
    componentDidMount () {
        //基于准备好的dom，初始化echarts实例
        let myChart =echarts.init(document.getElementById('Resource'))
        //绘制图表
        myChart.setOption({
            title:{text:'ECHarts入门示例'},
            tooltip:{},
            xAxis:{
                data:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis:{},
            series:[{
                name:'销量',
                type:'bar',
                data:[5,20,36,10,10,20]
            }]
        })
    }
    render () {
        return (
            <div id='Resource' style={{width:300,height:600}}>
                资源共享
            </div>
        )
    }
}