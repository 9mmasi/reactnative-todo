import React from "react"
import { StyleSheet,View,Text } from "react-native"


const Task=(props)=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemBar}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
                           </View>

                           <View style={styles.circular}></View>
 
            
        </View>

    )
}
const styles=StyleSheet.create({
item:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:20
},
square:{
    width:24,
    height:24,
    backgroundColor:"#ffc300",
    borderRadius:5,
    marginRight:20,
    
    

},
itemText:{
    marginRight:30
    

},
itemBar:{
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap",
    alignItems:"center",
    
},
circular:{
    width:12,
    height:12,
    borderColor:"#ffc300",
    borderWidth:2,
    borderRadius:5,
    
    

}


})
export default Task