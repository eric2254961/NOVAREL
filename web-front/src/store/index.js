import * as Counter from '../reducer/Counter';
import * as User from '../reducer/Auth'
import * as NotificationRx from '../reducer/Notification'

let rootReducers = {
    user: User.reducer,
    context: null,
    notification: NotificationRx.reducer,
    counter: Counter.reducer,
}
export default rootReducers;
