import * as c from './constants.js';

function decade_controls(root) {
    return root.selectAll('a').data(c.pseudo_decades)
      .enter()
      .append('a')
      .classed('decade', true)
      .classed("front-curve",(d,i) => i === 0)
      .classed("back-curve",(d,i) => i === 6)
      .text(decade => decade.name)
}

function isMobile() {
  const bp = '(min-width: 768px)';
  return !window.matchMedia(bp).matches;
}

export { decade_controls, isMobile };
