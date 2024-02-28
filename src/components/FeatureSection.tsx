import FeatureArticle from "./FeatureArticle";
import { featureArticles } from "../constants/featureArticles";

export default function FeatureSection() {
  return (
    <div className="mb-[80px] mt-[31px] md:mt-[71px] md:flex md:gap-[30px]">
      {featureArticles.map((article, index) => {
        return (
          <FeatureArticle
            number={index + 1}
            alt={article.alt}
            image={article.img}
            title={article.title}
            description={article.description}
          />
        );
      })}
    </div>
  );
}
