import React from "react";

const Todo = () => {
  const [activity, setActivity] = React.useState("");
  const [listData, setListData] = React.useState([]);
  // const [isEditing, setIsEditing] = React.useState(false);
  const addActivity = () => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (i) => 
  {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  };

  const editActivity = (i, newValue) => {

    setListData({ ...listData });
    console.log(listData);
  }


    const removeAll = () => {
    setListData([]);
    }


  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List : {`)`}</p>
          {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-postion">
                    <button onClick={() => removeActivity(i)}>Delete(-)</button>
                  </div>
                  <div className="btn-postion">
                    <button onClick={() => editActivity(i)}>Edit(-/)</button>
                  </div>
                </p>
              </>
            );
          })}
          {listData.length >= 1 && 
          <button onClick={removeAll}>Delete All</button>}
      </div>
    </>
  );
};

export default Todo;
