interface IEmployee {
  id: number;
  name: string;
  designation: string
}

function List() {
  const employees: IEmployee[] =
    [
      { id: 1, name: 'John', designation: 'Manager' },
      { id: 2, name: 'Bob', designation: 'CEO' },
      { id: 3, name: 'Nick', designation: 'Lead' },
    ];

  /* const employeeList = employees.map((employee) => {
    return <li key={'uniquedata'}>{employee.name}is a {employee.designation}</li>;
  }); */
  return (
    <ul>
      {employees.map((employee) => {
        return (
          <li key={employee.id}>
            {employee.name}  is a {employee.designation}
          </li>
        );
      })}
    </ul>
  )
}

export default List