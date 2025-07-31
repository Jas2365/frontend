const List = ({ firstname, lastname, email }) => {
  return (
    <div className="list-element">
      <div className="list-item">{firstname}</div>
      <div className="list-item">{lastname}</div>
      <div className="list-item">{email}</div>
    </div>
  );
};

export default List;
