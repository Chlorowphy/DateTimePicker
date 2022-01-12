import CalendarView from './DatesSubComponents/CalendarView';
import ScheduledDateView from './DatesSubComponents/ScheduledDateView';

import './DatesView.css';

const DatesView = (): JSX.Element => {
    return (
        <div id="DatesView">
            <ScheduledDateView />
            <CalendarView />
        </div>
    );
};

export default DatesView;
