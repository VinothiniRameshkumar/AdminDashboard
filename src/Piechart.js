import React, { Component } from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';

 class Dyanamic extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartdata:{
                getdata :[]
              
             
            
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend : true,
        legendPosition : 'bottom'
    }
    componentDidMount(){
        console.log(this.getData)
        this.getData();

    }
    getData()
    {
        console.log(this.getData)
        var chartdata = [
            
          
                {
                    "label": "TATA-PUDHUKOTTAI",
                    "SalesAmount": 10.7600
                  },
                  {
                    "label": "TATA-PUDHUKOTTAI",
                    "SalesAmount": 10.7600
                  },
                  {
                    "label": "TATA-PUDHUKOTTAI",
                    "SalesAmount": 10.7600
                  },
            
            
        ]
    }

       
    render() {
        return (
            <div className="chart container">
            <Bar
             data={this.state.getData}
              options={{ 
               title:{
                   display:this.props.displayTitle,
                   text:'Customer Data',
                   fontSize:25
               },
               legend:{
                   display:this.props.displayLegend,
                   position:this.props.legendPosition
               }
               }}
               />
                </div>
        );
    }
}
export default Dyanamic;