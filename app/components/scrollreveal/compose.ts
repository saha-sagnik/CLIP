// Jetpack Compose ScrollReveal Component
export const composeScrollRevealCode = `@Composable
fun ScrollReveal(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeScrollRevealProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
