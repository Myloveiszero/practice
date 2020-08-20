import React from 'react';

export const MyComponent = props => {
    const [userInfo, setUserInfo] = React.useState({
        name: "Myloveiszeo",
        age: 22,
        job: "无"
    });
    // return <h2>我的组件</h2>
    React.useEffect(() => {
     setTimeout(() => {
        setUserInfo({
            name: "李玮",
            age: 23,
            job: "web"
        },[])
     }, 15000);
    })
    return (
        <>
            <h2>{userInfo.name}<br/>{userInfo.age}<br/>{userInfo.job}</h2>
            <input type="text" value={userInfo.name} onChange={(e) => { setUserInfo({
                ...userInfo,
                name: e.target.value
            }) }} />
            <br/>
            <input type="text" value={userInfo.age} onChange={(e) => { setUserInfo({
                ...userInfo,
                age: e.target.value
            }) }} />
            <br/>
            <input type="text" value={userInfo.job} onChange={(e) => { setUserInfo({
                ...userInfo,
                job: e.target.value
            }) }} />
        </>
    )
}