import React from "react";
import { Component } from "react";
import { Button, View ,Text} from "react-native";
import { UseFetch } from "../ConfigApi/ConfigApi";
import axios from "axios"
const ListTodo=({hocsinh:{id,title}})=>{
        //Xóa dữ liệu nhá
        const Xoa=()=>{
            axios.delete('https://jsonplaceholder.typicode.com/todos',+`${id}`)
            .then(res=>{
                //Xóa thành công trả về 200
                res.status(200)
            })
            .catch(err=>{
                //Log lỗi ra ngoài
                console.log(err);
            })
        }
    return(
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",borderWidth:1,borderColor:"black",backgroundColor:"white",alignItems:"center"}}>
            <Text style={{fontSize:20,fontStyle:"normal"}}>{id}</Text>
            <Text style={{fontSize:20,fontVariant:"small-caps"}}>{title}</Text>
            <Button color={"red"} onPress={Xoa} title="Xoa"></Button>
        </View>
    )
}
const CallApiTodoList=()=>{
    const url='https://jsonplaceholder.typicode.com/todos'
    const data=UseFetch(url)
    return(
        <View style={{flex:1,width:"100%",height:"100%",backgroundColor:"gray"}}>
            <Text>Danh sách api lấy được là</Text>
            <View>
                {
                   data.length>0 && data.map((hocsinh)=>(
                        <ListTodo hocsinh={hocsinh}/>
                    ))
                }
            </View>
        </View>
    )
}
export default CallApiTodoList