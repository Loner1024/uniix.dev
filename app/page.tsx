import ArticleListCard from "@/components/article-list-card"
import {getAllPostsMetadata} from "@/lib/get_metadata";

export default function Home() {
    const allMetadata = getAllPostsMetadata();
    return (
        //     首页文章列表
        <div className={"divide-y"}>
            {allMetadata.map((article, index) => <ArticleListCard slug={article.slug} key={index}
                                                                  heading={article.title}
                                                                  summary={article.summary}
                                                                  tags={article.tags}
                                                                  date={article.date}
                />
            )}
        </div>
    )
        ;
}
