// Jetpack Compose GlitchText Component
export const composeGlitchTextCode = `@Composable
fun GlitchText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeGlitchTextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
