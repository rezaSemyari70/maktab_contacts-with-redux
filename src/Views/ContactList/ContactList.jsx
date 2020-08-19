import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './ContactList.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

const useStyles = makeStyles({

    header: {
        background: 'linear-gradient(45deg , #17744b, #2db378)'
    }
});

function ContactList({contactList}) {
    const classes = useStyles({});

    const [expanded,
        setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded
            ? panel
            : false);
    };



    return (
        <Container>
            <TableContainer className="mt-4" component={Paper}>
                <Table aria-label="customized table">
                    <TableHead className={classes.header}>
                        <TableRow>
                            <th>Table Of Contacts</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contactList.map(item => <TableRow key={item.id}>
                            <Accordion
                                expanded={expanded === `panel${item.id}`}
                                onChange={handleChange(`panel${item.id}`)}>
                                <AccordionSummary
                                    expandIcon={< ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id={`panel${item.id}bh-header`}>
                                    <Typography className={classes.heading}>{item.firstname} {item.lastname}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <p>{item.phone}</p>
                                        <p>{item.email}</p>
                                        <p>{item.address}</p>
                                        <Link to={`update/${item.id}`}>Edit</Link>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

const mapStateToProps = state => {
    return {contactList: state.contact.contactList}
}

export default connect(mapStateToProps, {})(ContactList);
