function getFormattedDate({ date, month, year }) {

    const monthIndex = month === 1 ? 0 :
        month === 2 ? 1 :
            month === 3 ? 2 :
                month === 4 ? 3 :
                    month === 5 ? 4 :
                        month === 6 ? 5 :
                            month === 7 ? 6 :
                                month === 8 ? 7 :
                                    month === 9 ? 8 :
                                        month === 10 ? 9 :
                                            month === 11 ? 10 : 11;

    return new Date(year, monthIndex, date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default getFormattedDate;