import React,{useState}from "react"
import { StyleSheet, Text, TextInput, View,KeyboardAvoidingView,TouchableOpacity,Platform} from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task,setTask]=useState();
  const[taskItems,setTaskItems]=useState([])

  const handleAddTask=()=>{
    
    
    setTaskItems([...taskItems,task])
    setTask("")
  }
  const completeTask=(index)=>{
    let copytaskItems=[...taskItems]
    copytaskItems.splice(index,1)
    setTaskItems(copytaskItems)
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.taskItems}>
        {taskItems.map((item,index)=>{
                return(<TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>)
     
        })}
      
      

      </View>
      
      
      </View>
      <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.textInputButtonWrapper}>
        <TextInput placeholder='Write a Task...' style={styles.textInput} value={task} onChangeText={e=>setTask(e)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8edea',
    
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'

  },
  taskItems:{
    marginTop:10

  },
  textInputButtonWrapper:{

    position:"absolute",
    bottom:100,
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around",
    alignItems:"center"


   },
   textInput:{
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:"#fff",
    borderRadius:60,
    borderWidth:1,
    width:245,
    borderColor:"#c0c0c0",
    
   },
   addWrapper:{
    borderRadius:"50%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    height:60,
    width:60,


   }

});
