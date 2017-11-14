import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import {
    Container, Header, Title, Content, Button, Body, Right, Icon, Text, Item, Input, Label, List, ListItem,
    Card, CardItem, SwipeRow
} from 'native-base';
import { connect } from 'react-redux';
import { changeText } from './../actions/actions'
import { createRoutine, getRoutines, deleteRoutine } from './../actions/routineActions'

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

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Welcome",
    });
    componentWillMount() {
        this.props.getRoutines();
    }
    render() {
        const { changeText, createRoutine, deleteRoutine, routines, text, navigation } = this.props
        return (
            <Container>
                <Content padder keyboardShouldPersistTaps='handled'>
                    <Item style={styles.input}>
                        <Input autoCapitalize='words' value={text} onChangeText={(text) => changeText(text)} placeholder="eg. Leg Day, Crossfit, etc. " />
                    </Item>
                    <Item style={styles.button}>
                        <Button onPress={() => createRoutine(text)}><Text>ADD ROUTINE</Text></Button>
                    </Item>
                    {routines.length > 0 &&
                        <Card>
                            <List
                                dataArray={routines}
                                renderRow={(item) =>
                                    <ListItem style={{ margin: 5 }}
                                        onPress={() => navigation.navigate("Routine", item)}
                                        onLongPress={
                                            () => Alert.alert("Delete","Are you sure you want to delete '" + item.name + "' routine?",
                                                [
                                                    { text: "Delete", onPress: () => deleteRoutine(item._id) },
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
                                }
                            >
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
        routines: state.routines,
        text: state.text
    }
}

export default connect(mapStateToProps, { createRoutine, getRoutines, deleteRoutine, changeText })(HomeScreen);

