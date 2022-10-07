import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const List = () => {
  //Lấy công việc trong localStorage ra
  // const stodata=JSON.parse(localStorage.getItem("list"))
  const [congViec, setCongViec] = useState('');
  const [listCV, setListCV] = useState([]);
  //Thêm công việc nhé
  const addcv = () => {
    setListCV((pre) => [...pre, congViec]);
    //Lưu công việc vào trong localStorage
    // const newList=[...pre,congViec]
    // const jsonJob=JSON.stringify(newList)
    // localStorage.setItem("list",jsonJob)
    // return newList
  };
  return (
    <View>
      <TextInput
        placeholder="Vui lòng nhập công việc muốn thêm"
        onChange={(e) => {
          setCongViec(e.target.value);
        }}></TextInput>
      <Button title="ADD" onPress={addcv}></Button>
      <Viewss listCV={listCV}/>
    </View>
  );
};
const Viewss=({listCV})=>{
    //Xóa công việc
  const xoaCV = ({index}) => {
        listCV.splice(index,listCV[index])
        alert("Xóa thành công nhá")
  };
  return(
    <View>
        <View>
        {listCV.map((list, index) => (
          <Text style={{justifyContent:"space-between"}} key={index}>{index}{list} <Button title='Xoa'color={"red"} onPress={xoaCV}></Button></Text>
        ))}
      </View>
    </View>
  )
}
const TodoApp = () => {
  return(
    <View>
      <List/>
    </View>
  )
};
export default TodoApp;
