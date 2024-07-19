export const Student = (props) => {
  return (
    <div className="student">
      <table>
      <tr>
        <th>
            Name
        </th>
        <td>{props.name}</td>
      </tr>
      <tr>
        <th>
            Age
        </th>
        <td>{props.age}</td>
      </tr>
      <tr>
        <th>
            Is married
            </th>
        <td>{props.ismarried?"Yes":"No"}</td>
      </tr>
      </table>
    </div>
  );
};

Student.defaultProps = {
  name:"no Name",
  age:"no age",
isMarried:"false",
};


