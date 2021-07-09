import './Articles.css';

export function displayArticles(articles) {
    const len = articles.length;
    let display = [];

    if (len === 0) {
        return(
            <p>There are no headlines for this country.</p>
        );
    }

    // TODO: 'load more' button at bottom of scroll
    // TODO: cache articles + images
    for (let i = 0; i < 10; i++) {
        const article = articles[i];
        display[i] =
            <section className="article-card">
                <p><strong>{article.title}</strong> by {article.author}</p>
                <img className="article-img" src={article.urlToImage} width="90%" alt='Article'/>
                <div className="article-content">
                    {article.content}
                    <p> Read the full article <a href={article.url} target="_blank" rel="noreferrer">here</a>. </p>
                </div>
            </section>
    }

    return (
        <div className="articles-container">
            {display}
        </div>
    )
}
