// Jetpack Compose TextMorphingEffect Component
export const composeTextMorphingEffectCode = `@Composable
fun TextMorphingEffect(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeTextMorphingEffectProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
