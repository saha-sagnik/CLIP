// Jetpack Compose ScrollFloat Component
export const composeScrollFloatCode = `@Composable
fun ScrollFloat(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeScrollFloatProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
