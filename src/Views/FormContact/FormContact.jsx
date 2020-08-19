import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {ThemeProvider} from '@material-ui/core/styles';
import {Row, Form} from 'reactstrap';
import {addContact, editContact} from '../../redux/contacts/contacts.actions';
import {contactId} from '../../redux/contacts/contacts.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import SaveIcon from '@material-ui/icons/Save';

import './FormContact.css';

const useStyles = makeStyles({
    root: {
        border: 'none',
        // background: 'linear-gradient(145deg , #17744b, #2db378)'
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '10px',
        marginBottom: '20px'
    },

    inputText: {
        color: 'red'
    },

    saveBtn: {
        backgroundColor: '#17744b',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#2db378'
        },
        outlineColor: '#17744b'
    },
    clearForm: {
        color: 'lightgray',
        '&:hover': {
            color: 'gray'
        }
    }

});

function FormContact({addContact, contactId, editContact}) {
    const classes = useStyles();
    let history = useHistory();
    const {id} = useParams();
    const tempraryContact = useSelector(state => state.contact.contactList.find(item => item.id == id))

    const [contact,
        setContact] = useState(tempraryContact
        ? {
            firstname: tempraryContact.firstname,
            lastname: tempraryContact.lastname,
            email: tempraryContact.email,
            phone: tempraryContact.phone,
            address: tempraryContact.address
        }
        : {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: ''
        })

    const handleChangeContact = (event) => {
        const {name, value} = event.target;
        setContact({
            ...contact,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        tempraryContact && editContact({
            id: tempraryContact.id,
            ...contact
        })

        !tempraryContact && addContact({
            id: contactId,
            ...contact
        })
        history.push('/contacts')

    }

    return (
        <Card className={`${classes.root} mt-4`} variant="outlined">
            <CardContent className="mt-2 mb-2 mx-2">
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Add new contact
                </Typography>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Row className="my-2 mx-2">
                        <ThemeProvider>
                            <TextField
                                onChange={handleChangeContact}
                                className={classes.inputText}
                                label="Firstname"
                                variant="outlined"
                                fullWidth
                                type="text"
                                value={contact.firstname}
                                name="firstname"
                                id="firstname"
                                required/>
                        </ThemeProvider>
                    </Row>
                    <Row className="my-2 mx-2">
                        <ThemeProvider >

                            <TextField
                                onChange={handleChangeContact}
                                className={classes.margin}
                                fullWidth
                                label="Lastname"
                                variant="outlined"
                                value={contact.lastname}
                                name="lastname"
                                id="lastname"
                                required/>
                        </ThemeProvider>
                    </Row>
                    <Row className="my-2 mx-2">
                        <ThemeProvider >

                            <TextField
                                onChange={handleChangeContact}
                                className={classes.margin}
                                fullWidth
                                label="Phone"
                                variant="outlined"
                                value={contact.phone}
                                name="phone"
                                id="phone"
                                required/>
                        </ThemeProvider>
                    </Row>
                    <Row className="my-2 mx-2">
                        <ThemeProvider >

                            <TextField
                                onChange={handleChangeContact}
                                className={classes.margin}
                                fullWidth
                                label="Email"
                                variant="outlined"
                                value={contact.email}
                                name="email"
                                id="email"
                                required/>
                        </ThemeProvider>
                    </Row>
                    <Row className="my-2 mx-2">
                        <ThemeProvider className={classes.fieldInput}>

                            <TextField
                                onChange={handleChangeContact}
                                className={classes.margin}
                                fullWidth
                                label="Address"
                                variant="outlined"
                                value={contact.address}
                                name="address"
                                id="address"
                                required/>
                        </ThemeProvider>
                    </Row>

                    <CardActions>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            className={`${classes.saveBtn} flex-nowrap`}
                            startIcon={< SaveIcon />}>
                            Save Contact
                        </Button>{'  '}
                        <Button
                            variant="outlined"
                            type='reset'
                            size="large"
                            className={classes.clearForm}>
                            Clear
                        </Button>

                    </CardActions>
                </Form>
            </CardContent>
        </Card>
    );
}

const mapStateToProps = createStructuredSelector({contactId})

export default connect(mapStateToProps, {addContact, editContact})(FormContact)