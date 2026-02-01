
import styled from "styled-components";
import { sizeAndDown } from "../../styles/responsive";
import { CFade } from "../Animation";
import { Title } from "../styled";
interface Reason {
  title: string;
  description: string;
}
const data: Reason[] = [
  {
    title: "Build trust and credibility",
    description:
      "Showcase your product expertise through writers deeply rooted in emerging technology",
  },
  {
    title: "Stand out from the crowd",
    description:
      "Create a distinct brand personality by supplementing your marketing campaigns with technical content",
  },
  {
    title: "Focused and agile",
    description:
      "Publish engaging and relevant content at quick turnaround times",
  },
  {
    title: "Drive more ROI",
    description: "Connect with your audience and drive greater revenue",
  },
];
export default function Reasons() {
  return (
    <ReasonsWrapper>
      <Title> Why choose us? </Title>
      <DesktopContainer>
        <CFade>
          <ListWrapper>
            {data.slice(0, 2).map((item, id) => (
              <Card key={id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </ListWrapper>
        </CFade>
        <img src={"assets/illustrations/why.svg"} />
        <CFade>
          <ListWrapper>
            {data.slice(2).map((item, id) => (
              <Card key={id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </ListWrapper>
        </CFade>
      </DesktopContainer>
      <CFade>
        <MobileContainer>
          <img src={"assets/illustrations/why.svg"} />
          <ListWrapper>
            {data.map((item, id) => (
              <Card key={id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </ListWrapper>
        </MobileContainer>
      </CFade>
    </ReasonsWrapper>
  );
}
const ReasonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
`;
const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 22vw;
  }
  ${sizeAndDown("md")} {
    display: none;
  }
`;
const MobileContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  ${sizeAndDown("md")} {
    display: flex;
    img {
      width: 100%;
    }
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25vw;
  margin: 0 2rem;
  ${sizeAndDown("md")} {
    width: 100%;
    margin: 2rem 1rem;
  }
`;
const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-left: solid 5px ${({ theme }) => theme.colors.teal};
  margin: 1rem 0;
  padding: 0 1rem;
  width: 90%;
  font-family: "Averta";
  h3 {
    font-weight: 600;
    font-size: 1.25rem;
  }
  p {
    font-size: 1.2rem;
    font-size: 1.1rem;
  }
`;
// import styled from "styled-components";
// import { sizeAndDown } from "../../styles/responsive";
// import { features, userComment } from "./fakeData";
// import { AiFillStar } from "react-icons/ai";

// export default function Reasons() {
//   return (
//     <div className="reasons-root">
//       <h1 className="gilroy rem-3 reasons-root-title">Why Rely On Us?</h1>
//       <div className="Testing ">
//         <div className="rely-on-content-turbine">
//           <h2 className="gilroy rem-2">
//             Here&apos;s Why You Can Rely on <br /> Content Turbine
//           </h2>
//           <div className="features-of-content-turbine">
//             <div className="feature averta">
//               {features.map((feature) => {
//                 return (
//                   <div className="feature-item">
//                     <h3 className="bold">{feature.title}</h3>
//                     <p className="gray rem-1">{feature.text}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="user">
//           {userComment.map((comment) => {
//             return (
//               <div className="user-item averta">
//                 <div className="user-information">
//                   <div className="user-image">
//                     <img src={comment?.img} alt="" />
//                   </div>
//                   <div className="user-bio">
//                     <div className="user-bio-parent">
//                       <h4>{comment?.name}</h4>
//                       <div className="star-div">
//                         <AiFillStar />
//                         <AiFillStar />
//                         <AiFillStar />
//                         <AiFillStar />
//                         <AiFillStar />
//                       </div>
//                     </div>
//                     <p>
//                       {comment?.experience} <br /> {comment?.opinion}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }