import React from 'react';
import { Pie } from '@vx/shape'
import { Group } from '@vx/group'
import { LinearGradient } from '@vx/gradient';
import { Spring } from 'react-spring/renderprops';

const colorInnerBar = '#F1EFF8';


function PieChart(props) {
    const width = 300;  
    const height = 300; 
    const margin = { top: 0, bottom: 0, left: 0, right: 0 };
    const radius = Math.min(width,height)/2
    const centerY = height / 2;
    const centerX = width / 2;
    const progressText = String(props.data);
    let translationPosition = "translate(" + width/10 + "," + height/12 + ")";
    const radiusOuterGradient = radius;
    let radiusOuterGrey = radius;
    let fontSizeNumber = width/4.5;
    let fontSizePercent = width/8.5;
    if (width < 110){
        radiusOuterGrey = radiusOuterGradient;
        fontSizeNumber += 3
        fontSizePercent += 2
    }if (width < 110 && (props.data >= 1000)){
        translationPosition = "translate(" + width/6 + "," + height/12 + ")";
    }

    
    return (
        <div style={{justifyContent: 'center', display: 'flex'}}>
        <svg width={width} height={height} >
        <LinearGradient from="rgba(249, 92, 61, 0.75)" to="rgba(249, 92, 61, 0.5)" id="lineChartGrad1" vertical={false} />
            <Group top={centerY - margin.top} left={centerX}>
            <Spring
                config={{ duration: 2500 }}
                from={{ value : 0 }}
                to={{ value: props.data }}
            >
            {transform =>
                <>
                <g fill={'#2F4585'} fontFamily={'Nunito'} transform={translationPosition}>
                    <text 
                        text-anchor="end"
                        fontWeight={'600'}
                        fontSize={fontSizeNumber} 
                    >
                        {Math.floor(transform.value)}
                    </text>
                </g>
                <Pie
                    data={[1]}
                    outerRadius={radiusOuterGradient-4}
                    innerRadius={radius - 6}
                    padAngle={0}
                    fill={colorInnerBar}
                />
                
                <Pie
                    data={[transform.value, 1000-transform.value]}
                    outerRadius={radiusOuterGrey}
                    innerRadius={radius - 10}
                    cornerRadius={5}
                    padAngle={0}
                    pieSort={null}
                >
                    {pie => {
                        return pie.arcs.map((arc, i) => {
                        const opacity = [1,0];
                        return (
                            <g key={`progress-${i}`}  >
                                <path d={pie.path(arc)} fill={`url(#lineChartGrad1)`} fillOpacity={opacity[i]} />
                            </g>
                        );
                        });
                    }}   
                </Pie>
                </>
            }
            </Spring>
            </Group>
        </svg>
        </div>
    );
}

export default PieChart;