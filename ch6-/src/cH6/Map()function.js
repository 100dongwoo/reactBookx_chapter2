import React from 'react';
//arr.map(callback,[선택항목])
function MapFunction(props) {
    const name=['눈사람','얼음','눈','바람']
  //  const namelist=name.map(name=><li>{name}</li>)
    const namelist=name.map((name,index)=><li key={index}>{name}</li>)
    return (
        <div>
            {namelist}
        </div>
    );
}

export default MapFunction;