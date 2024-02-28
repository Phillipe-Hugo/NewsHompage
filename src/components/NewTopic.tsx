interface NewTopicProps {
  topic: string;
  description: string;
}

export default function NewTopic({ topic, description }: NewTopicProps) {
  return (
    <div className="mt-[31px] h-[84px] w-[302px]">
      <a
        href="/"
        className="text-s font-bold text-almost-white hover:text-yellow"
      >
        {topic}
      </a>
      <div className="mt-[8px] text-body text-silver">{description}</div>
    </div>
  );
}
