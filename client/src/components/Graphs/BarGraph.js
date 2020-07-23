import React from 'react';
import { Group } from '@vx/group';
import { GridRows, GridColumns } from '@vx/grid';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { scaleLinear, scaleBand } from '@vx/scale';
import { LinearGradient } from '@vx/gradient';
import getRoundedRect from './GraphUtils';
import { Spring } from 'react-spring/renderprops';

function BarGraph(props) { 
    const width = 500;  
    const height = 300;
    const data = props.data; 
    console.log(data);
    let unit = 1;
        if(window.screen.width > 1910 && window.screen.width < 2550){
            //for FHD Screens
            unit = 1.5;
        }else if(window.screen.width >= 2551){
            //for QHD Screens
            unit = 2;
        }
    const margin = { top: 20*unit, bottom: 25*unit, left: 40*unit, right: 10*unit };
    const barWidth = 18*unit;
    const borderRad = 4*unit;
    
    const xMin = margin.left
    const yMin = margin.top;
    const xMax = width - margin.right;
    const yMax = height - margin.bottom;

    const x = d => d.week;
    const y = d => d.waterLtr;
    

    const xScale = scaleBand({
        rangeRound: [xMin, xMax],
        domain: data.map(x),
    });
        
    const yScale = scaleLinear({
        rangeRound: [yMax, yMin],
        domain: [0, 25],
    });

    const compose = (scale, accessor) => data => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

  return (
    <div style={{justifyContent: 'center', display: 'flex'}}>
    <svg width={width} height={height}>
        <rect
            x="0" y="0" width={width} height={height}
            style={{"fill":"white","stroke":"#4655a3","stroke-width":"5","fill-opacity":"0.15","stroke-opacity":"0.9"}}
        />
        <text  x = {width/2} y = {12*unit}
            style={{ fontSize: 12*unit,
                textAnchor: 'middle',
                fill: '#f95c3d',
                fillOpacity: 0.84,
                fontStyle: 'normal' }}
        >
            Water Consumption (Weekly Trend)
        </text>
        <LinearGradient from="rgba(249, 92, 61, 0.75)" to="rgba(249, 92, 61, 0.5)" id="lineChartGrad1" vertical={true} />
            <GridRows
                left={margin.left}
                scale={yScale}
                width={xMax - xMin}
                height={yMax - yMin}
                stroke="#EAECF3"
                numTicks={6}
            />
            <GridColumns
                top={margin.top}
                scale={xScale}
                width={xMax - xMin}
                height={yMax - yMin}
                stroke="#EAECF3"
                numTicks={6}
            />
        <line x1={xMax} x2={xMax} y1={yMin} y2={yMax} stroke="#EAECF3" />
        <AxisLeft
            left={margin.left}
            scale={yScale}
            hideAxisLine= {true}
            hideTicks={true}
            hideZero={false}
            tickLabelProps={(value, index) => ({
                fontSize: 10*unit,
                textAnchor: 'end',
                verticalAnchor: 'middle',
                fill: '#f95c3d',
                fillOpacity: 0.84,
                fontFamily: 'Nunito',
                fontStyle: 'normal'
            })}
            label={"Liters of Water"}
            labelProps={{
                fontSize: 12*unit,
                textAnchor: 'middle',
                fill: '#f95c3d',
                fillOpacity: 0.84,
                fontStyle: 'normal'
            }}
            labelOffset={20*unit}
            numTicks={4}
        /> 
        <AxisBottom
            top={height - margin.bottom }
            left={0}
            scale={xScale}
            hideAxisLine= {true}
            hideTicks={true}
            tickLabelProps={(value, index) => ({
                fontSize: 8*unit,
                textAnchor: 'middle',
                fill: '#f95c3d',
                fillOpacity: 0.84,
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                width: 96
            })}
        />

        {data.map((d, i) => {
            const barHeight = yMax - yPoint(d);
            return (
                <Group key={`bar-${i}`}>
                    <Spring
                        delay={i*750}
                        config={{duration: 750}}
                        from={{ value: getRoundedRect(xPoint(d) + (xScale.bandwidth() - barWidth)/2 , yMax , barWidth, 0, 0, 'top') }}
                        to={{ value: getRoundedRect(xPoint(d) + (xScale.bandwidth() - barWidth)/2 , yPoint(d), barWidth, barHeight, borderRad, 'top') }}
                    >
                        {props => 
                            <path
                                id={`bar-${i}`}
                                d={props.value}
                                style={{ fill: 'url(#lineChartGrad1)' }}
                            />
                        }
                    </Spring>
                </Group>
            );
        })}
    </svg>
    </div>
  );
}

export default BarGraph;