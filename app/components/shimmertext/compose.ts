// Jetpack Compose ShimmerText Component
export const composeShimmerTextCode = `@Composable
fun ShimmerText(
    text: String,
    modifier: Modifier = Modifier
) {
    Text(
        text = text,
        modifier = modifier
    )
}`;

export const composeShimmerTextProps = [
  { prop: 'text', type: 'String', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
