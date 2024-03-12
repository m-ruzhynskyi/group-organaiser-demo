import {useSelector} from "react-redux";
import NotSelected from "../../Reusable/NotSelected/NotSelected";
import CreateDay from "./Day/CreateDay";
import Loader from "../../Reusable/Loader/Loader";
import determineWeek from "../../functions/determineWeek";
import {useEffect} from "react";

export default function Schedules() {
    const group = useSelector(state => state.schedules.groupName)
    const schedule = useSelector(state => state.schedules.schedulesList)[0]
    const status = useSelector(state => state.schedules.status)

    function sortDays() {
        if (group !== 'group') {
            if (schedule[group]['schedule']) {
                const weekGroupSchedule = schedule[group]['schedule'][determineWeek()]
                console.log(Object.keys(weekGroupSchedule).map(day => weekGroupSchedule[day]))
            }
        } else return []
    }

    useEffect(() => {
        sortDays()
    }, [group]);
    return (
        <div className={'schedule'}>
            {!status ? <Loader/> :
                group === 'group' ?
                    <NotSelected text={'a group'}/> :     <></>

                    // (<>

                    //     {sortDays().map(day => <CreateDay data={day}/>)}
                    // </>)
            }
        </div>
    )
}