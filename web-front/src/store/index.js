import Counter from '../reducer/Counter';
import User from '../reducer/Auth'
import NotificationRx from '../reducer/Notification'
import ClientRx from "../reducer/Clients";
import TicketRx from "../reducer/Ticket";

let rootReducers = {
    user: User.reducer,
    clients: ClientRx.reducer,
    tickets: TicketRx.reducer,
    notification: NotificationRx.reducer,
    counter: Counter.reducer,
}
export default rootReducers;
