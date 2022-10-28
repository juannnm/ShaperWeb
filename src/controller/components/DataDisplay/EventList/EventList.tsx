import { List, ListItem } from "@mui/material";
import { EventCard } from "../../card/EventCard";

export const EventList = () => {

  const activities = [
    {
      id:1,
      dateNumber: 1,
      dateMonth:'nov',
      title: 'Grand event',
      description:'This is a gran event of our academy',
      bgcolor:'blue'
    },
    {
      id:2,
      dateNumber: 2,
      dateMonth:'nov',
      title: 'Grand event',
      description:'This is a gran event of our academy',
      bgcolor:'green'
    },
    {
      id:3,
      dateNumber: 3,
      dateMonth:'nov',
      title: 'Grand event',
      description:'This is a gran event of our academy',
      bgcolor:'yellow'
    },
    {
      id:4,
      dateNumber: 4,
      dateMonth:'nov',
      title: 'Grand event',
      description:'This is a gran event of our academy',
      bgcolor:'pink'
    },
    {
      id:5,
      dateNumber: 5,
      dateMonth:'nov',
      title: 'Grand event',
      description:'This is a gran event of our academy',
      bgcolor:'blue'
    },

  ]
  
  return (
    <List>
       {activities.map((activity: Array) => {
          <ListItem key={activity.id}>
            <EventCard
              bgcolor={activity.bgcolor}
              dateNumber={activity.dateNumber}
              dateMonth={activity.dateMonth}
              title={activity.title}
              description={activity.description}
            />
          </ListItem>
        })}
    </List>
  )
}