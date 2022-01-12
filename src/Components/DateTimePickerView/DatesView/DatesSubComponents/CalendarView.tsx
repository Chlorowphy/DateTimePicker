import './CalendarView.css';
import MonthView from './MonthView';

const CalendarView = (): JSX.Element => {
    return (
        <>
            <MonthView />
            <div id="CalendarView">
                <table>
                    <thead>
                        <tr>
                            <td>S</td>
                            <td>M</td>
                            <td>T</td>
                            <td>W</td>
                            <td>T</td>
                            <td>F</td>
                            <td>S</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </>
    );
};

export default CalendarView;
