import styled from 'styled-components';
import FONTSIZE from '../../constants/fontsize';

const Wrapper = styled.div`
	left: 0;
	right: 0;
	margin: auto;
	width: 39rem;
	height: 84.4rem;
	border: #eeeeee 1px solid; // 임시용
	position: relative;
`;
const TitleWrapper = styled.div`
	top: 0rem;
	width: 39rem;
	padding: 0 0 0 2rem;
	height: 12.2rem;
	display: flex;
	align-items: center;
`;

const Title = styled.h1`
	color: #212121;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 700;
	font-size: ${FONTSIZE.Title};
	width: ${props => props.titleWidth && `${props.titleWidth}rem`};
	line-height: 4rem;
	letter-spacing: 0.1rem;
`;
export { Wrapper, TitleWrapper, Title };
