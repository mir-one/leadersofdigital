import React, { Component } from 'react';
var d3 = Object.assign({}, require("d3-interpolate"), 
require("d3"), require("d3-color"), 
require("d3-geom-polygon"), 
require("d3-selection"), 
require("d3-scale"),
require("d3-force"),
require("d3-hierarchy"),
require("d3-chord")
);

var treemap = d3.treemap();



export default class ForceLayout extends Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      const {
        width,
        height,
        nodes,
        links
      } = this.props;



      const force = d3.layout.force()
        .linkDistance(width / 3)
      .gravity(0.065)
        .size([width, height])
        .nodes(nodes)
        .links(links)

        
      const svg = d3.select(this.refs.stage)
        .append('svg')
        .attr({
          width,
          height
        });
  
      const link = svg.selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .style('stroke', '#f00')
        .style('stroke-opacity', 1)
        .style('stroke-width', 1)
  var node_drag = d3.behavior.drag()
          .on("dragstart", dragstart)
          .on("drag", dragmove)
          .on("dragend", dragend);
      function dragstart(d, i) {
          force.stop();
      }
      function dragmove(d, i) {
          d.px += d3.event.dx;
          d.py += d3.event.dy;
          d.x += d3.event.dx;
          d.y += d3.event.dy;
      }
      function dragend(d, i) {
          d.fixed = true; 
          force.resume();
      }
      function releasenode(d) {
          d.fixed = false; 
          //force.resume();
      }
      
      const gnodes = svg.selectAll('g')
        .data(nodes)
        .enter()
        .append('g')
        .call(force.drag)
      .on('dblclick', releasenode)
        .call(node_drag); //Added 
       gnodes
        .append('circle')
        .attr('r', 15)
        .style('fill', 'blue');
          gnodes.append('text').text(d => d.name).attr('x','1em').attr('y','1em');
  
      
    gnodes.on('mouseover', (d) => {
    link.style('stroke-width', (l) => {
      if (d === l.source || d === l.target)
        return 1;
      else
        return 0;
      });
  });
    gnodes.on('mouseout', () => {
    link.style('stroke-width', 1);
  });
      // const node = svg.selectAll('circle')
      //       .data(nodes)
      //        .enter()
      //       .append('circle')
      //       .attr('r',15)
      //       .style('fill','blue');
      let m = 10;
      force.on('tick', (e) => {
        link
          .attr('x1', (d,i) => d.source.x)
          .attr('y1', (d,i) => d.source.y)
          .attr('x2', (d,i) => d.target.x)
          .attr('y2', (d,i) => d.target.y)
  
        gnodes.attr("transform", (d,i) => {
        return  'translate(' + [d.x, d.y] + ')';
        });
  
      })
  
      force.start();
      console.log(force);
  
    }
  
    render() {
      return (
        <div className="force_layout" ref="stage"></div>
      )
  
    }
  }
