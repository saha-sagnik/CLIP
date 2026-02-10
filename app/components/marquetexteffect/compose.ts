// Jetpack Compose MarqueTextEffect Component
export const composeMarqueTextEffectCode = `@Composable
fun MarqueTextEffect(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeMarqueTextEffectProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
