
async function fakeDelay () {
    await new Promise((resolve , reject) => {
        setTimeout(resolve , 3000)
    } )
}   



const About = async () => {
    await fakeDelay()
    return (
        <div>This is about Page</div>
    )
}

export default About;