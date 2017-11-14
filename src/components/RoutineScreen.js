import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import {
    Container, Header, Title, Content, Button, Body, Right, Icon, Text, Item, Input, Label, List, ListItem,
    Card, CardItem, SwipeRow
} from 'native-base';
import { connect } from 'react-redux';
import { changeText } from './../actions/actions'
import { getExercises, createExercise, deleteExercise } from './../actions/exerciseActions'


const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10
    },
    button: {
        justifyContent: 'center',
        marginBottom: 10
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

class RoutineScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
    });
    componentWillMount() {
        this.props.getExercises(this.props.navigation.state.params._id);
    }
    render() {
        const { changeText, createExercise, deleteExercise, exercises, text, navigation } = this.props
        return (
            <Container>
                <Content padder keyboardShouldPersistTaps='handled'>
                    <Item style={styles.input}>
                        <Input autoCapitalize='words' value={text} onChangeText={(text) => changeText(text)} placeholder="eg. Squats, Bench Press, etc. " />
                    </Item>
                    <Item style={styles.button}>
                        <Button onPress={() => createExercise(text, navigation.state.params._id)}><Text>ADD EXERCISE</Text></Button>
                    </Item>
                    {exercises.length > 0 &&
                        <Card>
                            <List dataArray={exercises}
                                renderRow={(item) =>
                                    <ListItem
                                        onPress={() => navigation.navigate("Exercise", item)}
                                        onLongPress={
                                            () => Alert.alert("Delete","Are you sure you want to delete '" + item.name + "' exercise?",
                                                [
                                                    { text: "Delete", onPress: () => deleteExercise(item._id) },
                                                    { text: "Cancel" }
                                                ]
                                            )
                                        }
                                    >
                                        <CardItem >
                                            <Body><Text style={styles.bold}>{item.name}</Text></Body>
                                            <Right><Icon name="arrow-forward" /></Right>
                                        </CardItem>
                                    </ListItem>
                                }>
                            </List>
                        </Card>
                    }
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        exercises: state.exercises,
        text: state.text
    }
}

export default connect(mapStateToProps, { getExercises, createExercise, deleteExercise, changeText })(RoutineScreen);