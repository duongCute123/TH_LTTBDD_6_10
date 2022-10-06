import React from "react";
import { Component } from "react";
import { View } from "react-native";
import { UseFetch } from "../ConfigApi/ConfigApi";
const ListTodo=({hocsinh:{id,title}})=>{
    return(
        <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
        </View>
    )
}
const CallApiTodoList=()=>{
    const url='https://jsonplaceholder.typicode.com/todos'
    const data=UseFetch(url)
    return(
        <View>
            <Text>Danh sách api lấy được là</Text>
            <View>
                {
                    data.map((hocsinh)=>(
                        <ListTodo hocsinh={hocsinh}/>
                    ))
                }
            </View>
        </View>
    )
}
export default CallApiTodoList