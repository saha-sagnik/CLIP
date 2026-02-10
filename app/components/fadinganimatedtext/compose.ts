// Jetpack Compose FadingAnimatedText Component
export const composeFadingAnimatedTextCode = `@Composable
fun FadingAnimatedText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeFadingAnimatedTextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
