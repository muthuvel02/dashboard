import React from 'react'
    ;
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Stacked = ({ width, height }) => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Stacked" title="USA CLIMATE - WEATHER BY MONTH" />
            <div className="w-full">
        <ChartComponent
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            width={width}
            height={height}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
        </div>
        </div>
    );
};

export default Stacked;