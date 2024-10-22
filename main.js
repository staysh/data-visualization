import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// wait for the html elements to be selectable
window.onload = setup

function setup () {

    const div = d3.select('#main-vis')

    const tinyData = [
        {w: '100', h: '100', x: '100', y: '100', c: 'blue'},
        {w: '90', h: '90', x: '110', y: '110', c: 'lemonchiffon'},
        {w: '70', h: '70', x: '130', y: '130', c: 'red'}
    ]

    const svg = d3.create('svg')
        .attr('width', 400)
        .attr('height', 400)

    svg.selectAll('circle')
        .data(tinyData)
        .join('circle')
        .attr("cx", row => row.x)
        .attr("cy", row => row.y)
        .attr("r", row => row.h)
        .attr("fill", row => row.c);
    
    // what is going on...
    console.log(svg.node())
    
    // appendChild is a javascript method not d3.
    // this is just one way to get the update to work.
    div.node().appendChild(svg.node())
}

