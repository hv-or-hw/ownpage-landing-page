import React from "react";
import Carousel from "./Carousel";
import CarouselSlide from "./CarouselSlide";
import IllustSection from "./IllustSection";
import PersonaSection from "./PersonaSection";
import PersonaItem from "./PersonaItem";
import StayWithSection from "./StayWithSection";
import ProcessSection from "./ProcessSection";
import FaqSection from "./FaqSection";
import faqData from "../../data/faq.json";
import ReviewSection from "./ReviewSection";
import ReviewItem from "./ReviewItem";

function HomePage() {
  return (
    <main>
      <Carousel>
        <CarouselSlide />
        <CarouselSlide />
        <CarouselSlide />
      </Carousel>
      <IllustSection illustSrc="/assets/home/illust-2.png">
        <h1>
          대충할 거면
          <br />
          시작도 안했습니다.
        </h1>
        <p>
          랜딩페이지 제작업체는 왜 단순히 <strong>'개발'</strong>만 할까요?
          <br /> 서비스에 진짜 필요한 건 <strong>'개발'</strong>이 아닌데..
        </p>
        <p>
          <strong>
            제작없는 '개발'밖에 모릅니다. <br />
            즉, 비즈니스를 모릅니다.
          </strong>
        </p>
      </IllustSection>
      <IllustSection illustSrc="/assets/home/illust-2.png" background="#f7f9fa">
        <h1>
          어디서나 제시한 랜딩페이지
          <br />
          아무런 의미 없습니다.
        </h1>
        <p>
          잘만든 랜딩페이지 하나로 매출, 방문자, 문의가
          <br /> <strong>2배 상승합니다.</strong>
        </p>
      </IllustSection>
      <PersonaSection
        title="이런 분들께 추천드립니다!"
        description="OWNPAGE 서비스가 제공하는 새로운 가치를 상징하고 있습니다."
      >
        <PersonaItem profile="/assets/home/persona-1.png">
          랜딩페이지를 통해 제품이나
          <br />
          <strong>서비스를 홍보하고 싶으신 분</strong>
        </PersonaItem>
        <PersonaItem profile="/assets/home/persona-2.png">
          기존 사이트를
          <br />
          <strong>새롭게 만들고 싶으신 분</strong>
        </PersonaItem>
        <PersonaItem profile="/assets/home/persona-3.png">
          방문자는 많은데
          <br />
          <strong>구매자는 적어서 고민이신 분</strong>
        </PersonaItem>
        <PersonaItem profile="/assets/home/persona-4.png">
          자사 브랜드의
          <br />
          <strong>가치를 높이고 싶으신 분</strong>
        </PersonaItem>
      </PersonaSection>
      <ReviewSection
        title="생생한 리뷰가 증명합니다"
        description="실제 원페이지에서 계약한 고객님들이 남겨주신 100% Real 후기입니다"
        background="#f7f9fa"
      >
        <ReviewItem
          user={{
            img: "/assets/home/user-1.png",
            name: "미노이",
            group: "에잇볼타운",
          }}
          score={5}
          content="서로 커뮤니케이션을 나누면서 더 나은 방향을 잡았던 카톡내용이 떠오릅니다. 혼자 사업을 오랫동안 진행해오면서 오랜만에 든든한 지원군을 얻은 느낌이었습니다."
        />
        <ReviewItem
          user={{
            img: "/assets/home/user-2.png",
            name: "유나",
            group: "브레이브걸스",
          }}
          score={4}
          content="더 이상 둘러보실 필요 없이 견적이라도 받아 보시는 것을 강력하게 추천합니다. 실제로 홈페이지를 만들지 않더라도 홈페이지 상담을 받는 것과 받지 않는 것의 차이는 앞으로 사업을 진행하시는 데에 큰 역할을 하리라 장담드릴 수 있습니다."
        />
        <ReviewItem
          user={{
            img: "/assets/home/user-3.png",
            name: "이호창",
            group: "김갑생할머니김",
          }}
          score={5}
          content="지금까지 사업을 하며 만나보지 못한, 정말 좋은 파트너입니다."
        />
        <ReviewItem
          user={{
            img: "/assets/home/user-1.png",
            name: "미노이",
            group: "에잇볼타운",
          }}
          score={5}
          content="서로 커뮤니케이션을 나누면서 더 나은 방향을 잡았던 카톡내용이 떠오릅니다. 혼자 사업을 오랫동안 진행해오면서 오랜만에 든든한 지원군을 얻은 느낌이었습니다."
        />
        <ReviewItem
          user={{
            img: "/assets/home/user-1.png",
            name: "미노이",
            group: "에잇볼타운",
          }}
          score={5}
          content="서로 커뮤니케이션을 나누면서 더 나은 방향을 잡았던 카톡내용이 떠오릅니다. 혼자 사업을 오랫동안 진행해오면서 오랜만에 든든한 지원군을 얻은 느낌이었습니다."
        />
      </ReviewSection>
      <ProcessSection
        upperTitle="Ownpage the Process Workflow"
        title="원페이지는 끝까지 책임지고 진행합니다."
      />
      <FaqSection faqList={faqData.data.slice(0, 5)} />
      <StayWithSection
        title="Stay with Ownpage"
        description="원페이지가 제안하는 솔루션을 통해 비즈니스의 새로운 성장과 발전을 경험하세요"
        linkTo="/contact"
        linkLabel="견적문의하기"
      />
    </main>
  );
}

export default HomePage;
