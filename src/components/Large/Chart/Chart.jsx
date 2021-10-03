import React,{useState} from 'react'
import './Chart.css'
import {Bar} from 'react-chartjs-2'

function Chart() {


    return (
    <div className="chart__card">
        <div className="title__container">
               Today's Appointments
            </div>
        <div className="chart__wraper" >
            
          <Bar
          data={{ 
            labels: ['6:30-6:40', '6:40-6:50', '6:50-7:00', '7:00-7:10', '7:10-7:20','7:20-7:30'
           , '7:30-7:40', '7:40-7:50','7:50-8:00'
        
        ],
            datasets: [{
            label: 'Number of Patients',
            data: [3, 4, 2, 3, 2, 3, 2,1,2],//  //1,0,1,1,1,0,0,1,1
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
          }}
          width={200}
          height={100}
        options={{ maintainAspectRatio: false,  responsive: true,
            scales:{
                yAxes:[{ticks:{
                    beginAtZero:true,
                    callback: function(value) {if (value % 1 === 0) {return value;}},
                    // stepSize: 1
                    // precision: 0
                }}]
            }
        }}
          />
        </div>
        </div>
    )
}

export default Chart
