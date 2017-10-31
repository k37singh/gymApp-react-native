import React from 'react';
import { Container, Content, Button, Text, Item, Input, View, H3 } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rBtn: {
        height: 70,
        width: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
        borderColor: 'white',
        borderWidth: 2,
    },
    label:{
        fontSize:16       
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flexDirection:'column',
        alignItems:'center'
    },
    input: {
        height: 70,
        width: 50,
        fontSize: 44,
        borderColor: 'blue',
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: 'white'
    },
    heading:{
        marginTop:10,
        fontSize:12,
        fontWeight:'bold'
    }
});

export default class ExerciseScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params,
    });
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content >
                    <View style={styles.col}>
                        <H3 style={styles.heading}>WEIGHT IN POUNDS(LBS)</H3>
                        <Item>
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>c</Text></Button>
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>-1</Text></Button>
                            <Input style={styles.input} />
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>+5</Text></Button>
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>+10</Text></Button>
                        </Item>
                        <H3 style={styles.heading}>NUMBER OF REPS</H3>
                        <Item>
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>c</Text></Button>
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>-1</Text></Button>
                            <Input style={styles.input} />
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>+1</Text></Button>
                            <Button style={styles.rBtn} rounded><Text style={styles.label}>+5</Text></Button>
                        </Item>
                        <Item style={{marginTop:20}}><Button rounded><Text>SAVE</Text></Button></Item>
                    </View>
                </Content>

            </Container>
        );
    }
}