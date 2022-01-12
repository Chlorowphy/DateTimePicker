import ScheduledTimeView from './TimesSubComponents/ScheduledTimeView';
import TimeCalendarView from './TimesSubComponents/TimeCalendarView';

import './TimesView.css';

const TimesView = (): JSX.Element => {
    return (
        <div id="TimesView">
            <ScheduledTimeView />
            <TimeCalendarView />
        </div>
    );
};

export default TimesView;
