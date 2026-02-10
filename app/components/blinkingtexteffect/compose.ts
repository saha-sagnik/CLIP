// Jetpack Compose BlinkingTextEffect Component
export const composeBlinkingTextEffectCode = `@Composable
fun BlinkingTextEffect(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeBlinkingTextEffectProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
