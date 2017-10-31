import React from 'react';
import { StyleSheet } from 'react-native';
import {
    Container, Header, Title, Content, Button, Body, Right, Icon, Text, Item, Input, Label, List, ListItem,
    Card, CardItem
} from 'native-base';
import { connect } from 'react-redux';
import { addExercise, changeText } from './../actions/actions'

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
    render() {
        const { changeText, addExercise, exercises, text, navigation } = this.props
        return (
            <Container>
                <Content padder keyboardShouldPersistTaps='handled'>
                    <Item style={styles.input}>
                        <Input autoCapitalize='words' value={text} onChangeText={(text) => changeText(text)} placeholder="eg. Squats, Bench Press, etc. " />
                    </Item>
                    <Item style={styles.button}>
                        <Button onPress={() => addExercise(text)}><Text>ADD EXERCISE</Text></Button>
                    </Item>
                    {exercises.length > 0 &&
                        <Card>
                            <List dataArray={exercises}
                                renderRow={(item) =>
                                    <ListItem onPress={() => navigation.navigate("Exercise", item)} >
                                        <CardItem style={{ padding: 5 }}>
                                            <Body><Text style={styles.bold}>{item}</Text></Body>
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

export default connect(mapStateToProps, { addExercise, changeText })(RoutineScreen);