import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Badge,
  Divider,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";  // Import useNavigate

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  searchIcon: {
    marginRight: theme.spacing(1),
  },
  listItem: {
    cursor: "pointer",
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  badge: {
    right: 5,
    top: 0,
  },
  onlineStatus: {
    backgroundColor: "#4caf50",
    width: 10,
    height: 10,
    borderRadius: "50%",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
}));

const contacts = [
  { id: 1, name: "John Doe", lastMessage: "Hey! How are you?", unreadCount: 2, online: true },
  { id: 2, name: "Jane Smith", lastMessage: "Let's catch up soon!", unreadCount: 0, online: false },
  { id: 3, name: "Sarah Connor", lastMessage: "Where are you?", unreadCount: 1, online: true },
  { id: 4, name: "Michael Johnson", lastMessage: "I need the files", unreadCount: 5, online: false },
  { id: 5, name: "Alice Brown", lastMessage: "What's up?", unreadCount: 0, online: true },
];

const ContactList = () => {
  
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactClick = (contactId) => {
    navigate(`/message/${contactId}`); // Navigate to /message/:contactId
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.searchContainer}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
        <TextField
          fullWidth
          label="Search contacts"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <List className={classes.root}>
        {filteredContacts.map((contact) => (
          <div key={contact.id}>
            <ListItem button className={classes.listItem}  
              component={Link} to={`/message/${contact.id}`}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <img src={`https://i.pravatar.cc/150?img=${contact.id}`} alt={contact.name} />
                </Avatar>
                {contact.online && <div className={classes.onlineStatus}></div>}
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={contact.lastMessage}
              />
              {contact.unreadCount > 0 && (
                <Badge
                  badgeContent={contact.unreadCount}
                  color="secondary"
                  className={classes.badge}
                />
              )}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
