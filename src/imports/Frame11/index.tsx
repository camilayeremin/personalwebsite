import imgResumePic from "./2ee7a8c0e31a837b933135daedfd6107b93330b7.png";
import imgPortfolioPic from "./1aba2f9758ed7a034c2ea1d51dba30aca5f6a6dc.png";
import imgMarkerPic from "./b7010e7e69e3320e40257272bb3972402bf80b11.png";
import imgLinedPaper from "./301b9906cd3ac0b178d3a82e9d4a4a679372f49b.png";
import imgContactMePic from "./96e6c848a14815906859b7f4d297fb7dc12c520e.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="aspect-[706/568] relative shrink-0 w-full" data-name="resume_pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.43%] left-[-28.75%] max-w-none top-[-21.33%] w-[163.74%]" src={imgResumePic} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Camilafont:Regular',regular] leading-[45px] not-italic relative shrink-0 text-[#0084ff] text-[40px] text-right whitespace-nowrap">resume</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-stretch flex flex-col items-end ml-0 mt-0 relative row-1 w-[366px]">
      <Frame1 />
    </div>
  );
}

function ResumePanel() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="resume_panel">
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center ml-0 mt-0 relative row-1 w-[276.961px]">
      <div className="aspect-[908/1065] relative shrink-0 w-full" data-name="portfolio_pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[221.6%] left-[-41.11%] max-w-none top-[-33.57%] w-[180.62%]" src={imgPortfolioPic} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Camilafont:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#0084ff] text-[40px] whitespace-nowrap">portfolio</p>
    </div>
  );
}

function PortfolioPanel() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="portfolio_panel">
      <Frame5 />
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center leading-[0] relative shrink-0 w-[366px]" data-name="left-column">
      <ResumePanel />
      <PortfolioPanel />
    </div>
  );
}

function Hello() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0" data-name="hello">
      <p className="[word-break:break-word] font-['Camilafont:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[50px] text-black whitespace-nowrap">hello!</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 right-0 top-0">
      <div className="absolute aspect-[580/330] left-[3px] right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0" data-name="marker-pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[192.21%] left-[-28.7%] max-w-none top-[-49.57%] w-[157.5%]" src={imgMarkerPic} />
        </div>
      </div>
      <div className="absolute aspect-[580/330] left-0 opacity-58 right-[3px] top-0" data-name="lined-paper">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[140.41%] left-[-5%] max-w-none top-[-21.26%] w-[105%]" src={imgLinedPaper} />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[279px] relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end justify-between px-[15px] py-[35px] relative size-full shadow-lg">
          <Group />
          <p className="[word-break:break-word] font-['Camilafont:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] h-[92.155px] leading-[45px] relative shrink-0 text-[35px] text-black w-[419.31px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
            welcome to my website, my name is camila and I love technical art, working in real time environments, and tool creation :)
          </p>
        </div>
      </div>
    </div>
  );
}

function IntroPanel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="intro_panel">
      <Frame7 />
    </div>
  );
}

function HaveALook() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0" data-name="have a look">
      <p className="[word-break:break-word] font-['Camilafont:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[45px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
        have a look around :)
      </p>
    </div>
  );
}

function MiddleColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[57px] items-center relative shrink-0 w-[493.364px]" data-name="middle-column">
      <Hello />
      <IntroPanel />
      <HaveALook />
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[3px] items-center ml-0 mt-0 relative row-1 w-[263.617px]">
      <div className="aspect-[911/1023] opacity-80 relative shrink-0 w-full" data-name="contact_me_pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.31%] left-[-41.16%] max-w-none top-[-28.15%] w-[259.06%]" src={imgContactMePic} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Camilafont:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#0084ff] text-[40px] whitespace-nowrap">contact me</p>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="contact_panel">
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="aspect-[908/1065] relative shrink-0 w-full" data-name="portfolio_pic">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[221.6%] left-[-41.11%] max-w-none top-[-33.57%] w-[180.62%]" src={imgPortfolioPic} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Camilafont:Regular',sans-serif] leading-[45px] not-italic relative shrink-0 text-[#0084ff] text-[40px] whitespace-nowrap">portfolio</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-center ml-0 mt-0 relative row-1 w-[276.961px]">
      <Frame3 />
    </div>
  );
}

function PortfolioPanel1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="portfolio_panel">
      <Frame2 />
    </div>
  );
}

function RightColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start leading-[0] relative shrink-0 w-[276.961px]" data-name="right-column">
      <ContactPanel />
      <PortfolioPanel1 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex gap-[68px] items-center relative size-full">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
}