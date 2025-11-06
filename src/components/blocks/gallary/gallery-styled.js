import styled from "styled-components";
import { Text } from "../../ui/text/text";
import galleryPawImg from "../../../assests/svg/cat-paw-promo.svg";
import galleryBgSpot from "../../../assests/svg/gallery-bg-spot.svg";
import galleryBgLeaves from "../../../assests/svg/gallery-bg-leaves.svg";

export const StyledGallery = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.colorForDarkBackground};
  padding: 80px 70px 100px;

  &:before {
    content: ${`url(${galleryBgSpot})`};
    position: absolute;
    right: 0;
    top: 0;
  }

  &:after {
    content: ${`url(${galleryBgLeaves})`};
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const StyledGalleryTitle = styled(Text)`
  position: relative;
  width: 100%;
  text-align: center;
  &:after {
    content: ${`url(${galleryPawImg})`};
    position: absolute;
    right: -70px;
    top: -10px;
  }
`;
