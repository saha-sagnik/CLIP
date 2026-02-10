// Jetpack Compose ScrollVelocity Component
export const composeScrollVelocityCode = `@Composable
fun ScrollVelocity(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeScrollVelocityProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
