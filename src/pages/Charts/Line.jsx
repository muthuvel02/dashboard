import React from 'react';
import { ChartComponent, SeriesCollectionDirective, Inject, LineSeries,SeriesDirective,DateTime,Tooltip, Legend} from '@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../../components';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Line = () => 
  {
    const {currentMode} = useStateContext();
    return (
  
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
     <ChartComponent
     id='Line-chart'
     height='420px'
     primaryXAxis={LinePrimaryXAxis}
     primaryYAxis={LinePrimaryYAxis}
     chartArea={{ border: { width: 0 } }}
     tooltip={{ enable: true }}
     background={currentMode === 'Dark' ? '#33373D' : '#fff'}>
     
        <Inject services={[LineSeries, Legend, Tooltip, DateTime]}></Inject>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => {
          return <SeriesDirective key={index} {...item} />
        })}
      </SeriesCollectionDirective>
     </ChartComponent>
    </div>
  </div>
);
}

export default Line;