import './journalList.css'
import {Divider} from "@mui/material";
import {Fragment} from "react";
import dataForTable from "../../../functions/dataForTable";

export default function JournalList({name, list}) {
    let test = [{
        "Іванов": "1",
        "Бондаренко": "1",
        "Білоус": "1",
        "Василенко": "1",
        "Гончаренко": "1",
        "Григоренко": "1",
        "Даниленко": "1",
        "Дата": "06.02.2024",
        "Зайцев": "1",
        "Захаренко": "1",
        "Коваленко": "1",
        "Козак": "1",
        "Козлов": "1",
        "Кравченко": "1",
        "Кузьменко": "1",
        "Кулик": "1",
        "Лисенко": "1",
        "Михайленко": "1",
        "Мороз": "1",
        "Осадчук": "1",
        "Павленко": "1",
        "Петренко": "1",
        "Романенко": "1",
        "Савченко": "1",
        "Сидоренко": "1",
        "Степаненко": "1",
        "Ткаченко": "1",
        "Ткачук": "1",
        "Черновол": "1",
        "Шаповаленко": "1",
        "Шевченко": "1",
        "Ярошенко": "1"
    }, {
        "Іванов": "1",
        "Бондаренко": "1",
        "Білоус": "1",
        "Василенко": "1",
        "Гончаренко": "1",
        "Григоренко": "1",
        "Даниленко": "1",
        "Дата": "07.02.2024",
        "Зайцев": "1",
        "Захаренко": "1",
        "Коваленко": "1",
        "Козак": "1",
        "Козлов": "1",
        "Кравченко": "1",
        "Кузьменко": "1",
        "Кулик": "1",
        "Лисенко": "1",
        "Михайленко": "1",
        "Мороз": "1",
        "Осадчук": "1",
        "Павленко": "1",
        "Петренко": "1",
        "Романенко": "1",
        "Савченко": "1",
        "Сидоренко": "1",
        "Степаненко": "1",
        "Ткаченко": "1",
        "Ткачук": "1",
        "Черновол": "1",
        "Шаповаленко": "1",
        "Шевченко": "1",
        "Ярошенко": "1"
    }, {
        "Іванов": "1",
        "Бондаренко": "1",
        "Білоус": "1",
        "Василенко": "1",
        "Гончаренко": "1",
        "Григоренко": "1",
        "Даниленко": "1",
        "Дата": "05.02.2024",
        "Зайцев": "1",
        "Захаренко": "1",
        "Коваленко": "1",
        "Козак": "1",
        "Козлов": "1",
        "Кравченко": "1",
        "Кузьменко": "1",
        "Кулик": "1",
        "Лисенко": "1",
        "Михайленко": "1",
        "Мороз": "1",
        "Осадчук": "1",
        "Павленко": "1",
        "Петренко": "1",
        "Романенко": "1",
        "Савченко": "1",
        "Сидоренко": "1",
        "Степаненко": "1",
        "Ткаченко": "1",
        "Ткачук": "1",
        "Черновол": "1",
        "Шаповаленко": "1",
        "Шевченко": "1",
        "Ярошенко": "1"
    }]

    function createMissTable(data) {
        const {dates, missed} = dataForTable(data)
        return (
            <div className={'missed__div'}>
                <table className={'missed__table'}>
                    <thead className={'missed__table__head'}>
                    <tr>
                        {dates.map(date => (
                            <>
                                <td>{date}</td>
                                <td><Divider orientation="vertical" variant="inset"/></td>
                            </>
                        ))}
                    </tr>
                    </thead>
                    <tbody className={'missed__table__body'}>
                    {missed.map(miss => (
                        <tr className={'students__table__body__miss'}>
                            {miss.map(res => (
                                <>
                                    <td>{res}</td>
                                    <td><Divider orientation="vertical" variant="inset"/></td>
                                </>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        )
    }

    function createStudentTable(data) {
        return (
            <table className={'students__table'}>
                <thead className={'students__table__head'}>
                <tr>
                    <td>№</td>
                    <td><Divider orientation="vertical" variant="inset"/></td>
                    <td>Student</td>
                    <td><Divider orientation="vertical" variant="inset"/></td>
                </tr>
                </thead>
                <tbody className={'students__table__body'}>
                {data.map((student, id) => (
                    <tr className={'students__table__body__student'}>
                        <td>{id + 1}</td>
                        <td><Divider orientation="vertical" variant="inset"/></td>
                        <td>{student}</td>
                        <td><Divider orientation="vertical" variant="inset"/></td>
                    </tr>))}
                </tbody>
            </table>
        )
    }

    return (
        <>
            <table className={'journal__table'}>
                <tbody>
                <tr>
                    <td className={'students'}>{createStudentTable(list)}</td>
                    <td className={'missed'}>{createMissTable(test)}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}