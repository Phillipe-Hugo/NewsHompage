import NewTopic from "./NewTopic";
import { newTopics } from "../constants/newTopics";
import Seperator from "./Seperator";

export default function NewSection() {
  return (
    <div className="mx-[21px] my-[24px] md:mx-[24px] md:mt-[32px]">
      <h1 className="text-m font-bold text-yellow md:text-l">New</h1>
      <div className="mt-[34px]">
        {newTopics.map((topic, index) => {
          return (
            <>
              <NewTopic
                topic={topic.title}
                description={topic.description}
              ></NewTopic>
              {index < newTopics.length - 1 && <Seperator />}
            </>
          );
        })}
      </div>
    </div>
  );
}
