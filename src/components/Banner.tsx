import { banner } from "../constants/banner";

export default function Banner() {
  return (
    <div>
      <img
        src={banner.imageWeb}
        alt={banner.title}
        className="hidden h-[300px] w-[730px] md:block"
      />
      <img
        src={banner.imageMobile}
        alt={banner.title}
        className="h-[300px] w-[343px] md:hidden"
      />
      <div className="mt-[24px] md:mt-[30px] md:flex md:justify-between">
        <div className="h-[120px] w-[343px] text-l font-extra-bold md:h-[182px] md:w-[350px] md:text-xl">
          {banner.title}
        </div>
        <div className="flex h-[181px] w-[350px] flex-col text-body text-gun-metal md:ml-[30px]">
          <div className="mt-[16px] md:mt-0">{banner.description}</div>
          <button className="mt-[24px] h-[48px] w-[185px] bg-light-vermillion text-[14px] font-bold leading-[24px] tracking-[4.38px] text-almost-white hover:bg-dark-space-blue md:mt-[29px]">
            Leia Mais
          </button>
        </div>
      </div>
    </div>
  );
}
