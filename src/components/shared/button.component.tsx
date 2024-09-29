import {forwardRef} from 'react';
import styled from 'styled-components';
import {
	Button as SUIButton,
	ButtonProps as SUIButtonProps,
} from 'semantic-ui-react';

const SButton = styled(SUIButton)`
	background-color: ${({theme: {colors}}) => colors.primary.m} !important;
	color: ${({theme: {colors}}) => colors.primary.c} !important;
`;

interface Props extends SUIButtonProps {}

export const Button = forwardRef<SUIButton, Props>(function Button(props, ref) {
	return <SButton {...props} ref={ref} />;
});

export type ButtonProps = Props;
