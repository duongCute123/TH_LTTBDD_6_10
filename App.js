import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CallApiTodoList from './component/ListToDo/CallApiTodo';
import TodoApp from './component/TodoApp/TodoApp';
const App=()=>{
  return(
    <View>
      <CallApiTodoList/>
    </View>
  )
}
export default App
