import React from 'react';
// import { MyComponent } from '../../my-react-demo/src/demo';

export const MyComponent = props => {
    const [visible, setvisible] = React.useState(true);
    return (
        <>
            {visible && <MyChildConponent />}
            <button onClick={() => setvisible(!visible)}>点击卸载</button>
        </>
    )
};

export const  MyChildConponent = props => {
    const [userInfo, setuserInfo] = React.useState({
        name: "Myloveiszero",
        age: 22
    });
    React.useEffect(() => { 
      console.log("组建将挂载渲染")
      return () => {
          console.log("组件将要卸载")
      }
    },[])
    return (
        <>
            <h2>{userInfo.name}</h2><br/>
            <h3>{userInfo.age}</h3><br/>
            <input onChange={(e) => setuserInfo({
                ...userInfo,
                name: e.target.value
            })}></input><br/>
            <input onChange={(e) => setuserInfo({
                ...userInfo,
                age: e.target.value
            })}></input>
        </>
    )
}