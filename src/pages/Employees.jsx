import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Filter,
  Page,
  Sort,
  Group,
  Toolbar,
  ToolbarItems,
} from "@syncfusion/ej2-react-grids";

import { MaskedTextBoxComponent } from "@syncfusion/ej2-react-inputs";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
  };
  const toolbarOptions = [
    "Add",
    "Delete",
    "Edit",
    "Cancel",
    "Update",
    "Search",
  ];

  function editTemplate(args) {
    return (
      <MaskedTextBoxComponent
        value={args.PhoneNumber}
        mask="000-000-0000"
        id="PhoneNumber"
      />
    );
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging={true}
        pageSettings={{ pagaSize: 3 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        allowSorting
      >
        <ColumnsDirective>
          <ColumnDirective
            field="Name"
            headerText="Employee Name"
            width="100"
          />
          <ColumnDirective
            field="Title"
            headerText="Department"
            width="100"
            editType="dropdownedit"
          />
          <ColumnDirective
            field="HireDate"
            headerText="OnBoarding"
            width="100"
            editType="datepickeredit"
          />
          <ColumnDirective field="Country" headerText="Country" width="100" />
          <ColumnDirective field="ReportsTo" headerText="Manager" width="100" />
          <ColumnDirective
            field="PhoneNumber"
            headerText="Phone Number"
            width="100"
            editTemplate={editTemplate}
          />
          <Inject services={[Page, Sort, Toolbar]} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};
export default Employees;

// <GridComponent
// dataSource={employeesData}
// width="auto"
// allowPaging
// allowSorting
// pageSettings={{ pageCount: 5 }}
// editSettings={editing}
// toolbar={toolbarOptions}
// >
// <ColumnsDirective>
//   {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//   {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
// </ColumnsDirective>
// <Inject services={[Search, Page, Sort]} />

// </GridComponent>
