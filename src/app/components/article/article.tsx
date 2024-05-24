

export const Article = () => {

    const intro = "Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. At erat pellentesque adipiscing commodo elit at imperdiet dui. Massa id neque aliquam vestibulum morbi blandit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. A scelerisque purus semper eget duis at tellus at urna. Erat velit scelerisque in dictum non consectetur. Netus et malesuada fames ac turpis egestas integer eget aliquet. Urna cursus eget nunc scelerisque viverra. Scelerisque varius morbi enim nunc faucibus. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam."

    const images: string[] = [
        "https://images.unsplash.com/photo-1687851898206-6636e30dcab1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1711014476933-5a064094136b?q=80&w=3152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1714547509046-0cf60126f331?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1699014195343-97cff48b783d?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1709279126773-75c24433b570?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const text: string[] = [
        "Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Eget dolor morbi non arcu risus quis varius. Posuere morbi leo urna molestie at elementum. Urna condimentum mattis pellentesque id nibh tortor. Orci a scelerisque purus semper eget. Nunc non blandit massa enim nec. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Interdum consectetur libero id faucibus nisl tincidunt.Semper feugiat nibh sed pulvinar proin gravida hendrerit.",
        "Turpis massa tincidunt dui ut ornare. Et malesuada fames ac turpis egestas sed. Massa vitae tortor condimentum lacinia. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Ut sem viverra aliquet eget sit. Ipsum consequat nisl vel pretium. Blandit aliquam etiam erat velit scelerisque. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.",
        "Viverra nibh cras pulvinar mattis nunc. Blandit turpis cursus in hac. Et netus et malesuada fames ac turpis egestas maecenas. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Leo vel fringilla est ullamcorper eget nulla facilisi. Nunc consequat interdum varius sit amet mattis.",
        "Id cursus metus aliquam eleifend mi in nulla. Maecenas accumsan lacus vel facilisis volutpat. Dolor sit amet consectetur adipiscing. Aliquet risus feugiat in ante metus dictum at. Auctor urna nunc id cursus metus aliquam. Blandit massa enim nec dui nunc mattis. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Feugiat nisl pretium fusce id velit ut. Adipiscing diam donec adipiscing tristique risus nec. In vitae turpis massa sed. Pharetra convallis posuere morbi leo urna. Hendrerit dolor magna eget est. Et netus et malesuada fames ac turpis.",
        "Lacus vestibulum sed arcu non odio euismod. Sed vulputate odio ut enim. Scelerisque eleifend donec pretium vulputate. Mattis enim ut tellus elementum sagittis vitae et. Tempor orci dapibus ultrices in iaculis nunc sed. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Purus in massa tempor nec feugiat nisl pretium. Habitasse platea dictumst vestibulum rhoncus est. Dolor sit amet consectetur adipiscing elit duis tristique. Cras sed felis eget velit aliquet sagittis id consectetur purus."
    ]

    const sentences = intro.split('.')
    const firstSentence = sentences.shift()
    const remainingSentences = sentences.join('.')
    return (
        <>
            <section className="articleSectionContainer">
                <div className="articleIntro">
                    <p><span className="firstWord">{firstSentence}.</span> {remainingSentences}</p>
                </div>
                {images ?
                    images.map((image, index) => {
                        const words = text[index].split(' ');
                        const firstWord = words.shift();
                        const remainingWords = words.join(' ');

                        return(
                        <div className={`articlePartContainer ${index % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="articleDiv">
                                <div className="imageArticle" style={{ backgroundImage: `url(${images[index]})` }}></div>
                            </div>
                            <div className="articleDiv">
                                <div className="textArticle">
                                    <p><span className="firstWord">{firstWord}</span> {remainingWords}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                    : null}
            </section>
        </>
    )
}