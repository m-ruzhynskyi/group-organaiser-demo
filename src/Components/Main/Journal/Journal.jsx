import './journal.css'
import {useSelector} from "react-redux";
import NotSelected from "../../Reusable/NotSelected/NotSelected";
import SelectList from "../../Reusable/SelectList/SelectList";
import Loader from "../../Reusable/Loader/Loader";
import {useEffect, useState} from "react";
import JournalList from "./JournalLIst/JournalList";

export default function Journal() {
    const [chosenSubj, setChosenSubj] = useState('subject')
    const groupName = useSelector(state => state.schedules.groupName)
    const subjects = useSelector(state => state.schedules.schedulesList)[0]
    const status = useSelector(state => state.schedules.status)
    const students = useSelector(state => state.schedules.schedulesList)[0]

    function newSubject(e) {
        let subj = e.target.textContent
        subj !== '' && setChosenSubj(e.target.textContent)
    }

    useEffect(() => {
        setChosenSubj('subject')
    }, [groupName]);

    return (
        <div className={'journal'} style={{display: status !== 'succeeded' ? 'flex' : 'block'}}>
            {status !== 'succeeded' ? <Loader/> : (
                <>
                    <div className={'journal__button__div'}>
                        <SelectList isDisabled={groupName === 'group' && 1} handleListClick={(e) => newSubject(e)}
                                    list={groupName === 'group' ? [] : subjects[groupName]['subjects'] === undefined ? [] : subjects[groupName]['subjects']}
                                    name={chosenSubj}/>
                    </div>
                    {groupName === 'group' || chosenSubj === 'subject' ?
                        <NotSelected text={`a subject ${groupName === 'group' ? 'and a group' : ''}`}/> : (
                            <div className={'journal__list'}>
                                <JournalList list={students[groupName]['students']} name={'header'}/>
                            </div>
                        )}
                </>
            )}
        </div>
    )
}