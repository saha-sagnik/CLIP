// Jetpack Compose TypewritterEffect Component
export const composeTypewritterEffectCode = `@Composable
fun TypewritterEffect(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeTypewritterEffectProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
