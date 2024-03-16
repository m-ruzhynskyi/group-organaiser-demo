import './journalMore.css'
import Loader from "../../../../Reusable/Loader/Loader";
import DontHaveData from "../../../../Reusable/DontHaveData/DontHaveData";
import SelectList from "../../../../Reusable/SelectList/SelectList";
import NotSelected from "../../../../Reusable/NotSelected/NotSelected";
import JournalList from "../../../Journal/JournalLIst/JournalList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getJournalBySubject} from "../../../../../store/journalSlice";
import CreateMonths from "./CreateMonth/CreateMonth";


export default function JournalMore() {
    const [date, setDate] = useState([])
    const [completedDate, setCompletedDate] = useState('')
    const [monthData, setMonthData] = useState([])
    const [missStudents, setMissStudents] = useState()
    const {groupName, schedulesList} = useSelector(state => state.schedules)
    const journal = useSelector(state => state.journal.journal)
    const dispatch = useDispatch()

    function setDateNext(e) {
        const newCompletedDate = e.target.textContent
        setCompletedDate(newCompletedDate)

        let setMonth = Number(newCompletedDate.split('.')[1]) - 1
        const filteredData = journal[setMonth].filter(element => element['Дата'] === newCompletedDate);
        setDate(filteredData)
    }

    useEffect(() => {
        function quickSort(arr) {
            if (arr.length <= 1) return arr;
            const pivot = arr[0];
            const left = [];
            const right = [];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) left.push(arr[i]);
                else right.push(arr[i]);
            }
            return [...quickSort(left), pivot, ...quickSort(right)];
        }

        let tempArray = []
        journal.forEach(months => {
            months.forEach(element => {
                let date = element['Дата']
                let month = element['Дата'].split('.')[1]
                if (!tempArray[month]) tempArray[month] = []
                tempArray[month].push(date);
            })
        })
        let uniqArray = []
        for (let i = 0; i < Object.values(tempArray).length; i++) {
            let month = Object.values(tempArray)[i]
            month = month.map(day => Number(day.split('.')[0]))
            if (month.length >= 1) {
                uniqArray.push(Array.from(new Set(month)));
            }
        }
        let sortedArr = uniqArray.map(element => quickSort(element))
        sortedArr = sortedArr.map((element, id) => element.map(day => `${day.toString().padStart(2, '0')}.${(id + 1).toString().padStart(2, '0')}.2024`))
        setMonthData(sortedArr)
        // eslint-disable-next-line
    }, [journal]);

    useEffect(() => {
         function getMessingStudents() {
            const tempMissStudent = date.map((element, id) => {
                const missingStudents = []
                Object.values(element).filter((val, id) => (Number(val) === 0) && missingStudents.push(schedulesList[0][groupName]['students'][id]))
                const fullObject = {};

                fullObject[id] = {students: missingStudents, course: schedulesList[0][groupName]['subjects'][element['Subj']]}
                return fullObject
            })
            setMissStudents(tempMissStudent);
        }

        if (date.length > 0) {
            getMessingStudents();
        }
        // eslint-disable-next-line
    }, [date]);

    return (
        <div className={'journalMore'}>
            <CreateMonths monthData={monthData} setData={setDateNext}/>
        </div>
    )
}