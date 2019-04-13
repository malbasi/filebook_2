import * as d3 from 'd3'

const margin = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 190
}

const width = 700 - margin.left - margin.right
const height = 650 - margin.top - margin.bottom

const svg = d3
  .select('#chart-1')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

// var div = d3
//   .select('body')
//   .append('div')
//   .attr('class', 'tooltip')
//   .style('opacity', 0)

// d3.json(require('./data/cash.json'))
//   .then(ready)
//   .catch(err => console.log('Failed on', err))

const dataset = [{"app_name": "Facebook", "package": "com.facebook.katana", "url": "fb://page/50112151664?referrer=app_link"}]

ready(dataset)

function ready (datapoints) {

  console.log(datapoints)

  const graph = d3.select('.container').appendHTML('<div>'); 
  
  graph.selectAll("p")          // make a selection of all paragraphs, there are none yet
    .data(dataset)              // bind our data to the selection
    .enter()                    // take the set of placeholder elements
    .append("span")             // append a paragraph for each placeholder
    .text(dataset)             // set the text of each paragraph
 
  return graph.node();

  }