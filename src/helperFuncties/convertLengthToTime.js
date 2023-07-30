function getTimeStampFromDuration(length) {

    const minutes = Math.floor(length / 60);
    const seconds = Math.floor(length % 60);

    return [minutes, seconds]
}

export default getTimeStampFromDuration;