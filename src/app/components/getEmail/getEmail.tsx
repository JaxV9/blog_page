

export const GetEmail = () => {

    return (
        <>
            <section className="getEmailContainer">
                <div className="getEmailLabel">
                    <p>Subscribe to our newsletter</p>
                </div>
                <div className="getEmailInputContainer">
                    <input className="getEmailInput" type="text" />
                    <a href="mailto:layanj.pro@gmail.com"><button className="getEmailBtn">Send</button></a>
                </div>
            </section>
        </>
    )
}