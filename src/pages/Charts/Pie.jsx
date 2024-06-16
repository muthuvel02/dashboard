import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
  PieSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pie-chart"
          legendSettings={{ background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PieSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              type="Pie"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
              legendSettings={{ visible: true }}
              enableSmartLabels={true}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
}

export default Pie;
