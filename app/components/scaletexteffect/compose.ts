// Jetpack Compose ScaleTextEffect Component
export const composeScaleTextEffectCode = `@Composable
fun ScaleTextEffect(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeScaleTextEffectProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
