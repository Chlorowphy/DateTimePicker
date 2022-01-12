import ButtonsPanel from './ButtonsPanel';
import DatesView from './DatesView/DatesView';
import TimesView from './TimesView/TimesView';

import './DateTimePickerView.css';

const DateTimePickerView = (): JSX.Element => {
    return (
        <div id="DateTimePickerView">
            <p id="Title">Schedule Response</p>
            <div id="Calendar">
                <DatesView />
                <TimesView />
            </div>
            <ButtonsPanel />
        </div>
    );
};

export default DateTimePickerView;
