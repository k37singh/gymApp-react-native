import React from 'react';
import {
    Container, Content, Button, Text, Item, Input, View, H3,
    Col, Row, Grid, List, ListItem, H2
} from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { getLogs, createLog, deleteLog, setReps, setWeight } from './../actions/logActions'

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
    label: {
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flexDirection: 'column',
        alignItems: 'center'
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
    heading: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold'
    }
});
class ExerciseScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });
    componentWillMount() {
        const { _id } = this.props.navigation.state.params
        this.props.getLogs(_id);
    }
    render() {
        const { navigate } = this.props.navigation;
        const { reps, weight, setReps, setWeight, deleteLog, createLog, logs } = this.props
        const exercise = this.props.navigation.state.params
        return (
            <Container>
                <Content >
                    <View style={styles.col} keyboardShouldPersistTaps='handled'>
                        <H3 style={styles.heading}>WEIGHT IN POUNDS(LBS)</H3>
                        <Item>
                            <Button style={styles.rBtn} rounded onPress={() => setWeight(0)}><Text style={styles.label}>c</Text></Button>
                            <Button style={styles.rBtn} rounded onPress={() => setWeight(weight - 1)}><Text style={styles.label}>-1</Text></Button>
                            <Input style={styles.input} keyboardType={'numeric'}
                                value={weight.toString()}
                                onChangeText={(val) => setWeight(val)}
                                onBlur={(val) => setWeight(parseFloat(weight))} />
                            <Button style={styles.rBtn} rounded onPress={() => setWeight(weight - 1 + 6)}><Text style={styles.label}>+5</Text></Button>
                            <Button style={styles.rBtn} rounded onPress={() => setWeight(weight - 1 + 11)}><Text style={styles.label}>+10</Text></Button>
                        </Item>
                        <H3 style={styles.heading}>NUMBER OF REPS</H3>
                        <Item>
                            <Button style={styles.rBtn} rounded onPress={() => setReps(0)}><Text style={styles.label}>c</Text></Button>
                            <Button style={styles.rBtn} rounded onPress={() => setReps(reps - 1)}><Text style={styles.label}>-1</Text></Button>
                            <Input style={styles.input} keyboardType={'numeric'}
                                value={reps.toString()}
                                onChangeText={(val) => setReps(val)}
                                onBlur={() => setReps(parseFloat(reps))} />
                            <Button style={styles.rBtn} rounded onPress={() => setReps(reps - 1 + 2)}><Text style={styles.label}>+1</Text></Button>
                            <Button style={styles.rBtn} rounded onPress={() => setReps(reps - 1 + 6)}><Text style={styles.label}>+5</Text></Button>
                        </Item>
                        <Item style={{ marginTop: 20 }} keyboardShouldPersistTaps='handled'><Button rounded onPress={() => createLog(exercise, weight, reps)}><Text>SAVE</Text></Button></Item>
                        <Item>
                            <Grid>
                                <Row>
                                    <Col style={{alignItems:'center'}}><H2>Weight(Lbs)</H2></Col>
                                    <Col style={{alignItems:'center'}}><H2>Reps</H2></Col>
                                </Row>
                                {logs.map((item, i) => {
                                    return (
                                        <Row 
                                            onPress={
                                                () => Alert.alert(exercise.name + " Log Details",
                                                    "Reps: " + item.reps + "\n" +
                                                    "Weight: " + item.weight + "\n" +
                                                    "Time: " + item.date
                                                )
                                            }
                                            
                                            onLongPress={
                                                ()=>Alert.alert("hey")
                                            }
                                        >
                                            <Col style={{alignContent:'center', alignItems:'center'}}><Text>{item.reps}</Text></Col>
                                            <Col style={{alignContent:'center', alignItems:'center'}}><Text>{item.weight}</Text></Col>
                                        </Row>
                                    )
                                })}
                            </Grid>
                        </Item>


                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reps: state.reps,
        weight: state.weight,
        logs: state.logs
    }
}

export default connect(mapStateToProps, { getLogs, createLog, deleteLog, setReps, setWeight })(ExerciseScreen);
