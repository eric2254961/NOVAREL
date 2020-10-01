import * as Counter from '../reducer/Counter';
import * as User from '../reducer/Auth'
import * as NotificationRx from '../reducer/Notification'
import * as ClientRx from "../reducer/Clients";

let rootReducers = {
    user: User.reducer,
    clients: ClientRx.reducer,
    notification: NotificationRx.reducer,
    counter: Counter.reducer,
}
export default rootReducers;
