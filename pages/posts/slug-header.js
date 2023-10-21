export default function SlugHeader(props) {
    return(
        <section className="grid-container">
            <h1>{props.title}</h1>
            <div className="slug-description-container">
                <div className="slug-description-details-wrapper mt-20">
                    <ul className="flex justify-between">
                        <li>{props.details}</li>
                        <li>{props.details}</li>
                        <li>{props.details}</li>
                    </ul>
                </div>
                <p className="mt-4">
                    {props.description}
                </p>
                <a href={props.link}>let's chat!</a>
            </div>
        </section>
    )
}