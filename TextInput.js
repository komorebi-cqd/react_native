import { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";


export default function App() {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);

    //改变文字提示关联
    const textAssociate = (t) => {
        if(!t){
            setText(t);
            return setShow(false);
        }
        setText(t);
        setShow(true);
    }

    //点击搜索
    const search = () => {
        alert('搜索')
        setShow(true);
    }

    //点击下面的关联词
    const optionItem = (val) => {
        setText(val);
        setShow(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.inputStyle} value={text} onChangeText={(t) => textAssociate(t)} placeholder='请输入关键字' returnKeyType="search"></TextInput>
                <View style={styles.btnStyle}>
                    <Text style={styles.search} onPress={search}>搜索</Text>
                </View>
            </View>
            <View>
                { show ? (
                    <View style={styles.resultStyle}>
                        <Text style={styles.itemStyle} numberOfLines={1} ellipsizeMode='tail' onPress={() => optionItem(text + '街道')}>{text}街道</Text>
                        <Text style={styles.itemStyle} numberOfLines={1} ellipsizeMode='tail' onPress={() => optionItem(text + '道路')}>{text}道路</Text>
                        <Text style={styles.itemStyle} numberOfLines={1} ellipsizeMode='tail' onPress={() => optionItem(text + '门牌号')}>{text}门牌号</Text>
                    </View>
                ) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        paddingTop: 25
    },
    searchContainer: {
        height: 45,
        flexDirection: 'row'
    },
    inputStyle: {
        height: 45,
        flex: 1,
        marginTop: 20,
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    btnStyle: {
        width: 80,
        marginTop: 20,
        marginLeft: -5,
        marginRight: 10,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#23beff',
        height: 45,
        justifyContent: "center",
        alignContent: "center"
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
    },
    resultStyle: {
        marginTop: 20,
        marginLeft: 10,
        marginRigth: 10,
        height: 200,
        borderColor: '#ccc',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    itemStyle: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0
    }
})