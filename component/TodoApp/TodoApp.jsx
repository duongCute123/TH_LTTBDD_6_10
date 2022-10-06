import React from "react";
import { Component } from "react";
import { useState,useEffect } from "react";
import { View,Text,TextInput,Button } from "react-native";
const TodoApp=()=>{
    const stodata=JSON.parse(localStorage.getItem("list"))
    const [congViec,setCongViec]=useState('')
    const [listCV,setListCV]=useState([])
    //Thêm công việc nhé
    const addcv=()=>{
        setListCV(pre=>{
            // [...pre],congViec
            //Lưu công việc vào trong localStorage
            const newList=[...pre,congViec]
            const jsonJob=JSON.stringify(newList)
            localStorage.setItem("list",jsonJob)
            return newList
        })
    }
    //Xóa công việc
    const xoaCV=()=>{
        
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
                <Button color={"red"} title="Xoa"></Button>
            </View>
        </View>
    )
}
export default TodoApp