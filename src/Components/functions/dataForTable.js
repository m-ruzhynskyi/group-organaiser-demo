import formatedDate from "./formatedDate";

export default function dataForTable(data) {
    let dates = []
    let missed = []
    let dataWithoutDate = [];

    // eslint-disable-next-line array-callback-return
    data.map((date, key) => Object.keys(date).map((element, id) => {
        if (element === 'Дата') {
            dates.push(formatedDate(date[element]));
        } else {
            let temp = date[element]
            if (dataWithoutDate[key] === undefined) {
                dataWithoutDate.push([temp])
            } else dataWithoutDate[key].push(temp)
        }
    }))

    // eslint-disable-next-line array-callback-return
    dataWithoutDate.map((date) => Object.keys(date).map((element, id) => {
        let temp = date[element]
        if (missed[id] === undefined) {
            missed.push([temp])
        } else missed[id].push(temp)
    }))

    return {dates, missed}
}