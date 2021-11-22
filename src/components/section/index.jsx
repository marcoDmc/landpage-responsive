import * as C from "./style";
import foto from "../../assets/images/illustration-devices.svg";

const SectionOne = () => {
  return (
    <C.Div className="container">
      <C.Section className="componentOne">
        <C.Div className="sectionOne">
          <C.Div className="div_span">
            <C.Span>new</C.Span>
            <C.Span>monograph dashboard</C.Span>
          </C.Div>
          <C.Div className="txt">
            <C.H1>
              POWERFUL INSIGHTS <br /> INTO YOUR TEAM
            </C.H1>
            <C.Span>
              project planning and time tracking <br /> foor agile teams
            </C.Span>
          </C.Div>
          <C.Div className="div_btn">
            <C.Button>SCHEDULE DEMO</C.Button>
            <C.Span>to see a live preview</C.Span>
          </C.Div>
        </C.Div>
      </C.Section>
      <C.Section className="componentTwo">
        <C.Div className="sectionTwo">
          <C.Img src={foto} />
        </C.Div>
      </C.Section>
    </C.Div>
  );
};

export default SectionOne;
