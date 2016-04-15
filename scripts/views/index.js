import moment from "moment";

setInterval(() => {
    document.querySelector("#time").textContent = moment().format("h:mm:ssA MMMM D, YYYY");
}, 10);