import React from 'react'
import '../styles/App.scss'

import data from './orgChart.json'
const d3 = require('d3')
const Chart = require('d3-org-chart')

class App extends React.Component {
	componentDidMount() {
		// data.map(elem=>{
		// 	console.log(elem)
		// })
		new Chart()
			.container('.chart-container')
			.data(data)
			.svgWidth(window.innerWidth)
			.svgHeight(window.innerWidth)
			.initialZoom(0.6)
			.onNodeClick((d) => console.log(d + ' node clicked'))
			.render()
	}
	render() {
		return (
			<div className='App'>
				<div className='chart-container'></div>
			</div>
		)
	}
}

export default App
