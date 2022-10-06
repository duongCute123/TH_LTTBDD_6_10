import React from "react";
import { Component } from "react";
import { useState,useEffect } from "react";
import { View,Text,TextInput,Button } from "react-native";
const TodoApp=()=>{
    const stodata=JSON.parse(localStorage.getItem())
    const [congViec,setCongViec]=useState('')
    const [listCV,setListCV]=useState([])
    const addcv=()=>{
        setListCV(pre=>{
            [...pre],congViec
        })
    }
    return(
        <View>
            <TextInput placeholder="Vui lòng nhập công việc muốn thêm" onChange={e=>{setCongViec(e.target.value)}}></TextInput>
            <Button title="ADD" onPress={addcv}></Button>
            <View>
                {
                    listCV.map((list,index)=>(
                        <Text key={index}>{list}</Text>
                    ))
                }
            </View>
        </View>
    )
}
export default TodoApp