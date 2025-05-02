// Formate-Date from Post-Product in Firebase-Firestore
export const FormatDate = (date) => {
    const formattedDate = date.toLocaleString("en-GB", {
        day: "2-digit",      // Day in two-digit format
        month: "2-digit",    // Month in two-digit format
        year: "numeric",     // Full year
        hour: "2-digit",     // Hour in two-digit format (12-hour format)
        minute: "2-digit",   // Minute in two-digit format
        second: "2-digit",   // Second in two-digit format
        hour12: true,        // Use AM/PM
    }).replace(/\//g, "-");  // Replace '/' with '-' for the date format

    return formattedDate.replace(/\s(am|pm)$/i, (match) => match.toUpperCase());
};




// Convert-Date from Get-Product Firebase-Firestore
// export const ConvertDate = (time) => {

//     const timeDate = time
//         ? new Date(time.seconds * 1000 + time.nanoseconds / 1000000)
//         : null;

//     const Timed = timeDate
//         ? timeDate
//             .toLocaleString("en-GB", {
//                 day: "2-digit",
//                 month: "2-digit",
//                 year: "numeric",
//                 hour: "2-digit",
//                 minute: "2-digit",
//                 second: "2-digit",
//                 hour12: true,  // AM/PM format
//             })
//             .replace(/\//g, "-")  // Replace '/' with '-'
//             .replace(" am", " AM")  // Capitalize 'am'
//             .replace(" pm", " PM")  // Capitalize 'pm'
//         : "N/A";


//     return Timed;
// }




// Convert-Date from Get-Product
export const convertDateFormat = (date) => {
    // const DateObj = new Date(date);

    // const options = {
    //     day: '2-digit',
    //     month: 'long',
    //     year: 'numeric',
    // };

    // const formattedDate = DateObj.toLocaleDateString('en-GB', options);
    // const [dayOfMonth, monthName, yearValue] = formattedDate.split(' ');

    // return `${dayOfMonth} ${monthName}, ${yearValue}`;



    const [datePart] = date?.split(','); // "17-04-2025"
    const [day, month, year] = datePart?.split('-');

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthIndex = parseInt(month, 10) - 1;
    const monthName = monthNames[monthIndex];

    return `${day} ${monthName}, ${year}`;
}



export const DetailsconvertDateFormat = (date) => {
    if (!date || typeof date !== "string") return "";

    const [datePart] = date?.split(','); // "17-04-2025"
    if (!datePart) return "";

    const [day, month, year] = datePart?.split('-') || [];
    if (!day || !month || !year) return "";


    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthIndex = parseInt(month, 10) - 1;
    const monthName = monthNames[monthIndex] || "Unknown";

    return `${day} ${monthName}, ${year}`;
}
