import {useSelector} from "react-redux";
import NotSelected from "../../Reusable/NotSelected/NotSelected";
import CreateDay from "./Day/CreateDay";
import Loader from "../../Reusable/Loader/Loader";
import determineWeek from "../../functions/determineWeek";
import uniqid from "uniqid";
import './schedules.css'

export default function Schedules() {
    const group = useSelector(state => state.schedules.groupName)
    const schedule = useSelector(state => state.schedules.schedulesList)[0]
    const status = useSelector(state => state.schedules.status)

    function sortDays() {
        if (schedule[group]['schedule'] !== undefined) {
            const weekGroupSchedule = schedule[group]['schedule'][determineWeek()]
            return Object.keys(weekGroupSchedule).map(day => weekGroupSchedule[day])
        } else return []
    }

    return (
        <div className={'schedule'}>
            {!status ? <Loader/> :
                group === 'group' ?
                    <NotSelected text={'a group'}/> :
                    (<div className={'schedule__wrapper'}>
                        {sortDays().map((day, id) => <CreateDay key={uniqid()} id={id} data={day}/>)}
                    </div>)
            }
            <div></div>
        </div>
    )
}