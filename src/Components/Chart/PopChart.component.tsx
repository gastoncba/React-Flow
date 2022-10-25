import React, {useState} from "react";
import Chart from 'react-apexcharts'

interface Props {
    options?: ApexCharts.ApexOptions,
    type: "line" | "area" | "bar" | "histogram" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "treemap" | "boxPlot" | "candlestick" | "radar" | "polarArea" | "rangeBar" | undefined,
    series: any[],
    width: string | number,
    height: string | number
}

export const PopChart:React.FunctionComponent<Props> = (props: Props) => {
    return(
        <Chart 
        options={props.options} 
        type={props.type}
        series={props.series}
        width={props.width}
        height={props.height}
        />
    )
}

