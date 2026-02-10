// Jetpack Compose ScrambleText Component
export const composeScrambleTextCode = `@Composable
fun ScrambleText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeScrambleTextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
