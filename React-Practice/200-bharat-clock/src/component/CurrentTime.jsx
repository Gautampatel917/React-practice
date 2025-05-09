let CurrentTime = () => {
    const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    // return <p>This is the current time: {`${hours}:${minutes}:${seconds}`}</p>
    return <p>This is the current time: {date.toLocaleDateString()}</p>
}

export default CurrentTime;