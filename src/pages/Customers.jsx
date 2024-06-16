import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Search, Edit, Toolbar, Inject } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Pages" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete','Search']}
        width="auto"
        editSettings={{allowDeleting:true, allowEditing:true, allowAdding:true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Toolbar, Selection]} />
      </GridComponent>

    </div>
  )
}

export default Customers