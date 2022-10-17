function convertMsToMinAndSec(ms) {

    const totalSeconds = ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const returningSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutes}:${returningSeconds}`
}

export default convertMsToMinAndSec;