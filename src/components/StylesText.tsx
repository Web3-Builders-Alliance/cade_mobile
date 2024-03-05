import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'VT323'  , fontSize : 34 , color : "white"}]} />;
}

export function MonoTextSmall(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'VT323'  , fontSize : 20}]} />;
}

