import React, { Component } from 'react'
import Chart from './chart'

const AnalysisResult = (props) => {
    if(props.data) {
      return (
        <div>
          <div className='analysis container' style = {{textAlign: 'center'}}>
              <h4 style = {{textAlign: 'center'}}>Your Overall Personality</h4>
              <Chart data = { props.data.personalityScores.persona[0] }
                     title = { 'Your personality' }
                     index = { 0 }/>
          </div>
          <div className = 'subCategories' >
            { props.data.personalityScores.persona[0]
              .map((subCategory, i) => {
                return (
                  <div className = 'col-md-12'>
                    <p className = 'lead' style = {{textAlign: 'center'}}>
                       { subCategory.name }</p>
                    <Chart data = { subCategory.children } title = { subCategory.name }
                      index = { i+1 }/>
                  </div>)
              }) }
          </div>
        </div>
      )
    } else {
      return (
        <div className='analysis'></div>
      )
    }
  }

export default AnalysisResult