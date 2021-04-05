import axios from 'axios';
import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plots:[],
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }

    componentDidMount() {
        this.getdata()
    }

    getdata() {
        const type = {
            startDate: "2021-01-01",
            endDate: "2021-03-16",
            type: "VENDORWISE"


        }

        axios.post('http://192.129.253.66:8083/vektorr/billingmgmt/services/v1/billtransreport', type)
            .then(res => {
                console.log("response from Api"+Object.keys(res.data.billTransVendorReports[0]))
                 this.setState({
                     
                    plots:res.data.billTransVendorReports
                 })
                 console.log(this.state.plots);
                 
            }
            )
        }

            
    
    render() {
        let chartdata= {
            //  labels:res.data.billTransVendorReports.map(e=>{return e.VendorName}),
              labels: this.state.plots.map(e => { return e.VendorName }),
              datasets: [
                  {

                      label: "Toll-Bill Amount",
                     data:
                   this.state.plots.map(e =>{return e.TotalBillAmount}),
                      backgroundColor:[
                              "rgb(0, 102, 255)",
                              "rgb(232, 114, 210)",
                              "rgb(114, 232, 200)",
                              "rgb(56, 4, 61)",
                              "rgb(230, 0, 230)",
                              "rgb(255, 209, 179)",
                              "rgb(153, 230, 255)",
                              "rgb(0, 153, 255)",
                              "rgb(102, 153, 153)",
                              "rgb(153, 153, 102)",
                              "rgb(204, 102, 255)",
                              "rgb(204, 102, 153)",
                              "rgb(255, 255, 179)",


                      ]

                  }
              ]

          }
        
          let chartdata1= {
            //  labels:res.data.billTransVendorReports.map(e=>{return e.VendorName}),
              labels: this.state.plots.map(e => { return e.VendorName }),
              datasets: [
                  {

                      label: "NumberOfBills",
                     data:
                       this.state.plots.map(e =>{return e.NumberOfBills}),
                     backgroundColor:[
                        "rgb(0, 102, 255)",
                        "rgb(232, 114, 210)",
                        "rgb(114, 232, 200)",
                        "rgb(56, 4, 61)",
                        "rgb(230, 0, 230)",
                        "rgb(255, 209, 179)",
                        "rgb(153, 230, 255)",
                        "rgb(0, 153, 255)",
                        "rgb(102, 153, 153)",
                        "rgb(153, 153, 102)",
                        "rgb(204, 102, 255)",
                        "rgb(204, 102, 153)",
                        "rgb(255, 255, 179)",


                ]



                  }
              ]

          }

      
        return (
            <div className="chart container">
                 <Bar
                     data={chartdata}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Vendor Bill',
                            fontSize: 25

                        },

                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
                   
                   <Doughnut
                     data={chartdata1}
                    options={{
                        // scales: {
                        //     yAxes: [{
                        //         ticks: {

                        //         }
                        //     }]
                        // },
                        title: {
                            display: this.props.displayTitle,
                            text: 'Number Of Records',
                            fontSize: 25

                        },

                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

            </div>
        );
    }
}
export default Chart;