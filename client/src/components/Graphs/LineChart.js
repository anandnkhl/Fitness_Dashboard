import React from 'react';
import { Area, AreaClosed } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { scaleLinear, scaleBand } from '@vx/scale';
import { LinearGradient } from '@vx/gradient';
import { AxisBottom , AxisLeft } from '@vx/axis';
import { GridRows } from '@vx/grid';

const data = {
    'newUserData':[]                   
}

for(let i = 1; i <= 20; i++ ){ data.newUserData.push({  'Days':i+"/Jul/20", 'New Users': 0 }); }
data.newUserData.push({'Days':"21/Jul/20", 'New Users': 4})
data.newUserData.push({'Days':"22/Jul/20", 'New Users': 3})
data.newUserData.push({'Days':"23/Jul/20", 'New Users': 3})
for(let i = 24; i <= 31; i++ ){ data.newUserData.push({  'Days':i+"/Jul/20", 'New Users': 0 }); }

const width= 1000;
const height= 350;

function LineChart() {
    let unit = 1;
        if(window.screen.width > 1910 && window.screen.width < 2550){
            //for FHD Screens
            unit = 1.5;
        }else if(window.screen.width >= 2551){
            //for QHD Screens
            unit = 2;
        }
    const margin = { top: 20*unit, bottom: 40*unit, left: 40*unit, right: 20*unit };
    const xMin = 0 + margin.left;
    const xMax = width - margin.right;
    const yMin = 0 + margin.top;
    const yMax = height - margin.bottom;

    const xAxisLable = 'Days';
    const yAxisLable = 'New Users';

    const xAxis = d =>  d[xAxisLable];
    const yAxis = d =>  d[yAxisLable];

    // scales
    const xScale = scaleBand({
        range: [xMin, xMax],
        domain: data.newUserData.map(d => d['Days']),
        nice: true
    });

    const yScale = scaleLinear({
        range: [yMax, yMin],
        domain: [0, 7],
        nice: true
    });
    
    return(
        <div style={{justifyContent: 'center', display: 'flex'}}>
            <svg width={width} height={height}>
                <rect
                    x="0" y="0" width={width} height={height}
                    style={{"fill":"white","stroke":"#4655a3","stroke-width":"5","fill-opacity":"0.15","stroke-opacity":"0.9"}}
                />
                <LinearGradient from="rgba(249, 92, 61, 0.35)" to="rgba(70, 85, 163, 0.1)" id="lineChartGrad1" vertical={true} />
                <GridRows
                    left={ xMin}
                    scale={yScale}
                    width={xMax - xMin}
                    height={yMax}
                    numTicks={6}
                    style={{"fillOpacity":"0.25"}}
                />
                <AxisBottom
                    top={height - margin.bottom }
                    scale={xScale}
                    hideAxisLine= {true}
                    hideTicks={false}
                    //hideZero
                    tickLabelProps={(value, index) => ({
                        fontSize: 10*unit,
                        textAnchor: 'middle',
                        fill: '#f95c3d',
                        fillOpacity: 0.84,
                        fontStyle: 'normal',                  
                    })}
                    numTicks={10}
                    // labelProps={(value, index) => ({
                    //     fontSize: 7*unit,
                    //     textAnchor: 'middle',
                    //     fill: '#4655a3',
                    //     fontStyle: 'normal'})
                    // }
                    // label={xAxisLable}
                />
                <AxisLeft
                    left={margin.left}
                    scale={yScale}
                    hideAxisLine= {true}
                    hideTicks={true}
                    tickLabelProps={(value, index) => ({
                        fontSize: 10*unit,
                        textAnchor: 'middle',
                        fill: '#f95c3d',
                        fillOpacity: 0.84,
                        fontFamily: 'Nunito',
                        fontStyle: 'normal'
                    })}
                    numTicks={5}
                    labelProps={{
                        fontSize: 15*unit,
                        textAnchor: 'middle',
                        fill: '#f95c3d',
                        fillOpacity: 0.84,
                        fontStyle: 'normal'
                    }}
                    label={yAxisLable}
                    labelOffset={20*unit}
                />
                
                <Area
                    data={data.newUserData}
                    x={d => xScale(xAxis(d))}
                    y={d => yScale(yAxis(d))}
                    yScale={yScale}
                    stroke={'rgba(249, 92, 61, 0.75)'}
                    strokeWidth={'2px'}
                    fill={'url(#lineChartGrad1)'}
                    curve={curveMonotoneX}
                />
                <AreaClosed
                    data={data.newUserData}
                    x={d => xScale(xAxis(d))}
                    y={d => yScale(yAxis(d))}
                    yScale={yScale}
                    fill={'url(#lineChartGrad1)'}
                    curve={curveMonotoneX}
                />
            </svg>
        </div>
    );
}

export default LineChart;